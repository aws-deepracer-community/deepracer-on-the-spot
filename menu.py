
import json, os

# ENV Config files functions

def write_env_variable(file, variable, value):
    with open(file, "r") as f:
        content = f.readlines()

    for i, line in enumerate(content):
        if line.startswith(variable + "="):
            content[i] = variable + "=" + value + "\n"
            break
    else:
        content.append(variable + "=" + value + "\n")

    with open(file, "w") as f:
        f.writelines(content)


def read_env_variable(file, variable):
    with open(file, "r") as f:
        content = f.readlines()

    for line in content:
        if line.startswith(variable + "="):
            return line.split("=", 1)[1].strip()

    return None


# Funciones para archivos JSON

def write_json_value(file, key, value,dtype):
    with open(file, "r") as f:
        data = json.load(f)
    if dtype== "int":
        data[key] = int(value)
    elif dtype=="float":
        data[key] = float(value)
    else:
        data[key] = value
    with open(file, "w") as f:
        json.dump(data, f, indent=2)


def read_json_value(file, key):
    with open(file, "r") as f:
        data = json.load(f)
    return data.get(key, None)


def read_all_json_values(file, key):
    with open(file, "r") as f:
        data = json.load(f)
    return data.get(key, None)


def bulk_add_array_values(file, key, values):
    with open(file, "r") as f:
        data = json.load(f)
    if key in data and isinstance(data[key], list):
        data[key].extend(values)
    with open(file, "w") as f:
        json.dump(data, f, indent=2)


def clear_action_space(file):
    with open(file, "r") as f:
        data = json.load(f)
    if "action_space" in data:
        data["action_space"] = []
    with open(file, "w") as f:
        json.dump(data, f, indent=2)


def clear_array(file, key):
    with open(file, "r") as f:
        data = json.load(f)
    if key in data:
        data[key] = []
    with open(file, "w") as f:
        json.dump(data, f, indent=2)


# Función para seleccionar una opción del menú

def select_option(option):
    if '.env' in option['file']:
        process_env(option['file'],option['key'])
    elif '.json' in option['file']:
        if 'action_space' in option['key']:
            process_action_space(option['file'])
        else:
            process_json(option['file'],option['key'],option['dtype'])
        
 

def process_env(file, variable):
    current_value = read_env_variable(file, variable)
    print(f"Curent value of {variable} is: {current_value}")
    new_value = input(f"Input new value for {variable} (keep blank for current): ")
    if new_value.strip() != "":
        write_env_variable(file, variable, new_value)
        print(f"Value of {variable} has been updated.")


def process_json(file, key, dtype):
    current_value = read_json_value(file, key)
    print(f"Curent value of {key} is: {current_value}")
    new_value = input(f"Input new value for  {key} (keep blank for current): ")
    if new_value.strip() != "":
        write_json_value(file, key, new_value, dtype)
        print(f"Value of {key} has been updated.")


def process_action_space(file):
    key = "action_space"
    current_values = read_all_json_values(file, key)
    print(f"Current values of {key} are: {current_values}")
    num_values = int(input("Input the number of new values you want to add: "))
    new_values = []
    clear_action_space(file)
    for i in range(num_values):
        steering_angle = float(input(f"Insert the steering angle for the value {i + 1}: "))
        speed = float(input(f"Insert the speed for the value {i + 1}: "))
        new_values.append({"steering_angle": steering_angle, "speed": speed})
    bulk_add_array_values(file, key, new_values)
    print(f"{num_values} have been added to {key}.")

def menu_picker(label,options,custom):
    while True:
        print(label)
        for i, option in enumerate(options, start=1):
            print(f"{i}. {option}")
        if custom==True:
            print(f"{len(options)+1}. Custom")

        choice = input("Enter your choice (1-{}): ".format(len(options)+1))
        if choice.isdigit() and 1 <= int(choice) <= len(options)+1:
            option = int(choice)
            if option == len(options)+1:
                value=input("Enter custom value:")
                return value
            else:
                value=options[option - 1]
                return value
        else:
            print("Invalid input. Please enter a valid number.")

def add_ip():
    stack=read_env_variable(OPTIONS['13']['file'], OPTIONS['13']['key'])
    if stack is None:
        select_option(OPTIONS['13'])
    ipname=input("Enter a name for the request: ")
    ip=input("Enter your IP: ")
    os.chdir('scripts')
    os.system("./add-access.sh {} {} {}".format(stack,ipname,ip))
    os.chdir('..')

def run_training(pretrained):
    envfile="custom-files/run.env"
    stack=read_env_variable(OPTIONS['13']['file'], OPTIONS['13']['key'])
    if stack is None:
        select_option(OPTIONS['13'])
    modelname=read_env_variable(envfile, "DR_LOCAL_S3_MODEL_PREFIX")
    pre_modelname=read_env_variable(envfile, "DR_LOCAL_S3_PRETRAINED_PREFIX") 
    if pretrained==False:
      i_modelname=input("Pick a name for your model (leave blank to keep current: {}): ".format(modelname))
      if i_modelname!="":
        modelname=i_modelname
      write_env_variable(envfile, "DR_LOCAL_S3_PRETRAINED","False")
      write_env_variable(envfile, "DR_LOCAL_S3_MODEL_PREFIX",modelname) 
    else:
      i_pre_modelname=input("Insert your pretrained model name (leave blank to select: {}): ".format(modelname))
      if i_pre_modelname=="":
        pre_modelname=modelname
      else:
        pre_modelname=i_pre_modelname
      modelname=input("Pick a new name for your model: ")
      write_env_variable(envfile, "DR_LOCAL_S3_PRETRAINED","True")
      write_env_variable(envfile, "DR_LOCAL_S3_MODEL_PREFIX",modelname)
      write_env_variable(envfile, "DR_LOCAL_S3_PRETRAINED_PREFIX",pre_modelname)

    print()
    standarspot=menu_picker("Select EC2 type: ",[  "spot", "standard" ],False)
    print()
    machinetype=menu_picker("Pick HW configuration (Recommended is g4dn.2xlarge, any larger will be more expensive): ",[  "g4dn.2xlarge", "g4dn.4xlarge", "g4dn.8xlarge", "g4dn.12xlarge", "g5.2xlarge", "g5.4xlarge", "g5.8xlarge", "g5.12xlarge" ],True)
    print()
    stack=read_env_variable(OPTIONS['13']['file'], OPTIONS['13']['key'])
    print()
    wait=input("Insert Time to live (Minutes):")
    print("./create-{}-instance.sh {} {} {}".format(standarspot,stack,modelname,wait))
    os.environ["DEEPRACER_INSTANCE_TYPE"] = machinetype
    os.system("./create-{}-instance.sh {} {} {}".format(standarspot,stack,modelname,wait))


def set_new_reward():
    print("Enter/Paste your reward function code (Press Enter then Control + D when done)")
    contents = []
    while True:
        try:
            line = input()
        except EOFError:
            break
        contents.append(line + '\n')
    with open('custom-files/reward_function.py', 'w') as the_file:
        the_file.write(''.join(contents))
    print("Reward Function updated")

# Function to show menu
def show_menu():
    while True:
        print(" ")
        print("\n--- AWS Console (CLI Version) ---")
        print(" ")
        print("---Configuration---")

        for option_num, option in OPTIONS.items():
            file, key, label = option.get('file',''), option.get('key',''), option.get('label','')
            if '.env' in file:
                current_value = read_env_variable(file, key)
            elif '.json' in file:
                current_value = read_json_value(file, key)
            else:
                current_value = ""
            comparison = "("+str(key)+'=\033[93m'+ str(current_value)+"\033[0m)" if key or current_value else ""
            print("{} {} {}".format(str(option_num).ljust(2), str(label).ljust(40), comparison))

        try:
            choice = str(input("Pick a menu item (0-{}): ".format(len(OPTIONS)-1)))
        except KeyboardInterrupt:
            print("\n")
            break
        if not isinstance(choice, str) or choice not in list(OPTIONS.keys()):
            print("invalid input:", choice)
     
        if choice == "0":
            break

        if choice:
            selection = OPTIONS.get(choice)
            if selection.get('func'):
                func = selection.get('func')
                args = selection.get('args','')
                func(*args)
                break
            else:
                select_option(selection) # LEFT OFF HERE. need to follow down select_option and update to use OPTIONS. also func() should not need options passed in as an arg

OPTIONS = {
          "1":{ "label": "Modify Model Name","file": "custom-files/run.env", "key": "DR_LOCAL_S3_MODEL_PREFIX", "dtype" : "string"},
          "2":{ "label": "Modify Car Name","file": "custom-files/run.env", "key": "DR_CAR_NAME", "dtype" : "string"},
          "3":{ "label": "Modify Circuit","file": "custom-files/run.env", "key": "DR_WORLD_NAME", "dtype" : "string"},
          "4":{ "label": "Modify Race Type (TT,OA,H2H)","file": "custom-files/run.env", "key": "DR_RACE_TYPE", "dtype" : "string"},
          "5":{ "label": "Modify Batch Size", "file": "custom-files/hyperparameters.json", "key": "batch_size", "dtype" : "int"},
          "6":{ "label": "Modify Beta_entropy", "file": "custom-files/hyperparameters.json", "key": "beta_entropy", "dtype" : "float"},
          "7":{ "label": "Modify Discount Factor", "file": "custom-files/hyperparameters.json", "key": "discount_factor", "dtype" : "float"},
          "8":{ "label": "Modify Loss Type", "file": "custom-files/hyperparameters.json", "key": "loss_type", "dtype" : "string"},
          "9":{ "label": "Modify Learning Rate", "file": "custom-files/hyperparameters.json", "key": "lr", "dtype" : "float"},
          "10":{ "label": "Modify Num of episodes between training", "file": "custom-files/hyperparameters.json", "key": "num_episodes_between_training", "dtype" : "int"},
          "11":{ "label": "Modify Num Epochs", "file": "custom-files/hyperparameters.json", "key": "num_epochs", "dtype" : "int"},
          "12":{ "label": "Modify Action Space", "file": "custom-files/model_metadata.json", "key": "action_space", "dtype" : "array"},
          "13":{ "label": "Modify Base Stack Name", "file": "custom-files/run.env", "key": "BASE_STACK_NAME", "dtype" : "string"},
          "14":{ "label": "Set New Reward Function", "func": set_new_reward},
          "15":{ "label": "Add IP Access", "func": add_ip},
          "16":{ "label": "Run New Training", "func": run_training, "args": (False,)},
          "17":{ "label": "Continue A Training", "func": run_training, "args": (True,)},
          "0" :{ "label": "Quit"}
        }

# Execute Menu
if __name__=='__main__':
    show_menu()


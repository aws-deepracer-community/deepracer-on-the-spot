import json, os


# Funciones para archivos de configuración tipo env

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
        json.dump(data, f, indent=4)


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
        json.dump(data, f, indent=4)


def clear_action_space(file):
    with open(file, "r") as f:
        data = json.load(f)
    if "action_space" in data:
        data["action_space"] = []
    with open(file, "w") as f:
        json.dump(data, f, indent=4)


def clear_array(file, key):
    with open(file, "r") as f:
        data = json.load(f)
    if key in data:
        data[key] = []
    with open(file, "w") as f:
        json.dump(data, f, indent=4)


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


def add_ip(options):
    stack=read_env_variable(options[12]['file'], options[12]['key'])
    ipname=input("Enter a name for the request: ")
    ip=input("Enter your IP: ")
    os.chdir('scripts')
    os.system("./add-access.sh {} {} {}".format(stack,ipname,ip))
    os.chdir('..')

def run_training(options,pretrained):
    envfile="custom-files/run.env"
    stack=read_env_variable(options[12]['file'], options[12]['key'])
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



    if stack is None:
      select_option(options[int(13)-1])
    print()
    standarspot=menu_picker("Select EC2 type: ",[  "spot", "standard" ],False)
    print()
    machinetype=menu_picker("Pick HW configuration: ",[  "g4dn.2xlarge", "g4dn.4xlarge", "g4dn.8xlarge", "g4dn.12xlarge", "g5.2xlarge", "g5.4xlarge", "g5.8xlarge", "g5.12xlarge" ],True)
    print()
    stack=read_env_variable(options[12]['file'], options[12]['key'])
    print()
    wait=input("Insert Time to live (Minutes):")
    print("./create-{}-instance.sh {} {} {}".format(standarspot,stack,modelname,wait))
    os.environ["DEEPRACER_INSTANCE_TYPE"] = machinetype
    os.system("./create-{}-instance.sh {} {} {}".format(standarspot,stack,modelname,wait))


# Función para mostrar el menú
def show_menu():
    while True:
      print(" ")
      print("\n--- AWS Console (CLI Version) ---")
      print(" ")
      print("---Configuration---")
      options = [
          {"option": "1", "label": "Modify Model Name","file": "custom-files/run.env", "key": "DR_LOCAL_S3_MODEL_PREFIX", "dtype" : "string"},
          {"option": "2", "label": "Modify Car Name","file": "custom-files/run.env", "key": "DR_CAR_NAME", "dtype" : "string"},
          {"option": "3", "label": "Modify Circuit","file": "custom-files/run.env", "key": "DR_WORLD_NAME", "dtype" : "string"},
          {"option": "4", "label": "Modify Race Type (TT,OA,H2H)","file": "custom-files/run.env", "key": "DR_RACE_TYPE", "dtype" : "string"},
          {"option": "5", "label": "Modify Batch Size", "file": "custom-files/hyperparameters.json", "key": "batch_size", "dtype" : "int"},
          {"option": "6", "label": "Modify Beta_entropy", "file": "custom-files/hyperparameters.json", "key": "beta_entropy", "dtype" : "float"},
          {"option": "7", "label": "Modify Discount Factor", "file": "custom-files/hyperparameters.json", "key": "discount_factor", "dtype" : "float"},
          {"option": "8", "label": "Modify Loss Type", "file": "custom-files/hyperparameters.json", "key": "loss_type", "dtype" : "string"},
          {"option": "9", "label": "Modify Learning Rate", "file": "custom-files/hyperparameters.json", "key": "lr", "dtype" : "float"},
          {"option": "10", "label": "Modify Num of episodes between training", "file": "custom-files/hyperparameters.json", "key": "num_episodes_between_training", "dtype" : "int"},
          {"option": "11", "label": "Modify Num Epochs", "file": "custom-files/hyperparameters.json", "key": "num_epochs", "dtype" : "int"},
          {"option": "12", "label": "Modify Action Space", "file": "custom-files/model_metadata.json", "key": "action_space", "dtype" : "array"},
          {"option": "13", "label": "Modify Stack", "file": "custom-files/run.env", "key": "STACK", "dtype" : "string"}
      ]


      for option in options:
          if '.env' in option['file']:
              current_value = read_env_variable(option['file'], option['key'])
          elif '.json' in option['file']:
              current_value = read_json_value(option['file'], option['key'])
          else:
              current_value = ""
          print("{} {} {}".format(str(option['option']).ljust(2), str(option['label']).ljust(40), "("+str(option['key'])+'=\033[93m'+ str(current_value))+"\033[0m)")

      print("14. Add IP Access")
      print(" ")
      print("---Train---")
      print("15. Run New Training")
      print("16. Continue a Training")
      print("0. Salir")
      print(" ")
      choice = input("Pick a menu item: ")

      if choice == "0":
        break
      elif choice == "14":
        add_ip(options)
        break
      elif choice == "15":
        run_training(options,False)
        break
      elif choice == "16":
        run_training(options,True)
        break

      else:
        select_option(options[int(choice)-1])


# Ejecutar el menú
def menu():

        show_menu()



# Ejecutar el menú
menu()
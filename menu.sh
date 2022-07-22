#!/bin/bash

MY_BASE_RESOURCES_STACK=myteam-base-resources
MY_BASE_RESOURCES_BUCKET=myteam-base-resources-bucket-1nj5uz43l2prj

submit_model_to_train()
{
    clear
    echo
    echo
    echo "**** DEEPRACER EC2 INSTANCE LAUNCHER MENU ****"
    
    
    PS3='Choose EC2 instance type to use: '
    EC2Types=("g4dn.2xlarge" "g4dn.4xlarge" "g4dn.8xlarge" "g4dn.12xlarge" "g5.2xlarge" "g5.4xlarge" "g5.8xlarge" "g5.12xlarge" "Custom value for EC2 type" "Exit")
    COLUMNS=0
    select ec2type in "${EC2Types[@]}"; do
        case $ec2type in
            "g4dn.2xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g4dn.4xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g4dn.8xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g4dn.12xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g5.2xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g5.4xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g5.8xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "g5.12xlarge")
                export DEEPRACER_INSTANCE_TYPE=$ec2type
                echo -e "\tInstance Type selected = \e[1;32m $ec2type \e[0m"
                break
                ;;
            "Custom value for EC2 type")
                customec2entry=
                while [ "$customec2entry" == "" ]
                do
                    read -p "Enter EC2 Instance type:" customec2entry
                done
                export DEEPRACER_INSTANCE_TYPE=$customec2entry
                echo -e "\tInstance Type selected = \e[1;32m $customec2entry \e[0m"
                break
                ;;
            "Exit")
                echo -e "\tUser requested \e[1;31m exit \e[0m"
                exit
                ;;
            *) echo -e "\t\e[1;33;1;41m invalid option $REPLY \e[0m";;
        esac
    done
    
    clear
    echo
    echo
    echo "**** DEEPRACER EC2 INSTANCE LAUNCHER MENU ****"
    
    PS3='Choose Spot or Standard instance lifecycle: '
    EC2lifecycle=("Spot" "Standard" "Exit")
    select lifecycle in "${EC2lifecycle[@]}"; do
        case $lifecycle in
            "Spot")
                export lifecycle=$(echo $lifecycle | tr '[:upper:]' '[:lower:]')
                echo -e "\tInstance lifecycle selected = \e[1;32m $lifecycle \e[0m"
                break
                ;;
            "Standard")
                export lifecycle=$(echo $lifecycle | tr '[:upper:]' '[:lower:]')
                echo -e "\tInstance lifecycle selected = \e[1;32m $lifecycle \e[0m"
                break
                ;;
            "Exit")
                echo -e "\tUser requested \e[1;31m exit \e[0m"
                exit
                ;;
            *) echo -e "\t\e[1;33;1;41m invalid option $REPLY \e[0m";;
        esac
    done
    
    if [ $lifecycle = "standard" ]
    then
    
      clear
      echo "**** DEEPRACER EC2 INSTANCE LAUNCHER MENU ****"
      echo
      echo
    
      PS3='Choose Maximum Uptime for the Standard Instance (in minutes): '
      maxTimeToLiveInMinutes=("15" "30" "60" "90" "120" "180" "360" "480" "720" "1440" "Exit")
      select TimeToLiveInMinutes in "${maxTimeToLiveInMinutes[@]}"; do
          case $TimeToLiveInMinutes in
              "15")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "30")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "60")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "90")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "120")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "180")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "360")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "480")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "720")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "1440")
                  export TimeToLiveInMinutes=$TimeToLiveInMinutes
                  echo -e "\tMaximum Uptime selected = \e[1;32m $TimeToLiveInMinutes \e[0m"
                  break
                  ;;
              "Exit")
                  echo -e "\tUser requested \e[1;31m exit \e[0m"
                  exit
                  ;;
              *) echo -e "\t\e[1;33;1;41m invalid option $REPLY \e[0m";;
          esac
      done
    fi
    
    export modelname=$(cat ~/deepracer-templates/custom-files/run.env | grep DR_LOCAL_S3_MODEL_PREFIX= | sed 's/^DR_LOCAL_S3_MODEL_PREFIX=\([^ ]*\).*$/\1/')
    export numberofworkers=$(cat ~/deepracer-templates/custom-files/system.env | grep DR_WORKERS= | sed 's/^DR_WORKERS=\([^ ]*\).*$/\1/')
    
    clear
    echo
    echo
    echo "**** DEEPRACER EC2 INSTANCE LAUNCHER MENU ****"
    
    echo "##### SUMMARY REPORT ####################################"
                echo -e "\tInstance Type selected = \e[1;32m $DEEPRACER_INSTANCE_TYPE \e[0m"
                echo -e "\tInstance lifecycle selected = \e[1;32m $lifecycle \e[0m"
                if [ $lifecycle = "standard" ]
                then
                  echo -e "\tMaximum Uptime selected (in minutes) = \e[1;32m $TimeToLiveInMinutes \e[0m"
                fi
    echo "##### ADDITIONALLY FOUND ################################"
                echo -e "\tModel name to be trained = \e[1;32m $modelname \e[0m"
                echo -e "\tNumber of workers = \e[1;32m $numberofworkers \e[0m"
    echo "#########################################################"
    echo
    echo        
    read -p "Do you want to continue with the EC2 launch request [Y/N]? " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
      if [ $lifecycle = "standard" ]
      then
        echo ./create-$lifecycle-instance.sh $MY_BASE_RESOURCES_STACK $modelname-$RANDOM $TimeToLiveInMinutes
        ./create-$lifecycle-instance.sh $MY_BASE_RESOURCES_STACK $modelname-$RANDOM $TimeToLiveInMinutes
      else
        echo ./create-$lifecycle-instance.sh $MY_BASE_RESOURCES_STACK $modelname-$RANDOM
        ./create-$lifecycle-instance.sh $MY_BASE_RESOURCES_STACK $modelname-$RANDOM
      fi
    fi
}


download_custom_files_from_s3()
{
    echo -e "\e[1;32m **************LOCAL CURRENT FILES under ./custom-files/  ************************************************* \e[0m"
    echo
    find  ./custom-files/ -printf '%CY-%Cm-%Cd %CH:%CM:%.2CS \t%s\t%p\n' | sed -s 's/.\/custom-files\///g' | sort
    echo -e "\e[1;32m **************S3 CURRENT FILES under s3://$MY_BASE_RESOURCES_BUCKET/custom_files/  ************************** \e[0m"
    echo
    aws s3 ls s3://$MY_BASE_RESOURCES_BUCKET/custom_files/ --recursive | sort
    echo -e "\e[1;32m ****************************************************************************************************************************** \e[0m"
    echo
    echo
    read -p "Do you want to DELETE "$PWD/custom-files/" and download current content from "s3://$MY_BASE_RESOURCES_BUCKET/custom_files/" [Y/N]? " -n 1 -r
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
      rm  ./custom-files/*.*
      aws s3 cp s3://$MY_BASE_RESOURCES_BUCKET/custom_files/ ./custom-files/ --recursive
      echo
      echo -e "\e[1;32m ******** UPDATE COMPLETED *************** \e[0m"
    fi
}



clear
echo
echo
echo "**** DEEPRACER EC2 INSTANCE LAUNCHER MENU ****"

PS3='Choose your option: '
MainOptions=("Create Base resources stack (only once)" "Create Image builder (only once)" "Submit model to train on EC2" "Add Access to EC2 from IP Address (limited number of entries)" "Download custom_files from S3 (overwrites CloudShell files with S3 files)" "Display configuration files" "Increment training at system.env (dr-increment-training)" "Exit")
COLUMNS=0
select main in "${MainOptions[@]}"; do
    case $main in
        "Create Base resources stack (only once)")
            echo -e "\tMain option selected = \e[1;32m $main \e[0m"
            echo "Pending development"
            break
            ;;
        "Create Image builder (only once)")
            echo -e "\tMain option selected = \e[1;32m $main \e[0m"
            echo "Pending development"
            break
            ;;
        "Submit model to train on EC2")
            echo -e "\tMain option selected = \e[1;32m $main \e[0m"
            sleep 1 > /dev/null
            submit_model_to_train
            break
            ;;
        "Add Access to EC2 from IP Address (limited number of entries)")
            echo "\tMain option selected = \e[1;32m $main \e[0m"
            echo "Pending development"
            break
            ;;
        "Download custom_files from S3 (overwrites CloudShell files with S3 files)")
            echo -e "\tMain option selected = \e[1;32m $main \e[0m"
            sleed 1 > /dev/null
            download_custom_files_from_s3
            break
            ;;
        "Display configuration files")
            echo -e "\tMain option selected = \e[1;32m $main \e[0m"
            echo "Pending development"
            break
            ;;
        "Increment training at system.env (dr-increment-training)")
            echo -e "\tMain option selected = \e[1;32m $main \e[0m"
            echo "Pending development"
            break
            ;;
        "Exit")
            echo -e "\tUser requested \e[1;31m exit \e[0m"
            exit
            ;;
        *) echo -e "\t\e[1;33;1;41m invalid option $REPLY \e[0m";;
    esac
done

sleep 2 > /dev/null

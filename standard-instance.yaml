AWSTemplateFormatVersion: "2010-09-09"
Description: Setup a standard EC2 instance for deep racer

Parameters:
  InstanceType:
    Type: String
    Default: g4dn.2xlarge
  ResourcesStackName:
    Type: String
  DeepRacerImportName:
    Type: String
  TimeToLiveInMinutes:
    Type: Number
    Description: timeout in minutes after which training is stopped and this stack is deleted
    Default: 60
    MinValue: 0
    MaxValue: 1440 # 24 hours
  AmiId:
    Type: String
    Description: the AMI we want to launch an ec2 instance against. By default this is the image created by central account 747447086422 owned by Tyler Wooten
  BUCKET:
    Type: String
  CUSTOMFILELOCATION:
    Type: String
Outputs:

  DNS:
    Value: !GetAtt Instance.PublicDnsName

  Instance:
    Value: !Ref Instance

  InstanceIP:
    Description: The IP of the instance created
    Value: !GetAtt Instance.PublicIp
    Export:
      Name: !Sub "${AWS::StackName}-PublicIp"

Resources:

  LaunchTemplate:
    Type: AWS::EC2::LaunchTemplate
    Properties:
      LaunchTemplateName: !Sub ${AWS::StackName}-launch-template
      LaunchTemplateData:
        IamInstanceProfile:
          Name:
            !ImportValue
            'Fn::Sub': '${ResourcesStackName}-InstanceProfile'
        ImageId: !Ref AmiId
        InstanceType: !Ref InstanceType
        BlockDeviceMappings:
          - DeviceName: /dev/sda1
            Ebs:
              VolumeType: gp3
              VolumeSize: 60
              DeleteOnTermination: 'true'

  Instance:
    Type: AWS::EC2::Instance
    CreationPolicy:
      ResourceSignal:
        Count: '1'
        Timeout: PT30M
    Metadata:
      AWS::CloudFormation::Init:
        config:
          commands:
            1-signal-cfn:
              command:
                      !Sub "bash -c '/usr/local/bin/cfn-signal -s true -e 0 --stack ${AWS::StackName} --resource Instance --region ${AWS::Region}'"
            2-start-train:
              command: "su -l ubuntu bash -c '/home/ubuntu/bin/start_training.sh'"
          files:
            /etc/profile.d/dots_vars.sh:
              content:
                Fn::Sub:
                - |
                  export MY_SNS_TOPIC=${SNS}
                  export PUBLIC_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
                  export MY_BUCKET=${BUCKET};export DR_S3_URI=${BUCKET};export DEEPRACER_S3_URI=${BUCKET}
                  export CUSTOM_FILE_LOCATION=${CUSTOMFILELOCATION}
                  export DEEPRACER_REGION=${AWS::Region}
                  export STACK_NAME=${AWS::StackName}
                  export AWS_DEFAULT_REGION=${AWS::Region}
                - SNS:
                    Fn::ImportValue:
                        !Sub "${ResourcesStackName}-InterruptionNotification"
                  BUCKET:
                    Fn::ImportValue:
                        !Sub "${ResourcesStackName}-Bucket"
              mode : "000755"
              owner: root
              group: root
            /home/ubuntu/deepracer-for-cloud/import_model.sh: 
              content:
                Fn::Sub:
                - sudo aws deepracer import-model --name '${DeepRacerImportName}' --description "$DR_WORLD_NAME imported from s3://$DR_UPLOAD_S3_BUCKET/$DR_UPLOAD_S3_PREFIX by DeepRacer on the Spot" --model-artifacts-s3-path s3://$DR_UPLOAD_S3_BUCKET/$DR_UPLOAD_S3_PREFIX  --role-arn ${DR_IMPORT_ROLENAME} --type REINFORCEMENT_LEARNING --region us-east-1
                - DR_IMPORT_ROLENAME:
                       Fn::ImportValue:
                           !Sub "${ResourcesStackName}-DeepRacerServiceRole"
              mode : "000755"
              owner: root
              group: root 
            /home/ubuntu/deepracer-for-cloud/regular_upload.sh: 
              content: |
                sudo su ubuntu
                cd ~/deepracer-for-cloud
                source bin/activate.sh
                source /etc/profile.d/dots_vars.sh
                dr-reload
                UPLOAD_INTERVAL=$((60*$DR_REGULAR_UPLOAD))
                while [ true ]
                do
                  sleep $UPLOAD_INTERVAL
                  dr-upload-model -f
                done
              mode : "000755"
              owner: root
              group: root
            /home/ubuntu/deepracer-for-cloud/error_monitoring.sh: 
              content: |
                sudo su ubuntu
                cd ~/deepracer-for-cloud
                source bin/activate.sh
                source /etc/profile.d/dots_vars.sh
                dr-reload
                LAST_CHECKPOINT="training_just_started"
                while [ true ]
                do
                  if docker ps -a | grep -q Exited; then
                    aws sns publish --topic-arn $MY_SNS_TOPIC --message "One or more containers have exited and training is no longer running but you are still incurring cost for $STACK_NAME in region $DEEPRACER_REGION.  It is recommended you search the docker logs using docker logs <container-id> --tail 1000 to find the root cause." --region $DEEPRACER_REGION
                  fi
                  CURRENT_CHECKPOINT=$(jq -r '.last_checkpoint | [.name][]' deepracer_checkpoints.json)
                  if [[ $LAST_CHECKPOINT == $CURRENT_CHECKPOINT ]]; then
                    aws sns publish --topic-arn $MY_SNS_TOPIC --message "Your training hasn't progressed to the next iteration for around one hour for $STACK_NAME in region $DEEPRACER_REGION.  It is recommended you check your training for errors, for example endless evaluations." --region $DEEPRACER_REGION
                  else
                    LAST_CHECKPOINT=$(jq -r '.last_checkpoint | [.name][]' deepracer_checkpoints.json)
                  fi
                  sleep 3600
                done  
              mode : "000755"
              owner: root
              group: root 
            /home/ubuntu/bin/menu.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>

                <h2>Video Feeds</h2>
                <p><a href="/?robo=all&camera=kvs_stream&quality=75&width=480">Live KVS Stream</a></p>
                <p><a href="/?robo=all&camera=camera&quality=75&width=480">Live Camera</a></p>
                <p><a href="/?robo=all&camera=main_camera&quality=75&width=480">Live Main Camera</a></p>
                <p><a href="/?robo=all&camera=sub_camera&quality=75&width=480">Live Sub Camera</a></p>
                                
                <h2>All logs summary in one view</h2>
                <p><a href="output.txt">Output</a></p>
                
                <h2>Docker logs (last 1000 lines)</h2>
                <p><a href="sagemaker.txt">Sagemaker</a></p>
                <p><a href="robomaker.txt">Robomaker (Main worker)</a></p>
                <p><a href="dockerstatus.txt">docker ps -a (command output)</a></p>
                
                <h2>Nvidia GPU status</h2>
                <p><a href="nvidia-smi.txt">nvidia-smi (command output)</a></p>

                <h2>Storage Capacity</h2>
                <p><a href="df.txt">df output (command output)</a></p>
                
                <h2>Custom logs (last 1000 lines)</h2>
                <p><a href="OutputLog.txt">OutputLog</a></p>
                <p><a href="completedlaps.txt">Completed Laps - last step from Robomaker output (all Workers)</a></p>
                
                <h2>Configuration files</h2>
                <p><a href="run.env.txt">run.env</a></p>
                <p><a href="system.env.txt">system.env</a></p>
                <p><a href="hyperparameters.json">hyperparameters.json</a></p>
                <p><a href="model_metadata.json">model_metadata.json</a></p>
                <p><a href="reward_function.py.txt">reward_function.py</a></p>
                
                <h2>Training metrics</h2>
                <p><a href="TrainingMetrics.json">TrainingMetrics.json</a></p>
                <p><a href="deepracer_checkpoints.json">deepracer_checkpoints.json</a></p>
                <p><a download href="robomaker1.log">robomaker1.log</a></p>

                <h2>Training/Evaluation monitoring graphs</h2>
                <p><a href="update_to_grafana_url">Live Grafana Dashboard</a></p>
                <p><a href="Training_and_Evaluation_Overview.html">Training_and_Evaluation_Overview</a></p>
                <p><a href="Training_progress.html">Training_progress</a></p>
                <p><a href="Quintiles.html">Quintiles</a></p>
                <p><a href="Heatmap.html">Reward Heatmap</a></p>
                <p><a href="Data_tables.html">Data in tables</a></p>
                <p><a href="Path_for_complete_laps.html">Path_for_complete_laps</a></p>
                <p><a href="update_to_jupyter_url">Access Jupyter Notebook</a></p>

                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Training_and_Evaluation_Overview.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>       
                <h2>Training analysis is typically available 20-30 minutes into training.  Please refresh in a few minutes. </h2>
                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Training_progress.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>    
                <h2>Training analysis is typically available 20-30 minutes into training.  Please refresh in a few minutes. </h2>
                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Quintiles.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>        
                <h2>Training analysis is typically available 20-30 minutes into training.  Please refresh in a few minutes. </h2>
                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Heatmap.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>        
                <h2>Training analysis is typically available 20-30 minutes into training.  Please refresh in a few minutes. </h2>
                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Data_tables.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>        
                <h2>Training analysis is typically available 20-30 minutes into training.  Please refresh in a few minutes. </h2>
                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Path_for_complete_laps.html:
              content: |
                <!DOCTYPE html>
                <html>
                <body>         
                <h2>Training analysis is typically available 20-30 minutes into training.  Please refresh in a few minutes. </h2>
                </body>
                </html>
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/bin/web_monitoring.sh:
              content: |
                #!/bin/bash
                /home/ubuntu/bin/start_analysis.sh
                USAGE_OUTPUT=output.txt
                cd ~/deepracer-for-cloud
                while [ true ]
                do
                  # This loop collects training data available and publishes it on the nginx docker. accessible through Public_IP:8100/menu.html                   
                  
                  # Update variable references before every iteration in case of any change on the config files, this is similar to dr-reload
                  source ~/deepracer-for-cloud/bin/activate.sh > /dev/null 2>&1
                  echo "-----------------------------------" > $USAGE_OUTPUT
                  
                  # Get model name being trained
                  cat ~/deepracer-for-cloud/run.env | egrep "^DR_LOCAL_S3_MODEL_PREFIX" >> $USAGE_OUTPUT
                  
                  # get timestamp to know if the data published is current
                  date --utc +%F_%T_UTC >> $USAGE_OUTPUT
                  
                  # known training issues # 1 - GPU ran out of memory
                  outofmemoryerrors=$(docker logs $(dr-find-sagemaker) 2>&1 | grep "ran out of memory"|wc -l)
                  if [[ $outofmemoryerrors -ge 1 ]];then
                    echo "  ########### ERROR ------> GPU RAN OUT OF MEMORY !!!!!!  ###########" >> $USAGE_OUTPUT
                  fi
                  
                  # get Checkpoint status (best checkpoint, last checkpoint, current checkpoint)
                  docker logs $(dr-find-sagemaker) 2>&1 | grep "Best checkpoint" | tail -n 1 >> $USAGE_OUTPUT
                  docker logs $(dr-find-sagemaker) 2>&1 | grep Checkpoint | tail -n 1  >> $USAGE_OUTPUT
                  
                  echo "=====Robomaker (main Worker)=====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-robomaker) 2>&1 | egrep '^(SIM_TRACE_LOG.*(omplete|off_)|^reward_output)' | tail -n 10 | grep "omplete\|off_\|reward_output\|checkpoint"  >> $USAGE_OUTPUT
                  
                  echo "=====Sagemaker policy training=====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-sagemaker) 2>&1 | egrep '^Policy training' | tail -n 1 >> $USAGE_OUTPUT
                  
                  echo "=====GPU performance=====" >> $USAGE_OUTPUT
                  nvidia-smi > nvidia-smi.txt 2>&1
                  grep Default nvidia-smi.txt >> $USAGE_OUTPUT  2>&1

                  echo "=====Storage Availability=====" >> $USAGE_OUTPUT
                  df > df.txt 2>&1
                  cat df.txt >> $USAGE_OUTPUT  2>&1
                  
                  echo "=====Docker containers status=====" >> $USAGE_OUTPUT
                  docker ps -a > dockerstatus.txt  2>&1
                  cat dockerstatus.txt >> $USAGE_OUTPUT  2>&1
                  
                  # known training issues # 2 - At least one required DOCKER CONTAINER EXITED
                  dockererrors=$(grep "exited" dockerstatus.txt | egrep 'deepracer-(sagemaker|rlcoach|robomaker)' | wc -l)
                  if [[ $dockererrors -ge 1 ]];then
                    echo "  ########### ERROR ------> At least one required DOCKER CONTAINER EXITED !!!!!!  ###########" >> $USAGE_OUTPUT
                  fi
                  
                  echo "=====CPU average load (1min / 5min / 15min avg)=====" >> $USAGE_OUTPUT
                  cat /proc/loadavg >> $USAGE_OUTPUT 2>&1
                  
                  echo "=====Memory usage=====" >> $USAGE_OUTPUT
                  cat /proc/meminfo | egrep '(^MemTotal|^MemFree|^SwapTotal|^SwapFree)' >> $USAGE_OUTPUT 2>&1
                  
                  echo "=====Robomaker Testing result logs (all Workers)=====" >> $USAGE_OUTPUT
                  for name in `docker ps --format "{{.Names}}" | grep obomaker`
                  do
                    docker logs ${name} 2>&1 | egrep '^Testing>' | tail -n 10  >> $USAGE_OUTPUT
                    docker logs ${name} >& ${name}.log
                  done

                  mv deepracer-0_robomaker.1.*.log robomaker1.log
                  mv deepracer-0-robomaker-1.log robomaker1.log

                  echo "=====Sagemaker training logs=====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-sagemaker) 2>&1 | egrep '^Training>' | tail -n 10 >> $USAGE_OUTPUT
                  
                  echo "=====Robomaker Top 10 completed laps (all Workers)=====" >> $USAGE_OUTPUT
                  if [ -f $USAGE_OUTPUT.tmp ] ;then
                    rm "$USAGE_OUTPUT.tmp" > /dev/null 2>&1
                  fi
                  for name in `docker ps --format "{{.Names}}"`
                  do
                    docker logs ${name} 2>&1 | egrep '^SIM_TRACE_LOG.*(omplete)' | sort --field-separator=',' --key=2 | head -n 10000 >> $USAGE_OUTPUT.tmp
                  done
                  echo "Number of completed laps: $(cat $USAGE_OUTPUT.tmp | wc -l)" >> $USAGE_OUTPUT 2>&1  
                  cat $USAGE_OUTPUT.tmp | sort --field-separator=',' --key=2 | head -n 1000 > completedlaps.txt 2>&1
                  head completedlaps.txt -n 10 >> $USAGE_OUTPUT 2>&1
                  
                  echo "=====Robomaker (main Worker) - OutputLog: =====" >> $USAGE_OUTPUT
                  docker logs $(dr-find-robomaker) 2>&1 | tail -n 1000 > OutputLog.txt
                  tail OutputLog.txt -n 10 >> $USAGE_OUTPUT
                  rm $USAGE_OUTPUT.tmp  > /dev/null 2>&1
                  echo "###################" >> $USAGE_OUTPUT
                
                  # Collecting remaining common output files, metrics and uploading them to website
                  docker logs $(dr-find-sagemaker) 2>&1 | tail -n 1000 > sagemaker.txt
                  docker logs $(dr-find-robomaker) 2>&1 | tail -n 1000 > robomaker.txt
                  aws s3 cp s3://$DR_LOCAL_S3_BUCKET/$DR_LOCAL_S3_MODEL_PREFIX/metrics/TrainingMetrics.json . > /dev/null 2>&1
                  aws s3 cp s3://$DR_LOCAL_S3_BUCKET/$DR_LOCAL_S3_MODEL_PREFIX/model/deepracer_checkpoints.json . > /dev/null 2>&1
                  for ID  in `docker ps --filter name=viewer --format "{{.ID}}"`
                  do
                    docker cp $USAGE_OUTPUT $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp nvidia-smi.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp df.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp dockerstatus.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp completedlaps.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp OutputLog.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp sagemaker.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp robomaker.txt $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp robomaker1.log $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp TrainingMetrics.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp deepracer_checkpoints.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/run.env $ID:/usr/share/nginx/html/run.env.txt > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/system.env $ID:/usr/share/nginx/html/system.env.txt > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/custom_files/hyperparameters.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/custom_files/model_metadata.json $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker cp ~/deepracer-for-cloud/custom_files/reward_function.py $ID:/usr/share/nginx/html/reward_function.py.txt > /dev/null 2>&1
                    docker cp /home/ubuntu/bin/menu.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    #Update training analysis
                    ANALYSIS_ID=$(docker ps --filter name=deepracer-analysis --format "{{.ID}}")
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute import_from_s3.ipynb
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Training_progress.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Training_progress.html .
                    docker cp Training_progress.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Heatmap.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Heatmap.html .
                    docker cp Heatmap.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Quintiles.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Quintiles.html .
                    docker cp Quintiles.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Data_tables.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Data_tables.html .
                    docker cp Data_tables.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Path_for_complete_laps.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Path_for_complete_laps.html .
                    docker cp Path_for_complete_laps.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                    docker exec $ANALYSIS_ID jupyter nbconvert --no-input --to html --execute Training_and_Evaluation_Overview.ipynb
                    docker cp $ANALYSIS_ID:/workspace/Training_and_Evaluation_Overview.html .
                    docker cp Training_and_Evaluation_Overview.html $ID:/usr/share/nginx/html/ > /dev/null 2>&1
                  done
                  
                  # if the EC2 has started the termination process we do not want to upload $USAGE_OUTPUT to S3
                  if [[ ! -f /home/ubuntu/bin/termination.started ]];then
                    cp $USAGE_OUTPUT /tmp/logs/ > /dev/null 2>&1
                  fi
                  sleep 300
                done
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/bin/start_training.sh:
              content: |
                #!/bin/bash
                source /etc/profile.d/dots_vars.sh
                aws sns publish --topic-arn $MY_SNS_TOPIC --message "Training has initiated for on a new instance for $STACK_NAME in region $DEEPRACER_REGION.  The new url to monitor progress is http://$PUBLIC_IP:8100/menu.html" --region $DEEPRACER_REGION
                cd ~/deepracer-for-cloud
                sed -i '/DR_AWS_APP_REGION=/d' /home/ubuntu/deepracer-for-cloud/system.env
                sed -i -e '$aDR_AWS_APP_REGION=$DEEPRACER_REGION' /home/ubuntu/deepracer-for-cloud/system.env
                sed -i "s/DR_UPLOAD_S3_BUCKET=not-defined/DR_UPLOAD_S3_BUCKET=$DEEPRACER_S3_URI/" ~/deepracer-for-cloud/system.env
                sed -i "s/DR_LOCAL_S3_BUCKET=bucket/DR_LOCAL_S3_BUCKET=$DEEPRACER_S3_URI/" ~/deepracer-for-cloud/system.env
                sed -i "s/DR_UPLOAD_S3_PREFIX=upload/DR_UPLOAD_S3_PREFIX=$DR_LOCAL_S3_MODEL_PREFIX-upload/" ~/deepracer-for-cloud/run.env
                sed -i "s|DR_LOCAL_S3_CUSTOM_FILES_PREFIX=custom_files|DR_LOCAL_S3_CUSTOM_FILES_PREFIX=$CUSTOM_FILE_LOCATION|" ~/deepracer-for-cloud/run.env
                source bin/activate.sh
                dr-download-custom-files
                cp custom_files/*.env .
                dr-reload
                # Setup required config if using OpenGL training
                if [[ $DR_HOST_X == True ]];then
                  sudo apt-get update
                  ./utils/setup-xorg.sh
                  ./utils/start-xorg.sh
                  sleep 15
                fi
                # There is a bug where at some times the training fails to start, so we start, stop and start it again to reduce the occurrences of this issue. 
                nohup /bin/bash -lc 'cd ~/deepracer-for-cloud/; dr-start-training -qw; sleep 120; dr-stop-training; sleep 60; echo y | docker container prune; dr-reload; dr-start-training -qwv' &
                mkdir -p /tmp/logs/
                # We want to be able to monitor our EC2 training without needing to connect to console, so we upload all needed info to Public_IP:8100/menu.html using this script
                nohup /bin/bash -lc 'source /home/ubuntu/bin/web_monitoring.sh >/dev/null 2>&1' &
                sleep 180 > /dev/null
                if [[ $DR_REGULAR_UPLOAD -gt 0 ]];then
                  ./regular_upload.sh &
                fi
                #start hourly error monitoring to notify on container exited or last checkpoint not progressing in the last hour
                ./error_monitoring.sh &
                while [ True ]; do
                    # if the EC2 started termination process upon interruption notification, this file should exist, hence we leave termination process to manage final uploads without conflict
                    if [[ -f /home/ubuntu/bin/termination.started ]];then
                      break
                    fi
                    # Update variable references before every iteration in case of any change on the config files
                    source ~/deepracer-for-cloud/bin/activate.sh
                    
                    for name in `docker ps -a --format "{{.Names}}"`; do
                        docker logs ${name} > /tmp/logs/${name}.log 2>&1
                    done
                    # Only upload best Checkpoint if best Checkpoint has changed
                    bestcheckpoint=$(echo n | dr-upload-model -b 2>&1 | grep "checkpoint:")
                    aws s3 cp /tmp/logs/ s3://$DEEPRACER_S3_URI/$DR_LOCAL_S3_MODEL_PREFIX/logs/ --recursive
                    rm -rf /tmp/logs/*.* > /dev/null 2>&1
                    if [ [ "$bestcheckpoint" != "$lastbestcheckpoint" ] && [ "$bestcheckpoint" != "" ] ];then
                      # update file timestamp just to avoid conflict with termination process
                      touch /home/ubuntu/bin/uploading_best_model.timestamp 2>&1
                      dr-upload-model -bf > /dev/null 2>&1
                      lastbestcheckpoint=$bestcheckpoint
                    fi
                    sleep 120
                done
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/bin/start_analysis.sh:
              content: |
                #!/bin/bash

                cd ~/deepracer-for-cloud
                source bin/activate.sh
                source /etc/profile.d/dots_vars.sh
                sudo sed -i '/# Grafana options/a GF_AUTH_ANONYMOUS_ENABLED=true' docker/metrics/configuration.env
                dr-start-metrics

                docker run -d -p 8888:8888 --name deepracer-analysis awsdeepracercommunity/deepracer-analysis:cpu
                
                while [ "$TOKEN" == "" ]
                do
                  TOKEN=$(docker logs deepracer-analysis 2>&1 | grep -o -E "token=[0-9a-f]+" | head -n 1)
                done

                JUPYTER_URL=http://$PUBLIC_IP:8888/?$TOKEN
                GRAFANA_URL="http://$PUBLIC_IP:3000/d/adke0lwv5zwg0e/deepracer-training-template?orgId=1&refresh=10s"

                sudo sed -i "s|update_to_jupyter_url|${JUPYTER_URL}|" /home/ubuntu/bin/menu.html
                sudo sed -i "s|update_to_grafana_url|${GRAFANA_URL}|" /home/ubuntu/bin/menu.html

                S3_PREFIX_FOR_ANALYSIS=$(cat run.env | grep DR_LOCAL_S3_MODEL_PREFIX= | awk -F'=' '{print $2}')
                DEEPRACER_TRACK=$(cat run.env | grep DR_WORLD_NAME= | awk -F'=' '{print $2}')
                DEEPRACER_WORKERS=$(cat system.env | grep DR_WORKERS= | awk -F'=' '{print $2}')
                echo $S3_PREFIX_FOR_ANALYSIS | grep -q \$DR_WORLD_NAME
                if [[ $? -eq 0 ]];then
                  S3_PREFIX_FOR_ANALYSIS=$(echo $S3_PREFIX_FOR_ANALYSIS | sed "s|\$DR_WORLD_NAME|${DEEPRACER_TRACK}|")
                fi
                sed -i "s|DR_LOCAL_S3_MODEL_PREFIX|${S3_PREFIX_FOR_ANALYSIS}|" import_from_s3.py
                sed -i "s|DEEPRACER_S3_URI|${DEEPRACER_S3_URI}|" import_from_s3.py
                sed -i "s|DEEPRACER_TRACK|${DEEPRACER_TRACK}|" import_from_s3.py
                sed -i "s|S3_REGION|${DEEPRACER_REGION}|" import_from_s3.py
                sed -i "s|DR_LOCAL_S3_MODEL_PREFIX|${S3_PREFIX_FOR_ANALYSIS}|" Training_and_Evaluation_Overview.py
                sed -i "s|DEEPRACER_S3_URI|${DEEPRACER_S3_URI}|" Training_and_Evaluation_Overview.py
                sed -i "s|DEEPRACER_WORKERS|${DEEPRACER_WORKERS}|" Training_and_Evaluation_Overview.py

                ANALYSIS_ID=$(docker ps --filter name=deepracer-analysis --format "{{.ID}}")
                docker cp import_from_s3.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook import_from_s3.py
                docker cp Training_progress.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Training_progress.py
                docker cp Quintiles.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Quintiles.py
                docker cp Heatmap.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Heatmap.py
                docker cp Data_tables.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Data_tables.py
                docker cp Path_for_complete_laps.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Path_for_complete_laps.py
                docker cp Training_and_Evaluation_Overview.py $ANALYSIS_ID:/workspace/
                docker exec $ANALYSIS_ID jupytext --to notebook Training_and_Evaluation_Overview.py
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/import_from_s3.py:
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                import pandas as pd
                import matplotlib.pyplot as plt
                from pprint import pprint

                from deepracer.tracks import TrackIO, Track
                from deepracer.tracks.track_utils import track_breakdown, track_meta
                from deepracer.logs import \
                    SimulationLogsIO as slio, \
                    NewRewardUtils as nr, \
                    AnalysisUtils as au, \
                    PlottingUtils as pu, \
                    ActionBreakdownUtils as abu, \
                    DeepRacerLog, \
                    S3FileHandler

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                # -

                # +
                #Get logs from S3
                fh = S3FileHandler(bucket="DEEPRACER_S3_URI",
                                    prefix="DR_LOCAL_S3_MODEL_PREFIX", region="S3_REGION")

                #Attempt to load logs but catch error if training not yet far enough advanced
                try:
                  log = DeepRacerLog(filehandler=fh)
                  log.load_training_trace()
                  df = log.dataframe()
                  simulation_agg = au.simulation_agg(df, secondgroup="unique_episode")
                  complete_ones = simulation_agg[simulation_agg['progress']==100]
                  %store df
                  %store simulation_agg
                  %store complete_ones
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                tu = TrackIO()
                try:
                  track: Track = tu.load_track("DEEPRACER_TRACK")
                  %store track
                except Exception:
                  print("Track not currently included in the solution.  Copy track into the tracks folder or check you're using the latest deepracer-analysis image.")
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Training_progress.py:     
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                import pandas as pd
                import matplotlib.pyplot as plt
                from pprint import pprint

                from deepracer.tracks import TrackIO, Track
                from deepracer.tracks.track_utils import track_breakdown, track_meta
                from deepracer.logs import \
                    SimulationLogsIO as slio, \
                    NewRewardUtils as nr, \
                    AnalysisUtils as au, \
                    PlottingUtils as pu, \
                    ActionBreakdownUtils as abu, \
                    DeepRacerLog, \
                    S3FileHandler

                %store -r simulation_agg
                %store -r df
                %store -r track
                %store -r complete_ones

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                # -

                # ## Training Progress Graphs

                # +
                try:
                  au.analyze_training_progress(simulation_agg, title='Training progress')
                  au.scatter_aggregates(simulation_agg, 'Stats for all laps')
                  complete_ones = simulation_agg[simulation_agg['progress']==100]
                  if complete_ones.shape[0] > 0:
                    au.scatter_aggregates(complete_ones, 'Stats for complete laps')
                  else:
                    print('Stats for complete laps - No complete laps yet.')
                  try:
                    au.analyze_training_progress(complete_ones, title='Complete lap training progress')
                  except Exception:
                    print('Complete lap training progress - No complete laps yet.')
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Quintiles.py:     
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                import pandas as pd
                import matplotlib.pyplot as plt
                from pprint import pprint

                from deepracer.tracks import TrackIO, Track
                from deepracer.tracks.track_utils import track_breakdown, track_meta
                from deepracer.logs import \
                    SimulationLogsIO as slio, \
                    NewRewardUtils as nr, \
                    AnalysisUtils as au, \
                    PlottingUtils as pu, \
                    ActionBreakdownUtils as abu, \
                    DeepRacerLog, \
                    S3FileHandler

                %store -r simulation_agg
                %store -r df
                %store -r track
                %store -r complete_ones

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                # -

                # ## Training Progress Graphs

                # +
                try:
                  complete_ones = simulation_agg[simulation_agg['progress']==100]
                  au.scatter_by_groups(simulation_agg, title='Quintiles')
                  au.scatter_by_groups(complete_ones, title='Complete Lap Quintiles')
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Heatmap.py:     
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                import pandas as pd
                import matplotlib.pyplot as plt
                from pprint import pprint

                from deepracer.tracks import TrackIO, Track
                from deepracer.tracks.track_utils import track_breakdown, track_meta
                from deepracer.logs import \
                    SimulationLogsIO as slio, \
                    NewRewardUtils as nr, \
                    AnalysisUtils as au, \
                    PlottingUtils as pu, \
                    ActionBreakdownUtils as abu, \
                    DeepRacerLog, \
                    S3FileHandler

                %store -r simulation_agg
                %store -r df
                %store -r track
                %store -r complete_ones

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                # -

                # ## Training Heatmap

                # +
                try:
                  pu.plot_track(df, track)
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                # -

                # ## Waypoint Map

                # +
                try:
                  pu.plot_trackpoints(track)
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Data_tables.py:     
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                import pandas as pd
                import matplotlib.pyplot as plt
                from pprint import pprint

                from deepracer.tracks import TrackIO, Track
                from deepracer.tracks.track_utils import track_breakdown, track_meta
                from deepracer.logs import \
                    SimulationLogsIO as slio, \
                    NewRewardUtils as nr, \
                    AnalysisUtils as au, \
                    PlottingUtils as pu, \
                    ActionBreakdownUtils as abu, \
                    DeepRacerLog, \
                    S3FileHandler

                %store -r simulation_agg
                %store -r df
                %store -r track
                %store -r complete_ones

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                # -
                
                # ## Data in tables

                # ## Ten best rewarded episodes in the training
                
                # +
                simulation_agg.nlargest(10, 'reward')
                # -

                # ## Ten fastest complete laps in the training

                # +
                complete_ones.nsmallest(10, 'time')
                # -

                # ## Ten fastest complete laps from the start/finish line in training

                # +
                complete_ones_from_start = complete_ones[complete_ones['start_at']==1]
                complete_ones_from_start.nsmallest(10, 'time')
                # -

                # ## Ten fastest incomplete laps in the training

                # +
                simulation_agg.nsmallest(10, 'time_if_complete')
                # -

                # ## Ten best rewarded complete laps in the training

                # +
                complete_ones.nlargest(10, 'reward')
                # -

                # ## Ten most progressed episodes in the training

                # +
                simulation_agg.nlargest(10, 'progress')
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Path_for_complete_laps.py:     
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                import pandas as pd
                import matplotlib.pyplot as plt
                from pprint import pprint

                from deepracer.tracks import TrackIO, Track
                from deepracer.tracks.track_utils import track_breakdown, track_meta
                from deepracer.logs import \
                    SimulationLogsIO as slio, \
                    NewRewardUtils as nr, \
                    AnalysisUtils as au, \
                    PlottingUtils as pu, \
                    ActionBreakdownUtils as abu, \
                    DeepRacerLog, \
                    S3FileHandler

                %store -r simulation_agg
                %store -r df
                %store -r track
                %store -r complete_ones

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                print("Number of completed laps so far:", len(complete_ones))
                # -

                # ## Path taken for quickest complete laps

                # +
                episodes_to_plot = complete_ones.nsmallest(5, 'time')
                pu.plot_selected_laps(episodes_to_plot, df, track, section_to_plot="unique_episode")
                # -

                # ## Path taken for highest rewarded complete laps
                
                # +
                episodes_to_plot = complete_ones.nlargest(5,'reward')
                pu.plot_selected_laps(episodes_to_plot, df, track, section_to_plot="unique_episode")
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
            /home/ubuntu/deepracer-for-cloud/Training_and_Evaluation_Overview.py:     
              content: |
                # ---
                # jupyter:
                #   jupytext:
                #     formats: ipynb,py:light
                #     text_representation:
                #       extension: .py
                #       format_name: light
                #       format_version: '1.5'
                #       jupytext_version: 1.14.1
                #   kernelspec:
                #     display_name: Python 3 (ipykernel)
                #     language: python
                #     name: python3
                # ---

                # +
                #Import block to bring in dependencies
                from deepracer.logs import metrics
                import matplotlib.pyplot as plt
                import numpy as np
                import pandas as pd

                # Ignore deprecation warnings we have no power over
                import warnings
                warnings.filterwarnings('ignore')
                # -

                # ## Completion of Training and Evaluation per Iteration

                # +
                try:
                  tm = metrics.TrainingMetrics("DEEPRACER_S3_URI")
                  tm.addRound("DR_LOCAL_S3_MODEL_PREFIX", training_round=1, workers=DEEPRACER_WORKERS)
                  results = tm.plotProgress(method=['median','mean'], rolling_average=1, figsize=(20,5))
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                # -

                # ## Best Lap Progression - is your model getting faster?
                
                # +
                try:
                  train=tm.getTraining()
                  ev=tm.getEvaluation()
                  train_complete_lr = train[(train['round']>(0)) & (train['complete']==1)]
                  eval_complete_lr = ev[(ev['round']>(0)) & (ev['complete']==1)]
                  series = []
                  if not train_complete_lr.empty:
                      series.append(('train_time', 'Training', 'blue'))
                  if not eval_complete_lr.empty:
                      series.append(('eval_time', 'Evaluation', 'orange'))
                  rolling_lap = tm.plotProgress(method=['min', 'mean'], rolling_average=15, figsize=(20, 5),
                                                series=series,
                                                title="Laptime for completed laps over last 15 episodes ({}).", ylabel="Laptime",
                                                completedLapsOnly=True, grid=True)                  
                  plt.figure(figsize=(15,5))
                  plt.title('Best lap progression')
                  plt.scatter(train_complete_lr['master_iteration'],train_complete_lr['time'],alpha=0.4)
                  plt.scatter(eval_complete_lr['master_iteration'],eval_complete_lr['time'],alpha=0.4)
                  plt.show()
                except Exception:
                  print("Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
                # -

                # ## Complete Lap Training and Evaluation Percentiles - All

                # +
                eval_percentiles = ["Evaluation", eval_complete_lr['time'].quantile(0.01), eval_complete_lr['time'].quantile(0.1),
                                    eval_complete_lr['time'].quantile(0.25), eval_complete_lr['time'].quantile(0.5),
                                    eval_complete_lr['time'].quantile(0.75)]
                train_percentiles = ["Training", train_complete_lr['time'].quantile(0.01), train_complete_lr['time'].quantile(0.1),
                                     train_complete_lr['time'].quantile(0.25), train_complete_lr['time'].quantile(0.5),
                                     train_complete_lr['time'].quantile(0.75)]
                percentile = pd.DataFrame(
                    columns=['Description', '1st Percentile', '10th Percentile', '25th Percentile', '50th Percentile',
                             '75th Percentile'])
                percentile.loc[0] = eval_percentiles
                percentile.loc[1] = train_percentiles
                percentile.style \
                  .format(precision=3)
                # -

                # ## Complete Lap Training and Evaluation Percentiles - Last 20 Evaluations, Last 40 Training Episodes

                # +
                train_complete_lr2=train_complete_lr.nlargest(40,['start_time'])
                eval_complete_lr2=eval_complete_lr.nlargest(20,['start_time'])
                eval_percentiles2 = ["Evaluation", eval_complete_lr2['time'].quantile(0.01), eval_complete_lr2['time'].quantile(0.1),
                                     eval_complete_lr2['time'].quantile(0.25), eval_complete_lr2['time'].quantile(0.5),
                                     eval_complete_lr2['time'].quantile(0.75)]
                train_percentiles2 = ["Training", train_complete_lr2['time'].quantile(0.01), train_complete_lr2['time'].quantile(0.1),
                                      train_complete_lr2['time'].quantile(0.25), train_complete_lr2['time'].quantile(0.5),
                                      train_complete_lr2['time'].quantile(0.75)]
                percentile2 = pd.DataFrame(
                    columns=['Description', '1st Percentile', '10th Percentile', '25th Percentile', '50th Percentile',
                             '75th Percentile'])
                percentile2.loc[0] = eval_percentiles2
                percentile2.loc[1] = train_percentiles2
                percentile2.style \
                  .format(precision=3)
                # -
              mode : "000755"
              owner: ubuntu
              group: ubuntu
    Properties:
      SecurityGroupIds:
        - !ImportValue
          'Fn::Sub': '${ResourcesStackName}-SecurityGroup'
      Tags:
        - Key: Name
          Value: !Sub '${AWS::StackName}'
      LaunchTemplate:
        LaunchTemplateId: !Ref LaunchTemplate
        Version: !GetAtt LaunchTemplate.LatestVersionNumber
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash -xe
          /usr/local/bin/cfn-init --stack ${AWS::StackName} --resource Instance --region ${AWS::Region}
          bash
          sudo su ubuntu
          cd /home/ubuntu/deepracer-for-cloud/
          source bin/activate.sh
          source /etc/profile.d/dots_vars.sh

  TerminationCronExpression:
    Type: Custom::TerminationCronExpression
    DependsOn:
      - Instance
    Properties:
      ServiceToken:
        !ImportValue
        'Fn::Sub': '${ResourcesStackName}-FutureTimeCronExpressionLambdaArn'
      ttl: !Ref TimeToLiveInMinutes

  TerminationTrigger:
    Type: AWS::Events::Rule
    Properties:
      ScheduleExpression: !GetAtt TerminationCronExpression.cron_expression
      State: ENABLED
      Targets:
        - Arn:
            !ImportValue
            'Fn::Sub': '${ResourcesStackName}-TerminationLambdaArn'
          Id: TerminateInstance
          Input: !Sub '{"instance": "${Instance}", "stack": "${AWS::StackName}"}'

  TerminatePermission:
    Type: AWS::Lambda::Permission
    Properties:
      FunctionName:
        !ImportValue
        'Fn::Sub': '${ResourcesStackName}-TerminationLambdaArn'
      Action: lambda:InvokeFunction
      Principal: events.amazonaws.com
      SourceArn: !GetAtt TerminationTrigger.Arn

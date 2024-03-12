
                #!/bin/bash
                source /etc/profile.d/my_custom_files.sh
                aws sns publish --topic-arn $MY_SNS_TOPIC --message "Training has initiated on a new instance.  The new url to monitor progress is http://$PUBLIC_IP:8100/menu.html" --region $DEEPRACER_REGION
                cd ~/deepracer-for-cloud
                git pull
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
                  distribution=$(. /etc/os-release;echo $ID$VERSION_ID | sed 's/\.//')
                  sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/$distribution/x86_64/3bf863cc.pub
                  sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/machine-learning/repos/$distribution/x86_64/7fa2af80.pub
                  echo "deb http://developer.download.nvidia.com/compute/cuda/repos/$distribution/x86_64 /" | sudo tee /etc/apt/sources.list.d/cuda.list
                  echo "deb http://developer.download.nvidia.com/compute/machine-learning/repos/$distribution/x86_64 /" | sudo tee /etc/apt/sources.list.d/cuda_learn.list
                  sudo apt update && sudo apt install -y nvidia-driver-470-server cuda-minimal-build-11-4 --no-install-recommends -o Dpkg::Options::="--force-overwrite"
                  distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
                  curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
                  curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
                  sudo apt-get update && sudo apt-get install -y --no-install-recommends nvidia-docker2 nvidia-container-toolkit nvidia-container-runtime xserver-xorg-dev xutils-dev
                  ./utils/setup-xorg.sh
                  ./utils/start-xorg.sh
                  sleep 15
                  export DISPLAY=$DR_DISPLAY
                  sudo nohup xinit /usr/bin/jwm -- /usr/lib/xorg/Xorg $DISPLAY -config $DR_DIR/tmp/xorg.conf > $DR_DIR/tmp/xorg.log 2>&1 & sleep 1
                  nohup xrandr -s 1400x900
                  nohup x11vnc -bg -forever -no6 -nopw -rfbport 5901 -rfbportv6 -1 -display WAIT$DISPLAY & sleep 1
                  xauth generate $DISPLAY
                  export XAUTHORITY=~/.Xauthority
                  sudo DISPLAY=:$DISPLAY XAUTHORITY=$(ps aux | grep "X.*\-auth" | grep -v grep | sed -n 's/.*-auth \([^ ]\+\).*/\1/p') xhost +
                fi
                # There is a bug where at some times the training fails to start, so we start, stop and start it again to reduce the occurrences of this issue.
                nohup /bin/bash -lc 'cd ~/deepracer-for-cloud/; dr-start-training -qw; sleep 120; dr-stop-training; sleep 60; echo y | docker container prune; dr-reload; dr-start-training -qwv' &
                mkdir -p /tmp/logs/
                # We want to be able to monitor our EC2 training without needing to connect to console, so we upload all needed info to Public_IP:8100/menu.html using this script
                nohup /bin/bash -lc 'source /home/ubuntu/bin/web_monitoring.sh >/dev/null 2>&1' &
                sleep 180 > /dev/null
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
                      dr-upload-model -bfw > /dev/null 2>&1
                      lastbestcheckpoint=$bestcheckpoint
                    fi
                    sleep 120
                done
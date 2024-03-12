
                date >> /tmp/interrupt.log
                sudo su ubuntu
                INTERRUPT_TIME=$(date '+%Y%m%d-%H%M')
                cd ~/deepracer-for-cloud
                source bin/activate.sh
                source /etc/profile.d/my_bucket.sh
                dr-reload
                dr-upload-model -bfw
                dr-stop-training
                sed -i '/DR_LOCAL_S3_PRETRAINED/d' ~/deepracer-for-cloud/run.env
                sed -i -e '$aDR_LOCAL_S3_PRETRAINED=True' ~/deepracer-for-cloud/run.env
                PRE_TRAINED_LOCATION=$(cat run.env | grep DR_LOCAL_S3_MODEL_PREFIX= | awk -F'=' '{print $2}')
                sed -i 's|-continued-.*||' ~/deepracer-for-cloud/run.env
                TRAINING_LOCATION=$(cat run.env | grep DR_LOCAL_S3_MODEL_PREFIX= | awk -F'=' '{print $2}')
                UPLOAD_LOCATION=$(cat run.env | grep DR_UPLOAD_S3_PREFIX= | awk -F'=' '{print $2}')
                sed -i -e '$aDR_LOCAL_S3_PRETRAINED_PREFIX=PLACEHOLDER' ~/deepracer-for-cloud/run.env
                sed -i "s|DR_LOCAL_S3_PRETRAINED_PREFIX=PLACEHOLDER|DR_LOCAL_S3_PRETRAINED_PREFIX=$PRE_TRAINED_LOCATION|" ~/deepracer-for-cloud/run.env
                sed -i "s|DR_LOCAL_S3_MODEL_PREFIX=$TRAINING_LOCATION|DR_LOCAL_S3_MODEL_PREFIX=$TRAINING_LOCATION-continued-$INTERRUPT_TIME|" ~/deepracer-for-cloud/run.env
                sed -i "s|DR_UPLOAD_S3_PREFIX=$UPLOAD_LOCATION|DR_UPLOAD_S3_PREFIX=$UPLOAD_LOCATION-continued-$INTERRUPT_TIME|" ~/deepracer-for-cloud/run.env
                sed -i -e '$aDR_LOCAL_S3_PRETRAINED_CHECKPOINT=last' ~/deepracer-for-cloud/run.env
                aws s3 cp ~/deepracer-for-cloud/run.env s3://$DEEPRACER_S3_URI/$DR_LOCAL_S3_CUSTOM_FILES_PREFIX/
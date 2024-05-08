#!/bin/bash

set -xa

baseResourcesStackName=$1
shift

stackName=$1
shift

timeToLiveInMinutes=$1
shift

instanceTypeConfig=''

if [[ -n "$DEEPRACER_INSTANCE_TYPE" ]]; then
    instanceTypeConfig="InstanceType=$DEEPRACER_INSTANCE_TYPE"
fi
BUCKET=$(aws cloudformation describe-stacks --stack-name $baseResourcesStackName | jq '.Stacks | .[] | .Outputs | .[] | select(.OutputKey=="Bucket") | .OutputValue' | tr -d '"')
amiId=$(aws ec2 describe-images --owners 747447086422 --filters "Name=state,Values=available" "Name=is-public,Values=true" --query 'sort_by(Images, &CreationDate)[-1].ImageId' | tr -d '"')
set +xa

#validate stack name meets DeepRacer import constraints
stackNameLength=$(expr length "$stackName")
if grep '^[-0-9a-zA-Z]*$' <<<$stackName;
then
  if [ $stackNameLength -le 64 ];
  then 
    echo "Stack name ok for automatic deepracer import"
  else 
    echo ""
    echo "Stack name is not acceptable for deepracer import. Must be 64 characters or less."
    exit 1
  fi
else 
echo ""
echo "Stack name is not acceptable for deepracer import. Valid characters: A-Z, a-z, 0-9, and hypens (-). No spaces or underscores (_)."
    exit 1
fi

chmod +x ./validation.sh

./validation.sh

if [[ $? -ne 0 ]]; then
    while true; do
        echo -e "\e[1;33m  ##########  Error found in your custom files, want to continue anyway? \e[0m"
        read -p "[y / n]: " yn
        case $yn in
            [Yy]* ) break;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
fi

set -x

source custom-files/run.env
aws s3 cp custom-files s3://${BUCKET}/${DR_LOCAL_S3_CUSTOM_FILES_PREFIX} --recursive
aws cloudformation deploy --stack-name $stackName --parameter-overrides ${instanceTypeConfig} ResourcesStackName=$baseResourcesStackName DeepRacerImportName=$stackName TimeToLiveInMinutes=$timeToLiveInMinutes AmiId=$amiId BUCKET=$BUCKET CUSTOMFILELOCATION=$DR_LOCAL_S3_CUSTOM_FILES_PREFIX --template-file standard-instance.yaml --s3-bucket $BUCKET --s3-prefix cf_templates
EC2_IP=`aws cloudformation list-exports --query "Exports[?Name=='${stackName}-PublicIp'].Value" --no-paginate --output text`
echo "Logs will upload every 2 minutes to https://s3.console.aws.amazon.com/s3/buckets/${BUCKET}/${stackName}/logs/"
echo "Training should start shortly on ${EC2_IP}:8080"
echo "Once started, you should also be able to monitor training progress through ${EC2_IP}:8100/menu.html"
echo "Once training is finished, you should see your imported model $stackName in the DeepRacer console"

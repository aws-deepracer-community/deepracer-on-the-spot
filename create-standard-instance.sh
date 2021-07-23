#!/bin/bash

set -xa

baseResourcesStackName=$1
shift

stackName=$1
shift

instanceTypeConfig=''

if [[ -n "$DEEPRACER_INSTANCE_TYPE" ]]; then
	instanceTypeConfig="InstanceType=$DEEPRACER_INSTANCE_TYPE"
fi
BUCKET=$(aws cloudformation describe-stacks --stack-name $baseResourcesStackName | jq '.Stacks | .[] | .Outputs | .[] | select(.OutputKey=="Bucket") | .OutputValue' | tr -d '"')
set +x
. ./validation.sh
set -x
aws s3 cp custom-files s3://${BUCKET}/custom_files --recursive
aws cloudformation deploy --stack-name $stackName --parameter-overrides ${instanceTypeConfig} ResourcesStackName=$baseResourcesStackName --template-file standard-instance.yaml
EC2_IP=`aws cloudformation list-exports --query "Exports[?Name=='${stackName}-PublicIp'].Value" --no-paginate --output text`
echo "Logs will upload every 2 minutes to https://s3.console.aws.amazon.com/s3/buckets/${BUCKET}/${stackName}/logs/"
echo "Training should start shortly on ${EC2_IP}:8080"

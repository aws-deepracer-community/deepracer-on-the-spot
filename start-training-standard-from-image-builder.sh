#!/bin/bash

set -x

baseResourcesStackName=$1
shift

stackName=$1
shift

instanceTypeConfig=''

if [[ -n "$DEEPRACER_INSTANCE_TYPE" ]]; then
	instanceTypeConfig="InstanceType=$DEEPRACER_INSTANCE_TYPE"
fi
BUCKET=$(aws cloudformation describe-stacks --stack-name $baseResourcesStackName | jq '.Stacks | .[] | .Outputs | .[] | select(.OutputKey=="Bucket") | .OutputValue' | tr -d '"')
aws s3 cp custom-files s3://${BUCKET}/custom-files --recursive
aws cloudformation deploy --stack-name $stackName --parameter-overrides ${instanceTypeConfig} ResourcesStackName=$baseResourcesStackName --template-file start-training-standard-instance.yaml

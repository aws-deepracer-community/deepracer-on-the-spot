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

aws cloudformation deploy --stack-name $stackName --parameter-overrides ${instanceTypeConfig} ResourcesStackName=$baseResourcesStackName --template-file standard-instance-from-image-builder.yaml

#!/bin/bash

set -x

baseResourcesStackName=$1
shift

stackName=$1
shift

blockDurationConfig=""

if [[ -n "$DEEPRACER_BLOCK_DURATION" ]]; then
	blockDurationConfig="BlockDurationMinutes=$DEEPRACER_BLOCK_DURATION"
fi

if [[ -n "$NO_DEEPRACER_BLOCK_DURATION" ]]; then
	blockDurationConfig=BlockDurationMinutes=
fi

instanceTypeConfig=''

if [[ -n "$DEEPRACER_INSTANCE_TYPE" ]]; then
       instanceTypeConfig="InstanceType=$DEEPRACER_INSTANCE_TYPE"
fi


aws cloudformation deploy --stack-name $stackName --parameter-overrides ${instanceTypeConfig} ${blockDurationConfig} ResourcesStackName=$baseResourcesStackName --template-file spot-instance.yaml

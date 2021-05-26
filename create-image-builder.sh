#!/bin/bash

set -x

resourcesStackName=$1
shift

stackName=$1
shift

aws cloudformation deploy --stack-name $stackName --template image-builder.yaml --capabilities CAPABILITY_IAM --parameter-overrides ResourcesStackName=$resourcesStackName

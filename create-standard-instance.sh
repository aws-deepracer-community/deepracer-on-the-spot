#!/bin/bash

set -x

baseResourcesStackName=$1
shift

stackName=$1
shift

aws cloudformation deploy --stack-name $stackName --parameter-overrides ResourcesStackName=$baseResourcesStackName --template-file standard-instance.yaml

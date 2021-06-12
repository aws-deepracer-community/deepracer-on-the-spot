#!/bin/bash

set -x

baseResourcesStackName=$1
shift

stackName=$1
shift

ipAddress=$1
shift

ruleN=$1
shift

aws cloudformation deploy --stack-name $stackName --parameter-overrides ResourcesStackName=$baseResourcesStackName MyIPAddress=$ipAddress RuleNumber=$ruleN --template-file add-access.yaml

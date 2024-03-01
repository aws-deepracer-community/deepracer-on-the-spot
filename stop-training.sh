#!/bin/bash
stackName=$1
shift
if [[ $stackName ]]; then
aws cloudformation delete-stack --stack-name $stackName
aws cloudformation wait stack-delete --stack-name $stackName
else
    echo "provide model name to stop"
fi
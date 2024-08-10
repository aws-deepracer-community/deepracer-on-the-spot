#!/bin/bash

set -xa

if [ $# -eq 0 ]; then
   echo "Required model name to stop training not provided"
   exit 1
fi

stackName=$1
shift

timeToLiveInMinutes=2
shift

aws cloudformation update-stack --stack-name $stackName --use-previous-template --parameters  ParameterKey=TimeToLiveInMinutes,ParameterValue=$timeToLiveInMinutes ParameterKey=BUCKET,UsePreviousValue=true ParameterKey=ResourcesStackName,UsePreviousValue=true ParameterKey=DeepRacerImportName,UsePreviousValue=true ParameterKey=CUSTOMFILELOCATION,UsePreviousValue=true ParameterKey=AmiId,UsePreviousValue=true --capabilities CAPABILITY_IAM

if [ $? -eq 0 ]; then
    echo "Training will stop in " $timeToLiveInMinutes " minutes"
else
    echo "Error trying to stop training"
fi


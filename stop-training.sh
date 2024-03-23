#!/bin/bash

set -xa

stackName=$1
shift

timeToLiveInMinutes=2
shift

aws cloudformation update-stack --stack-name $stackName --use-previous-template --parameters  ParameterKey=TimeToLiveInMinutes,ParameterValue=$timeToLiveInMinutes ParameterKey=BUCKET,UsePreviousValue=true ParameterKey=ResourcesStackName,UsePreviousValue=true ParameterKey=DeepRacerImportName,UsePreviousValue=true ParameterKey=CUSTOMFILELOCATION,UsePreviousValue=true ParameterKey=AmiId,UsePreviousValue=true --capabilities CAPABILITY_IAM
echo "Training will stop in " $timeToLiveInMinutes " minutes"

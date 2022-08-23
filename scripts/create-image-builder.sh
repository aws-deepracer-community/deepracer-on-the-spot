#!/bin/bash

set -x

resourcesStackName=$1
shift

stackName=$1
shift

aws cloudformation deploy --stack-name $stackName --template image-builder.yaml --capabilities CAPABILITY_IAM --parameter-overrides ResourcesStackName=$resourcesStackName
echo "Image pipeline will run daily at midnight. If you want to train a model now, go to 'EC2 Image Builder' and run the pipeline manually by selecting actions > run pipeline. This will take about 40 minutes to run fully. You will know it is complete when the AMI is available in EC2 Console > AMIs"

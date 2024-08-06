#!/bin/bash

set -x

resourcesStackName=$1
shift

stackName=$1
shift

aws ec2 disable-image-block-public-access
aws ec2 modify-instance-metadata-defaults --http-tokens optional
aws cloudformation deploy --stack-name $stackName --template image-builder.yaml --capabilities CAPABILITY_IAM --parameter-overrides ResourcesStackName=$resourcesStackName
echo "If your account isn't able to create public AMIs please ensure you have the latest version of the AWS CLI and run this script again"
echo "Image pipeline will run on 1st of the month at midnight. If you want to train a model now, go to 'EC2 Image Builder' and run the pipeline manually by selecting actions > run pipeline. This will take about 40 minutes to run fully. You will know it is complete when the AMI is available in EC2 Console > AMIs"
echo "Important note - to use your own AMI you need to change the account owner for the AMI in 'create-spot-instance.sh' or 'create-standard-instance.sh' from 747447086422 to your AWS Account ID"

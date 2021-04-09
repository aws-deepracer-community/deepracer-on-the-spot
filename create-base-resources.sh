#!/bin/bash

set -x

stackName=$1
shift

ip=$1
shift

ruleN=$1
shift

if [[ "$stackName" == "" || "$ip" == "" || "$ruleN" == "" ]]; then
	echo make sure to provide stackNmae ip ruleN
	exit 1
fi

vpc=$(aws ec2 describe-vpcs --filters Name=isDefault,Values=true --query 'Vpcs[*].VpcId' --output text)
subnetCount=$(aws ec2 describe-subnets --filters Name=vpc-id,Values=$vpc --query 'Subnets[*].SubnetId' | wc -l)
subnetIndex=$(( ( RANDOM % $subnetCount ) ))
subnetId=$(aws ec2 describe-subnets --filters Name=vpc-id,Values=$vpc --query "Subnets[$subnetIndex].SubnetId" --output text)
nacl=$(aws ec2 describe-network-acls --filters Name=vpc-id,Values=$vpc --query 'NetworkAcls[*].NetworkAclId' --output text)

aws cloudformation deploy --template ./base-resources.yaml --stack-name $stackName --parameter-overrides EFSSubnet=$subnetId VPC=$vpc MyIPAddress=$ip NetworkAclId=$nacl RuleNumber=$ruleN --capabilities CAPABILITY_IAM

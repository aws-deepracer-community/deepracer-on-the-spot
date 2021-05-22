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

subnetsConfig=''

vpc=$(aws ec2 describe-vpcs --filters Name=isDefault,Values=true --query 'Vpcs[*].VpcId' --output text)
subnetCount=$(aws ec2 describe-subnets --filters Name=vpc-id,Values=$vpc --query 'Subnets[*].SubnetId' | grep subnet | wc -l)
index=0
while [[ $index -lt $subnetCount ]];do
	subnetId=$(aws ec2 describe-subnets --filters Name=vpc-id,Values=$vpc --query "Subnets[$index].SubnetId" --output text)
	subnetsConfig="${subnetsConfig} Subnet${index}=$subnetId"
	index=$(expr $index + 1)
done

nacl=$(aws ec2 describe-network-acls --filters Name=vpc-id,Values=$vpc --query 'NetworkAcls[*].NetworkAclId' --output text)

aws cloudformation deploy --template ./base-resources.yaml --stack-name $stackName --parameter-overrides ${subnetsConfig} VPC=$vpc MyIPAddress=$ip NetworkAclId=$nacl RuleNumber=$ruleN --capabilities CAPABILITY_IAM

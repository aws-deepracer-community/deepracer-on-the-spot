#!/bin/bash

set -x

stackName=$1
shift

ip=$1
shift

function generate_rule_number() {
        exisiting_rule_numbers=$(aws ec2 describe-network-acls | grep RuleNumber | tr -d ' ' | awk -F ':' '{ print $2 }' | sort -u)
	rule_number_candidate=$(shuf -i 1-32000 -n 1)
	while [[ 0 -ne $(echo $existing_rule_numbers | tr ' ' '\n' | grep -xc $rule_number_candidate) ]];do
	        rule_number_candidate=$(shuf -i 1-32000 -n 1)
        done

	echo $rule_number_candidate
}

ruleN=$(generate_rule_number)

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

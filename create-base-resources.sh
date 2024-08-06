#!/bin/bash

set -x

stackName=$1
shift

ip=$1
shift

function generate_rule_number() {
        existing_rule_numbers=$(aws ec2 describe-network-acls | grep RuleNumber | tr -d ' ' | awk -F ':' '{ print $2 }' | sort -u)
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

vpc=$(aws ec2 describe-vpcs --filters Name=isDefault,Values=true --query 'Vpcs[*].VpcId' --output text)

nacl=$(aws ec2 describe-network-acls --filters Name=vpc-id,Values=$vpc --query 'NetworkAcls[*].NetworkAclId' --output text)

aws ec2 modify-instance-metadata-defaults --http-tokens optional
aws cloudformation deploy --template ./base-resources.yaml --stack-name $stackName --parameter-overrides MyIPAddress=$ip NetworkAclId=$nacl RuleNumber=$ruleN --capabilities CAPABILITY_IAM

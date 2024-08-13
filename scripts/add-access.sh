#!/bin/bash

set -x

if [ $# -ne 3 ]; then
	echo "Usage:"
	echo "$0 stack ipname ipAddress"
	exit 1
fi

baseResourcesStackName=$1
shift

stackName=$1
shift

ipAddress=$1
shift

function check_ip_exists() {
	if [ -n "$(aws ec2 describe-network-acls | grep -o "$ipAddress"/32)" ]; then echo -n True; else echo -n False; fi
}

function generate_rule_number() {
        exisiting_rule_numbers=$(aws ec2 describe-network-acls | grep RuleNumber | tr -d ' ' | awk -F ':' '{ print $2 }' | sort -u)
        rule_number_candidate=$(shuf -i 1-32000 -n 1)
        while [[ 0 -ne $(echo $existing_rule_numbers | tr ' ' '\n' | grep -xc $rule_number_candidate) ]];do
                rule_number_candidate=$(shuf -i 1-32000 -n 1)
        done

        echo $rule_number_candidate
}

if [ "$(check_ip_exists)" == "False" ]; then
	
	ruleN=$(generate_rule_number)
	aws cloudformation deploy --stack-name $stackName --parameter-overrides ResourcesStackName=$baseResourcesStackName MyIPAddress=$ipAddress RuleNumber=$ruleN --template-file add-access.yaml
else
	echo "IP already exist in Network ACLs, rule not added."
fi

#!/bin/bash

set -x

baseResourcesStackName=$1
shift

stackName=$1
shift

ipAddress=$1
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

aws cloudformation deploy --stack-name $stackName --parameter-overrides ResourcesStackName=$baseResourcesStackName MyIPAddress=$ipAddress RuleNumber=$ruleN --template-file add-access.yaml

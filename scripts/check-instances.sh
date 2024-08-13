#!/bin/bash

set -x

aws ec2 describe-instances --query 'Reservations[*].Instances[*].{PublicIP:PublicIpAddress,State:State.Name,Name:Tags[?Key==`Name`]|[0].Value}' --output table



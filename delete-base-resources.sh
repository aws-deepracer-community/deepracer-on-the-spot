#!/bin/bash

stackName=$1
shift

aws cloudformation delete-stack --stack-name $stackName

aws cloudformation wait stack-delete-complete --stack-name $stackName

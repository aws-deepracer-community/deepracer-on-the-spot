# deepracer-templates
Simple cloudformation template to assist in creating ec2 instances for deep racer learning.

## Two stack, one for S3 storage bucket and EFS filesystem, a second one for an ec2 instance. The ec2 instance mounts the efs at /home/ubunty/efs - base-resources.yaml and instance.yaml
Supporting scripts: create-base-resources.sh and delete-base-resources.sh

create-base-resources.sh takes mandatory parameters: stack-name, ip address to add to ncls, ncl rule number
The script also makes assumptions about account structure and figures out which VPC (defaul) to use, and randomly pics a subnet.

delete-base-resources.sh takes a single mandatory parameter, the stack-name, same value as above.

create-instance.sh - takes two mandatory parameters, the name of the base resources stack and the name of the stack used to create an ec2 instance. This script can be execute multiple times, with different instance stack names. All the different instances will share the base resources (efs and s3).

## Single template creates storage bucket and ec2 instance - ec2-and-s3-for-learning.yaml

Example awscli provisioning of the template:

aws cloudformation deploy --stack-name MY_STACK_NAME --template ec2-and-s3-for-learning.yaml --parameter-overrides RuleNumber=ACL_RULE_NUMBER MyIPAddress=MY_IP NetworkAclId=NACL_ID --capabilities CAPABILITY_IAM

Where each of the following needs to have appropriate values assigned:

MY_STACK_NAME:  This is used to name the cloudformation stack created, it is also used to tag the ec2 instance to easily find it, and will endup as a prefix of the name of the s3 bucket created.

ACL_RULE_NUMBER: This used in creating the NACL in-bound rules, pick a number that does not conflict with others.

MY_IP: used to configure access that allows your IP address to access the ec2 instance.

NACL_ID: used in the ACL_RULE_NUMBER, to configure the correct NACL

Other features:

The ec2 instance created will have deepracer software installed. The install process includes a reboot, meaning that after the template has been provisioned, the instance will be rebooted once.

By default this template uses spot pricing, you can adjust the spot price with the SpotPrice parameter, with value '' indicating that you want to use on-demand pricing.

Access to the ec2 instance is via ssm sessions, not ssh (no ssh key is needed).

This template creates an s3 bucket. When deleting the template, the bucket must be empty. The name of the created bucket is available as an environment variable (MY_BUCKET) within the ec2 instance.

'One-time' spot instances can not be stopped. This template allows updating the template with parameter 'DisableInstance=Yes', which terminates the instance. Subsequent update with 'DisableInstance='No' will recreate the instance.
This will result in loss of locally stored files.

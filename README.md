# deepracer-templates
Simple cloudformation template to assist in creating ec2 instances for deep racer learning.

## Two stacks, one for S3 storage bucket and EFS filesystem, a second one for an ec2 instance. The ec2 instance mounts the efs at /home/ubunty/efs - base-resources.yaml and instance.yaml

### Base resources stack
The base resources stack can be created using the create-base-resources.sh script. Please examine the content of the script to understand how the template is deployed.
The template provisioned by the create-base-resources.sh script utilizes the base.resources.yaml template file.

The main purpose of this template is to create an S3 bucket, an EFS filesystem, and EFS Mount Targets on each of the subnets within the default VPC. (The template has a max of 6 subnets, if your VPC has a different number of subnets in the default VPC, please adjust this script accordingly.)

The delete-base-resources.sh script can be used to delete the resources created by the create-base-resouces.sh script (and associated template). Please be aware that the resource deletion will fail if the S3 bucket created is not empty.

### On demand ec2 instance stack
The script create-standard-instance.sh creates an EC2 instance, with on-demand pricing. The scrip takes two mandatory parameters. The name of the 'base resources stack' and the name of the stack to be creased that provisions the ec2 instance. Please familiarize yourself with the create-standard-instance.sh script and the associated standard-instance.yaml template file.

### Spot ec2 instance stack
The script create-spot-instance.sh creates an EC2 instance with spot pricing. Spot price is not specified, current spot price is used. The script takes two mandatory parameters. The name of the 'base resources stack' and the name of the stack to be created that provision the ec2 instance. Please familiarize yourself with the create-spot-instance.sh scrip and the associated spot-instance.yaml template file.

delete-base-resources.sh takes a single mandatory parameter, the stack-name, same value as above.

create-standard-instance.sh - takes two mandatory parameters, the name of the base resources stack and the name of the stack used to create an ec2 instance. This script can be execute multiple times, with different instance stack names. All the different instances will share the base resources (efs and s3).

create-standard-instance.sh creates a single on demad ec2 instance. The instance type used is configured as the default in the standard-instance.yaml cloudformation template file.

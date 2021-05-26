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

### Image Builder

The script create-image-builder.sh creates an EC2 Image Builder Pipeline that creates an new AMI daily. The resources used to create the images include the communit git repositry content for deep racing. The drivers/containers are installed and the image is rebooted. This speeds up the instance creation, as the software is presinstalled. create-image-builder.sh takes two parameters, the resources stack name and a stack name for the image builder provisioned template. The resources created are defined in the image-builder.yaml template.

The image builder pipeline is invoked at mid-night. To avoid waiting over night for the first AMI to be created, the pipeline can be invoked interactively after it has been created by the provisioned template.

The image builder logs are written into the s3 bucket provided by the 'base resources'. The logs are subject to s3 lifecycle expiration.

Old created AMIs are deleted daily. Current AMI id is written to SSM parameter named /DeepRacer/Images/$baseResourcesStackName (this value can be changed via a template parameter)

### Standard instance from image builder

The script create-standard-instance-from-image-builder.sh functions like 'create-standard-instance.sh', only difference being that it utilizes the AMI created by the image builder pipeline.

### Spot instance from image builder

The script create-spot-instance-from-image-builder.sh functions like 'create-standard-instance.sh', only difference being that it utilizes the AMI created by the image builder pipeline.

# deepracer-templates
Simple cloudformation template to assist in creating ec2 instances for deep racer learning, with automated training start.

### Base resources stack
The base resources stack can be created using the create-base-resources.sh script. Please examine the content of the script to understand how the template is deployed.
The template provisioned by the create-base-resources.sh script utilizes the base.resources.yaml template file.

The main purpose of this template is to create an S3 bucket, an EFS filesystem, and EFS Mount Targets on each of the subnets within the default VPC. (The template has a max of 6 subnets, if your VPC has a different number of subnets in the default VPC, please adjust this script accordingly.)

The script also creates an SNS Topic that has messages published to it in the event of spot instance termination.

The delete-base-resources.sh script can be used to delete the resources created by the create-base-resouces.sh script (and associated template). Please be aware that the resource deletion will fail if the S3 bucket created is not empty.

delete-base-resources.sh takes a single mandatory parameter, the stack-name, same value as above.


### Image Builder

As a prerequicite to provisioning deepracer training ec2 instances, an the image builder stack must be provisioned and at least one image must have been created.

The script create-image-builder.sh creates an EC2 Image Builder Pipeline that creates an new AMI daily. The resources used to create the images include the communit git repositry content for deep racing. The drivers/containers are installed and the image is rebooted. This speeds up the instance creation, as the software is presinstalled. create-image-builder.sh takes two parameters, the resources stack name and a stack name for the image builder provisioned template. The resources created are defined in the image-builder.yaml template.

The image builder pipeline is invoked at mid-night. To avoid waiting over night for the first AMI to be created, the pipeline can be invoked interactively after it has been created by the provisioned template.

The image builder logs are written into the s3 bucket provided by the 'base resources'. The logs are subject to s3 lifecycle expiration.

Old created AMIs are deleted daily. Current AMI id is written to SSM parameter named /DeepRacer/Images/$baseResourcesStackName (this value can be changed via a template parameter)

### Standard instance using the AMI created by the image builder pipeline

create-standard-instance.sh creates a single on demad ec2 instance. The instance type used is configured as the default in the standard-instance.yaml cloudformation template file.

create-standard-instance.sh - takes two mandatory parameters, the name of the base resources stack and the name of the stack used to create an ec2 instance. This script can be execute multiple times, with different instance stack names. All the different instances will share the base resources (efs and s3).

### Spot instance from image builder using the AMI created by the image builder pipeline

The script create-spot-instance.sh functions like 'create-standard-instance.sh', only difference being that it utilizes the AMI created by the image builder pipeline. Environment variables can be used to control spot requests, namely block duration, please take of look at the script content, and notice use of environment variables there-in.

### Adding additional IP addresses to security group ingress and NACLs

The script add-access.sh adds an additional IP address to the security group ingress, it also add an NACL entry. Use:  ./add-access.sh <base resources stack name> <stack name> <IP address> <NACL Rule Number>

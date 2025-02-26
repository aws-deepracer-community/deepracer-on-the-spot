import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function BaseResourcesPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Explaining the Base Resources stack</h1>
          <h2>Architecture Overview</h2>
          <img src="/images/base-stack.png"></img>
          <p></p>
          <p>The base resources stack sets up an AWS region with the pre-requisites to run DeepRacer on the Spot.  As the majority of AWS resources are regional this stack must be ran in each region you want to use DeepRacer on the Spot in.</p>
          <p></p>
          <p>The base resources stack creates or updates the following resources: -</p>
          <li>An <a href="https://aws.amazon.com/s3/" target="_blank"> S3 Bucket</a> to store the models and logs that DeepRacer on the Spot creates during training.  S3 provides object storage and in very cost effective for storing large volumes of data.</li>
          <li>An <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html" target="_blank"> S3 Bucket Policy</a> which grants the DeepRacer service access to your data stored in the S3 bucket.  These permissions are used to allow the DeepRacer service to import models into the DeepRacer console.</li>
          <li>AWS provides a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" target="_blank"> Virtual Private Cloud (VPC)</a> service , which provides private networking in AWS.  DeepRacer on the Spot extends the configuration of the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html" target="_blank"> Default VPC, which includes public subnets, with: -</a>
            <ul>
            <ul>
              <li>Updating the stateless firewall rules called <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html" target="_blank"> NACLs</a>, by adding in the IP address you specify when running the base resources scripts.  This rule will allow the traffic from your device to this website to monitor your training.</li>
              <li>Creating a stateful firewall rules called a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html" target="_blank"> Security Group</a>, containing the IP address you specify when running the base resources scripts.   This rule will allow the traffic from your device to this website to monitor your training.</li>
            </ul>
            </ul>
          </li>
          <li>An <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html" target="_blank"> IAM Role</a>.  This provides AWS permissions to allow the instance running the training to read and write data to your S3 bucket, send messages to you via email when training starts / stops or is interrupted and to initiate deletion at the end of training.  Permissions are provided to the role via attached <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html" target="_blank"> IAM Policies</a>.</li>
          <li>An <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html" target="_blank"> SNS Topic</a>.  This provides the ability to send messages, which is used by DeepRacer on the Spot to email you when training starts / stops, fails or is interrupted.  To receive the messages you have to 'subscribe' to the SNS topic, which is handled in the 'add interruption notification subscription' stack</li>
          <li>An <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-using-identity-based-policies.html" target="_blank"> SNS Topic Policy</a>.  This grants permissions to the SNS topic to allow the EC2 instance running your training to send messages.</li>
          <li>Three <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" target="_blank"> Lambda functions</a>.  Lambda provides serverless compute so you can execute code when you need it, rather than paying for compute resources all the time.  One Lambda function sends a request to increase your <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html" target="_blank"> EC2 Quota</a>, allowing you to run instances with GPUs once it is approved.  The other two are used to trigger the delete processes to end your training and remove the resources to avoid future costs being incurred.  Each Lambda function includes these additional resources: -</li>
          <ul>
            <ul>
              <li>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html" target="_blank"> IAM Execution Role</a>, granting the Lambda function the permissions it requires to the AWS resources it needs to query / modify.</li>
              <li>A <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html" target="_blank"> CloudWatch Log Group</a>, which stores the output of any commands ran within the Lambda function to allow for troubleshooting.</li>
            </ul>
            </ul>
        </TextContent>
      }
    />
  );
}

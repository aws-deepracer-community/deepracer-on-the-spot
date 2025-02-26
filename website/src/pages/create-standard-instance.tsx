import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function CreateStandardInstancePage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Explaining the Create Standard Instance stack</h1>
          <h2>Architecture Overview</h2>
          <img src="/images/standard-instance.png"></img>
          <p></p>
          <p>The Create Standard Instance stack is used to create an EC2 instance in the specific region where you've deployed your <a href="/understanding_dots/base_resources">base resources stack</a>.
          The instance will have the <a href="https://aws-deepracer-community.github.io/deepracer-for-cloud/" target="_blank"> DeepRacer for Cloud</a> solution deployed to it and will undertake your training for the amount of time, in minutes, you specified when deploying the stack.</p>
          <p>The standard instance stack creates the following resources: -</p>
          <li>An <a href="https://docs.aws.amazon.com/ec2/" target="_blank"> EC2 Instance</a> that runs the training.  On to this instance a number of Docker Containers are deployed to run the training, as well as provide you this website to interact with and undertake training analysis.  Permissions required by this instance are provided using the EC2 Instance Profile that was created in the base stack.  The instance also communicates updates on training via the SNS Topic that was created in the base stack.</li>
          <li>An <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule.html" target="_blank"> EventBridge Event Rule</a> that triggers the end of training and cleaning up of the resources that were deployed.</li >
          <li>A <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html" target="_blank"> Lambda permission</a> that allows the EventBridge Event Rule to initiate the termination. </li>
          <p>Although not deployed by the CloudFormation stack once the training time defined is reached and it's triggered the Lambda function initiates communication with the EC2 Instance to conclude the training and with the CloudFormation template to delete all the resources the stack created.</p>
     </TextContent>
      }
    />
  );
}

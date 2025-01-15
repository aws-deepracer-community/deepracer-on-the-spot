import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function ConnectToInstancePage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Connect to Instance Using AWS Systems Manager Session Manager</h1>
          <p></p>
          <p>Connect to your <a href="update_to_ssm_url" target="_blank"> Instance</a> to perform troubleshooting steps.  If you're not already authenticated to the AWS Console you'll be prompted to log in first.</p>
          <p></p>
          <h2>Why use AWS Systems Manager?</h2>
          <p></p>
          <p>AWS Systems Manager is a fully managed suite of tools to manage your virtual machines both in AWS, multi-cloud and hybrid cloud environments.</p>
          <p>One capability of Systems Manager is Session Manager, which provides a secure, authenticated connection to your virtual machines without the need for SSH Keys.</p>
          <p>For AWS hosted machines it's possible to connect and manage the machines without the need for direct IP connectivity using the AWS internal network and VPC endpoints, so instances do not need to be publicly exposed with SSH.</p>
          <p>Session Manager even provides a port forwarding capability so you can connect to any port on your instance without having to publicly expose that port.</p>
          <p>To learn more visit the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html" target="_blank"> Systems Manager Session Manager</a> documentation.</p>
          <p></p>
          <h2>How Session Manager Works</h2>
          <img src="/images/session-manager.png"></img>
          <p></p>
          <li>The user authenticates their identity and credentials through IAM.</li>
          <li>The user initiates an SSH session through Session Manager and sends API calls to the EC2 instance.</li>
          <li>The AWS Systems Manager SSM Agent, which is installed on the EC2 instance, connects to Session Manager and runs the commands.</li>
          <li>For auditing and monitoring purposes, Session Manager sends the logging data to CloudWatch Logs. Alternatively, you can send log data to an Amazon Simple Storage Service (Amazon S3) bucket.</li>
        </TextContent>
      }
    />
  );
}

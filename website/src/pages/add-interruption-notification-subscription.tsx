import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function AddInterruptionNotificationSubscriptionPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Explaining the Add Interruption Notification Subscription stack</h1>
          <h2>Architecture Overview</h2>
          <img src="/images/interruption-notification.png"></img>
          <p></p>
          <p>The <a href="/understanding_dots/base_resources">base resources stack</a> deploys a an SNS topic to capture events related to DeepRacer on the Spot.  The add interruption notification subscription stack is then used to subscribe an email address to the SNS topic, so you can receive notification events such as training starting, training finishing, errors and spot interruptions.  The stack must be ran against each base stack you create to receive notifications, i.e. once per region.</p>
          <p>The add interruption notification subscription stack creates or updates the following resources: -</p>
          <li>Creates an <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html" target="_blank"> SNS Subscription</a>, using the email protocol and the email address you provide to the stack.  the subscription wil generate an email asking you to confirm you want to subscribe to the SNS topic.</li>
          <li>It updates the <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html" target="_blank"> SNS Topic</a> created by the base resources stack to add the subscription that's created.</li>
     </TextContent>
      }
    />
  );
}

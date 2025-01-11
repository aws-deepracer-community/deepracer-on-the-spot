import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function HomePage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Welcome to DeepRacer on the Spot</h1>
          <p></p>
          <p>DeepRacer on the Spot provides a wrapper around DeepRacer for Cloud, allowing you to train DeepRacer models on EC2.</p>
          <p></p>
          <p>Training on an EC2 has many advantages: -</p>
          <li>Being able to set up a customized action space</li>
          <li>Train much faster with multiple workers training simultaneously</li>
          <li>Ability to increment your training</li>
          <li>Improved log analysis tools</li>
          <li>Train multiple models at once on different EC2 instances</li>
          <li>Train on multiple tracks at the same time</li>
          <li>Reduced cost when using <a href="https://aws.amazon.com/ec2/pricing/on-demand/">on demand instances</a> or <a href="https://github.com/aws-deepracer-community/deepracer-on-the-spot/blob/main/spot_info.md">spot instances</a> versus $3.50/hour in the Amazon DeepRacer Console.</li>
          <p></p>
          <img src="images/deepracer-track.png"></img>
        </TextContent>
      }
    />
  );
}

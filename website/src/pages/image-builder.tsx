import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function ImageBuilderPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Explaining the Image Builder stack</h1>
          <h2>Architecture Overview</h2>
          <img src="/images/image-builder.png"></img>
          <p></p>
          <p><b>Note - for advanced users only</b></p>
          <p>The standard DeepRacer on the Spot set-up relies on an AMI being published centrally, that users can then utilise.  However there are certain circumstances where you may want to deploy your own AMI, for example perhaps the centralised solution doesn't provide an AMI in the region you want to deploy DeepRacer on the Spot into.</p>
          <p>The image builder stack is used to create an AMI in the specific region where you've deployed your <a href="/understanding_dots/base_resources">base resources stack</a>.  If you want your own AMI in more than one region you should deploy this stack in each region where you've deployed your base stack.</p>
          <p>The image builder stack creates the following resources: -</p>
          <li>An <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html">EC2 Image Builder</a> configuration to create an Amazon Machine Image (AMI), which is a 'golden image' of an operating system, which includes: -</li>
          <ul>
            <ul>
              <li><a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/create-infra-config.html">EC2 Image Builder Infrastructure Configuration</a>, which specifies the EC2 instance types, logging and security configuration of the temporary EC2 instance used to execute the build.</li>
              <li>Multiple <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-components.html">EC2 Image Builder Components</a>, which specify changes that are made to the operating system (e.g. disk configuration, installation of software and its pre-requisites.</li>
              <li><a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-recipes.html">EC2 Image Builder Recipe</a>, which specifies all the components that wil be deployed into the instance, along with the base Ubuntu Linux image that is used as a starting point.</li>
              <li><a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-distribution-settings.html">EC2 Image Builder Distribution Configuration</a>, which specifies the region the AMI that is created will be sent to.  Note - the template in its current form only supports the region where the CloudFormation template is deployed.</li>
              <li><a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/how-image-builder-works.html">EC2 Image Builder Image Pipeline</a>, which controls the execution of the job to create the AMI.</li>
              <li><a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-lifecycles.html">EC2 Image Builder Lifecycle Policy</a>, which removes all but the latest AMI to be created to avoid additional storage costs.</li>
              </ul>
          </ul>
          <li>An <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html" target="_blank"> SNS Topic</a>.  This provides allows EC2 Image Builder to send notifications related to successful and failed builds.</li>
          <li>A <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/monitor-cwlogs.html" target="_blank"> CloudWatch Log Group</a>, which stores the output of any commands ran during the build for troubleshooting.</li>
          <li>Two <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html" target="_blank"> IAM Roles</a>.  These provide AWS permissions to allow the instance running the build process to access required resources, as well as the EC2 Image Builder process to orchestrate the build process.  Both role have permissions provided by <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html" target="_blank"> IAM Policies</a>.</li>
          <p></p>
          <p>Although not deployed by the CloudFormation stack once the Image Builder Pipeline runs successfully an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html" target="_blank"> Amazon Machine Image (AMI)</a> will be created n the first day of each month.  If you can't wait for that you can go into the AWS console and initiate the first build manually by triggering the pipeline.</p>
     </TextContent>
      }
    />
  );
}

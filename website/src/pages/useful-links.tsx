import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function UsefulLinksPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Useful Links</h1>
          <p></p>
          <p>There are many resources that can help you improve your models and learn about AWS services at the same time!</p>
          <p></p>
          <h2>Training</h2>
          <p><a href="https://github.com/aws-deepracer-community/deepracer-on-the-spot">DeepRacer on the Spot</a> provides the source code and documentation for this solution.</p>
          <p><a href="https://github.com/aws-deepracer-community/deepracer-for-cloud">DeepRacer for Cloud</a> provides the source code and documentation for the DeepRacer for Cloud solution, allowing you to train DeepRacer models on AWS, Azure, GCP and local machines, but there's more manual configuration required then using DeepRacer on the Spot.</p>
          <p><a href="https://docs.aws.amazon.com/deepracer/">DeepRacer official documentation</a> provides the official AWS DeepRacer documentation.</p>
          <p></p>
          <h2>Analysis</h2>
          <p><a href="https://github.com/aws-deepracer-community/deepracer-analysis">DeepRacer Analysis</a> provides the source code and documentation for the Jupyter notebook based analysis solution that powers much of the training monitoring provided within DeepRacer on the Spot.  Useful to use for offline analysis when your training has finished.</p>
          <p><a href="https://github.com/aws-deepracer-community/deepracer-log-guru">DeepRacer Log Guru</a> provides the source code and documentation for the DeepRacer Log Guru analysis solution that.  Useful to use for offline analysis when your training has finished.</p>
          <h2>Additional Resources</h2>
          <p><a href="https://github.com/aws-deepracer-community">DeepRacer Community Github</a> provides numerous other repositories to customise your own tracks and more</p>
          <p><a href="https://join.deepracing.io/">AWS Machine Learning Community</a> provides a Discord server to communicate with fellow racers for advice and friendly competition</p>
          <p><a href="https://blog.deepracing.io/">AWS DeepRacer Community Blog</a> provides a blog of all DeepRacer related events and updates</p>
          </TextContent>
      }
    />
  );
}

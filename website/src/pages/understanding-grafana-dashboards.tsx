import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function UnderstandingGrafanaDashboardsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Understanding Grafana Dashboards</h1>
          <p></p>
          <p>The Grafana Dashboards available during training can provide very useful insights into your training.</p>
          <h2>Grafana Reward Graph</h2>
          <img src="images/grafana-reward.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>The Grafana reward graph plots the reward during training, the reward during training for complete laps and the reward during evaluation.</p>
          <p>Points worth noting when reviewing this graph: -</p>
          <li>You would typically expect each line on the graph to be heading in an upward trajectory</li>
          <li>If the complete lap reward isn't generally higher than the training reward then you may want to amend your reward function</li>
          <p></p>
          <h2>Grafana Progress Graph</h2>
          <img src="images/grafana-progress.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>The Grafana progress graph plots the progress made during training and evaluation, both for individual data points and a moving average</p>
          <p>Points worth noting when reviewing this graph: -</p>
          <li>You would typically expect each line on the graph to be heading in a upward trajectory, although having some individual data points that are lower is expected due to exploration</li>
          <li>If you're unable to complete any laps after an extended period of time you may want to revisit your hyperparameters, action space or reward function as one or more of them may be overly 'aggressive', or you could be inadvertently rewarding your model to go offtrack</li>
          <li>The graph provides the percentage of the lap completed, not the percentage of complete laps.  For example if the moving average is at 90% it means that is the overall average amount of the lap completed, e.g. it could mean 10 laps were complete and 10 were 80% complete, so overall only 50% of the actual laps were successful</li>
          <li>Due to training taking place starting at various points of the track, but evaluation taking place from the start/finish line you can sometimes see variance in the two metrics, which over time as the model learns the track will typically converge to similar values</li>
          <p></p>
          <h2>Grafana Lap Times Graph</h2>
          <p></p>
          <img src="images/grafana-laptimes.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>The Grafana lap times graph plots the lap times made during training and evaluation, both for individual laps and a moving average</p>
          <p>Points worth noting when reviewing this graph: -</p>
          <li>You would typically expect each line on the graph to be heading in a downward trajectory, if this is not the case then it's likely your reward function needs revisiting to ensure that the overall reward received for quicker laps is higher than for slower laps</li>
          <li>As training starts from different points on the track you can, depending on the track, get significantly faster training laps than evaluation laps, as you may find some of the training laps start on a slower part of the track like a hairpin</li>
          <li>If over time you find the lap times stagnate, e.g. the 'last' times are regularly greater than the mean or minimum times it might be time to stop your training and have a rethink, although it's worth being as certain as you can be that no further performance improvement is likely, as sometimes with reinforcement learning you can have a 'breakthrough' after many hours of stagnation.  Perhaps altering hyperparameters and cloning your model or minor alterations to reward function or action space could help.  Try to avoid changing too much when cloning as it can have adverse affects.</li>
          <p></p>
          <h2>Grafana Epoch Graph</h2>
          <img src="images/grafana-epoch.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>The Grafana epoch graph plots the entropy in the model, both individual data points and a moving average</p>
          <p>Points worth noting when reviewing this graph: -</p>
          <li>You would typically expect each line on the graph to be heading in an downward trajectory, this means the model is getting more certain of the actions it is taking</li>
          <li>It's perfectly normal to see short-term upwards increases in entropy as the model explores the environment, a good model with a balance between exploration and exploration will be on a downward trend with undulations</li>
          <li>A number of hyperparameters impact entropy, it's worth experimenting with batch size and learning rate to control it</li>
        </TextContent>
      }
    />
  );
}
import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";
import { Link } from "react-router-dom";

export default function UnderstandingGrafanaDashboardsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Understanding Jupyter Notebooks</h1>
          <p></p>
          <p>Jupyter Notebooks provide significant training analysis, either live during training from the web links, accessing the Notebook directly or after training by using the <a href="https://github.com/aws-deepracer-community/deepracer-analysis" target="_blank">DeepRacer Analysis solution</a></p>
          <h2>Training Overview Page</h2>
          <h3>Completion of Training and Evaluation per Iteration</h3>
          <img src="images/jupyter-1.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>These graphs provide the median and mean completion for both training and evaluation laps</p>
          <p>Points worth noting when reviewing this graph: -</p>
          <li>You would typically expect each line on the graph to be heading in an upward trajectory, which indicates the model is, on average, completing more of the lap than it was previously</li>
          <li>If the graphs aren't generally going upwards, or worse going downwards, then you may want to amend your reward function</li>
          <li>The graphs provide the percentage of the lap completed, not the percentage of complete laps.  For example if the mean average is at 90% it means that is the overall average amount of the lap completed, e.g. it could mean 10 laps were complete and 10 were 80% complete, so overall only 50% of the actual laps were successful</li>
          <p></p>
          <h3>Model stability - how often is the model completing full laps?</h3>
          <img src="images/jupyter-2.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This graphs provides an overview of the proportion of complete laps for both training and evaluation</p>
          <p>Points worth noting when reviewing this graph: -</p>
          <li>The Y axis uses a scale from 0.0. to 1.0, so 1.0 denotes all attempted laps were complete.</li>
          <li>At the start of training a new model this graph may be at 0.0 for some time</li>
          <li>Once the model learns the track you should see this graph move in an upward trajectory until it plateaus.  The point at which it plateaus depends on how 'aggressive' your model is</li>
          <li>You may want to target a higher percentage for average lap races.  If you're getting 0.8 on average for evaluation this means your model is completing a lap 4 times out of 5, or 80% of the time.  This might be fine for a single lap race but for a 3 lap average race you'll only likely to get 3 consecutive complete laps 51.2% of the time (80% x 80% x 80%)</li>
          <p></p>  
          <h3>Best Lap Progression - is your model getting faster?</h3>
          <img src="images/jupyter-3.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>These graphs provides an overview of the minimum and mean lap times as well as the individual data points in training and evaluation</p>
          <p>Points worth noting when reviewing these graphs: -</p>
          <li>You would typically expect each line on the graph to be heading in a downward trajectory, if this is not the case then it's likely your reward function needs revisiting to ensure that the overall reward received for quicker laps is higher than for slower laps</li>
          <li>As training starts from different points on the track you can, depending on the track, get significantly faster training laps than evaluation laps, as you may find some of the training laps start on a slower part of the track like a hairpin</li>
          <li>If over time you find the lap times stagnate it might be time to stop your training and have a rethink, although it's worth being as certain as you can be that no further performance improvement is likely, as sometimes with reinforcement learning you can have a 'breakthrough' after many hours of stagnation.  Perhaps altering hyperparameters and cloning your model or minor alterations to reward function or action space could help.  Try to avoid changing too much when cloning as it can have adverse affects.</li>
          <p></p>     
          <h3>Lap Percentiles</h3>
          <img src="images/jupyter-4.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>These tables provide a view of the complete lap percentiles for the entire training run as well as the last 20 evaluations and 40 training episodes</p>
          <p>Points worth noting when reviewing these tables: -</p>
          <li>You would typically expect last 20 / 40 table of percentiles to be faster than for all the episodes in training.  If they're not then this could mean your model has reached it's maximum capability with it's current settings and you may want to clone and alter some settings, or try a different strategy</li>
          <p></p>
          <h2>Training Progress Page</h2>
          <h3>Progress Related to Starting Position Graph</h3>
          <img src="images/jupyter-5.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This graph under the 'Stats for all laps' section can be useful in determining where your model may be regularly leaving the track.</p>
          <p>You may want to use this information to consider if your hyperparameters or reward function are too aggressive, or whether you have the right actions in your action space to get around that section fo the track.</p>
          <p>You can see in this example from the progress made at each starting position that there's a section of the track around 60% from the start / finish line that the model is struggling to complete.  Using this information with the waypoints show in the <Link to="training_monitoring/training_reward_heatmap">Training Reward Heatmap</Link> section you can work out what area of the track is causing difficulty and make alterations accordingly.</p>
          <p></p>
          <h3>Reward / Time Graph</h3>
          <img src="images/jupyter-6.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This graph under the 'Stats for complete laps' section can be useful in determining whether your reward function is rewarding faster laps.</p>
          <p>You may want to use this information to help create a reward function that ensures faster laps are higher rewarded, otherwise lap times may slow down over time.</p>
          <p></p>
          <h2>Training Quintiles Page</h2>
          <h3>Complete Lap Quintiles Time Graphs</h3>
          <p>The Quintiles page splits all your training into 5 equal parts and provides a graph for each of those parts.  It's useful to determine if the last 20% of your training is better than previous sections of your training.</p>
          <img src="images/jupyter-7.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This graph under the 'Complete Lap Quintiles' section can be useful in determining whether your lap times are improving over time.</p>
          <p>You should expect to see the bars in teh bar chart shift to the left between each quintile, otherwise lap times may have stagnated or start to get slower.</p>
          <p></p>
          <h2>Training Reward Heatmap Page</h2>
          <h3>Training Heatmap</h3>
          <img src="images/jupyter-8.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This heatmap provides a view of the rewards received at each waypoint on the track</p>
          <p>Points worth noting when reviewing this heatmap: -</p>
          <li>The brighter the colour, the more reward the model has received at that point on the track.</li>
          <li>the heatmap is cumulative, meaning the brighter areas are being visited by the model more often, as well as likely to be higher rewarded</li>
          <p></p>
          <h3>Waypoint Map</h3>
          <img src="images/jupyter-9.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This picture provides the waypoints mapped onto the track</p>
          <p>It can be useful when using data points from other graphs to work out where your model is performing well or struggling</p>
          <p>Advanced users may use it to decide where to start the car on the track by altering run.env parameters</p>         
          <p></p>
          <h2>Training Data Tables Page</h2>
          <h3>Best and Fastest Laps</h3>
          <img src="images/jupyter-10.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This table provides a view of the best and fastest laps that the model has completed.</p>
          <p>Ideally you want some correlation here, i.e. the best rewarded laps are also appearing in the fastest complete lap table.  If not you want want to consider altering your reward function.</p>
          <p></p>
          <h2>Training Complete Lap Paths Page</h2>
          <h3>Path taken for complete and highest rewarded laps</h3>
          <img src="images/jupyter-11.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>This will show the route taken by your model for its fastest and most rewarded laps.</p>
          <p>It can be useful to determine whether your model is taken an optimal route, and if you're having issues correlating best rewarded laps to fastest laps you may find some behaviour that's increasing reward but slowing yur lap times like 'weaving' that you'd want to update your reward function to eliminate.</p>
          <p></p>         
        </TextContent>
      }
    />
  );
}
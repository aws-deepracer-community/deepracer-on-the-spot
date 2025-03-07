import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function UnderstandingHyperparametersPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Understanding Hyperparameters</h1>
          <p></p>
          <h2>Batch Size and Epochs</h2>
          <img src="images/batch-epoch.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>Batch size - Smaller batch size means less episodes to learn from when updating, larger batch size has a bigger pool of episodes to update from</p>
          <p>Number of epochs - larger numbers means the model update passes over a subset of the batch more times</p>
          <p>Larger batch + larger number of epochs = model is more likely to learn from training episode, but takes longer to train</p>
          <p></p>
          <h2>Batch size Examples what's the best batch size?</h2>
          <img src="images/best-batch.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>A larger batch size tends to lead to a better end result, however it can significantly increase training time</p>
          <p>If you're limited for training time avoid a very large batch size can be beneficial</p>
          <p>Larger batch sizes tends to mean entropy doesn't reduce as much</p>
          <p></p>
          <h2>Discount Factor</h2>
          <img src="images/discount-factor.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>Future Discount Factor = (df)n when n is the number of steps in the future. DF of 0.95-0.99 is worth exploring</p>
          <p>If reward=1 at each step and df was 0.95 then current step = 1, next step = 0.95, one after that = 0.9025 etc.</p>
          <p>Very large discount factors mean the future rewards being considered outweigh the impact of immediate decisions - this typically results in slow lap times</p>
          <p>Very small discount factors means immediate rewards outweigh future rewards significantly - this typically results in never completing laps (e.g. the reward of going into a corner really fast is prioritised, as going off the track in a few steps time as it can't steer round the corner isn't factored into the calculation)</p>
          <h2>Discount Factor - what's the best discount factor?</h2>
          <img src="images/best-df.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>Discount factor is a balancing act.  Too low and the model will be too aggressive and either not complete laps or complete sub-optimal laps.  to high and the model won't be aggressive enough and may be too cautious.</p>
          <p>There is no one size fits all and it's related to how aggressive your action space and reward function are too so experimentation is needed to reach the optimum for your given configuration.</p>
          <p></p>
          <h2>Learning Rate</h2>
          <img src="images/learning-rate.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>The model learns from it's training episodes, but learning rate controls by how much to avoid a good model becoming bad by wildly swinging from one extreme to another</p>
          <p>The algorithm uses 'gradient descent' - with the optimal answer being the bottom</p>
          <p>Too high a learning rate may result in being unable to complete a lap</p>
          <p>Too low a learning rate may result in never reaching the optimal result</p>
          <p>0.0001 - 0.00005 is probably a good starting range - you can always clone and alter later (typically lowering)</p>
          <p></p>
          <h2>Entropy</h2>
          <img src="images/entropy.png" style={{ maxWidth: "100%", height: "auto" }}></img>
          <p>Entropy is a measure of how certain the model is of the actions it's taking</p>
          <p>High entropy means the model is uncertain, low entropy means the model is certain</p>
          <p>Entropy is a balancing act - too high and the model will be too uncertain and not learn, too low and the model will be too certain and not learn</p>
          <p>Entropy is impacted by a number of hyperparameters, including batch size and learning rate</p>
          <p>the default entropy is a good place to start before experimenting</p>
      </TextContent>
      }
    />
  );
}
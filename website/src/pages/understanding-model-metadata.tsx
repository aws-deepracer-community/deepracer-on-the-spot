import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function UnderstandingModelMetadata() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Understanding Model Metadata</h1>
          <p></p>
          <img src="images/model-metadata-1.png" style={{ maxWidth: "100%", height: "auto" }}></img> <img src="images/model-metadata-2.png" style={{ maxWidth: "100%", height: "auto", marginLeft: "10px" }}></img>
          <h2>Action Space</h2>
          <p>the action space defines the combination of speed and steering angles the car can take.</p>
          <p>The required configuration of the file depends on whether the 'action_space_type' is 'discrete' (left example above) or 'continuous' (right hand example above).</p>
          <p>For discrete action space, the configuration file requires a list of 'steering_angles' and 'speeds', you can have a large array of actions (apparently someone tried 1,000!).</p>
          <p>For continuous action space, the configuration file requires a 'steering_angle' and 'speed' range.</p>
          <p>A visualisation of discrete and continuous action spaces: -</p>
          <img src="images/action-space-examples.png" style={{ maxWidth: "70%", height: "auto" }}></img>
          <h2>Sensor</h2>
          <p>The sensor field defines the sensors available to the car.</p>
          <p>For time trials the 'FRONT_FACING_CAMERA' is sufficient.  For head to head racing 'STEREO_CAMERAS' to perceive depth and 'LIDAR' to detect objects may be useful</p>
          <p>Note - for physical racing you can only use a model on the car that has matching sensors - check with your organiser of a physical race what to use</p>
          <h2>Neural Network</h2>
          <p>Controls the number of layers in the neural network</p>
          <p>'DEEP_CONVOLUTIONAL_NETWORK_SHALLOW' and 'DEEP_CONVOLUTIONAL_NETWORK_DEEP' are supported values</p>
          <p>Recommend to leave as default</p>
          <h2>Version</h2>
          <p>Defines the version of the DeepRacer physics engine used.</p>
          <p>Recommend to leave as default</p>
          <h2>Training Algorithm</h2>
          <p>Defines the training algorithm used.</p>
          <p>'clipped_ppo' and 'sac' are the supported algorithms</p>
          <p>SAC only supports a single Robomaker 'worker'</p>
          <p>Recommend to use 'clipped_ppo'</p>
       </TextContent>
      }
    />
  );
}
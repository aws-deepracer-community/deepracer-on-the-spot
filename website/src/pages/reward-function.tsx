import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function RewardFunctionPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Reward Function</h1>
          <p></p>
          <p>Reward function definition</p>
          <iframe src="reward_function.py.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
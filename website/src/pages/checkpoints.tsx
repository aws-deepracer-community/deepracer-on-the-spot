import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function CheckpointsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Checkpoints</h1>
          <p></p>
          <p>Summary of the best and last checkpoints</p>
          <iframe src="/deepracer_checkpoints.json" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
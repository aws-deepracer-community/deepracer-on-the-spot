import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingMetricsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Metrics</h1>
          <p></p>
          <p>Summary of each episode</p>
          <iframe src="TrainingMetrics.json" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
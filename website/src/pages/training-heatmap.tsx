import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingHeatmapPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Reward Heatmap</h1>
          <p></p>
          <p>Reward heatmap showing where on track your model is collecting the most reward over time</p>
          <iframe src="/Heatmap.html" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
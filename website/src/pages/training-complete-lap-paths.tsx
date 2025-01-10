import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingCompleteLapPathsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Complete Lap Paths</h1>
          <p></p>
          <p>Shows routes of complete lap paths for both the fastest and most rewarded laps.</p>
          <iframe src="Path_for_complete_laps.html" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
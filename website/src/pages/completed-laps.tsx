import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function CompletedLapsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Completed Laps</h1>
          <p></p>
          <p>Last step from Robomaker output for complete laps only</p>
          <iframe src="completedlaps.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
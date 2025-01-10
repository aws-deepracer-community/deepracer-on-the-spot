import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingProgressPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Progress</h1>
          <p></p>
          <p>Training progress providing summary graphs</p>
          <iframe src="/Training_progress.html" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingQuintilesPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Quintiles</h1>
          <p></p>
          <p>Training quintiles showing the training split into fifths to help you understand if training is improving over time</p>
          <iframe src="/Quintiles.html" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
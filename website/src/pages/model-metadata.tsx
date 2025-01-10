import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function ModelMetadataPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Model Metadata</h1>
          <p></p>
          <p>Model metadata used to configure some model details including the action space (speed and steering angles)</p>
          <iframe src="model_metadata.json" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
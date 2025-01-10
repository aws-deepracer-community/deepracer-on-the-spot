import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function SagemakerLogsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>SageMaker Logs</h1>
          <p></p>
          <p>Last 1000 lines of SageMaker logs</p>
          <iframe src="sagemaker.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function GPUStatusPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>GPU Status</h1>
          <p></p>
          <p>Output of nvidia-smi command to get status of GPU and processess running on GPU</p>
          <iframe src="nvidia-smi.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
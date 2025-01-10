import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function InstanceStoragePage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Storage Capacity</h1>
          <p></p>
          <p>Output of df command to give a summary of storage usage</p>
          <iframe src="/df.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
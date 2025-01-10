import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function SummaryLogsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Summary Logs</h1>
          <p></p>
          <p>Short summary of key logs all in one place</p>
          <iframe src="/output.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
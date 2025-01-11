import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function RobomakerLogsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>RoboMaker Logs</h1>
          <p></p>
          <p>Last 1000 lines of Robomaker logs (Main worker only)</p>
          <iframe src="/robomaker.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function DockerLogsPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Docker Logs</h1>
          <p></p>
          <p>Shows running and stopped docker containers. docker ps -a (command output): -</p>
          <iframe src="dockerstatus.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function SystemEnvPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>System.env</h1>
          <p></p>
          <p>Contents of system.env file used to define system configuration for the training environment</p>
          <iframe src="/system.env.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
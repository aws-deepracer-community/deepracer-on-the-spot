import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function RunEnvPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Run.env</h1>
          <p></p>
          <p>Contents of Run.env file used to define storage of models and training environment configuration</p>
          <iframe src="run.env.txt" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingDataTablesPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Data Tables</h1>
          <p></p>
          <p>Data tables showing information about various elements of your training.</p>
          <iframe src="Data_tables.html" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
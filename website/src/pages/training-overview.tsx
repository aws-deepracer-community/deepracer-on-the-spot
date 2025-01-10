import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function TrainingOverviewPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Training Overview</h1>
          <p></p>
          <p>Training overview providing summary graphs and tables of training and evaluation episodes</p>
          <iframe src="Training_and_Evaluation_Overview.html" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
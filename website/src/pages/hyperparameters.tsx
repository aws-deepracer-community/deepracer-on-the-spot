import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function HyperparametersPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Hyperparameters</h1>
          <p></p>
          <p>Hyperparameters used to define the training</p>
          <iframe src="/hyperparameters.json" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
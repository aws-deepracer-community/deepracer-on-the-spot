import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function CameraPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Camera View</h1>
          <p></p>
          <p>Live Camera Feed used for inference. This camera is always enabled as it's needed by the model</p>
          <iframe src="/?robo=all&camera=camera&quality=75&width=480" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}
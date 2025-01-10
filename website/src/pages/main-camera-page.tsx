import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function MainCameraPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Main Camera View</h1>
          <p></p>
          <p>Live main camera feed from behind the car.  Note - uses additional CPU so disable or increase instance size if it creates performance issues.</p>
          <p>Requires <i>DR_CAMERA_MAIN_ENABLE=True</i> to enable camera</p>
          <iframe src="http://www.example.com" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}


import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function KVSStreamPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>KVS Stream View</h1>
          <p></p>
          <p>KVS Stream from behind the car.  Note - uses additional CPU so disable or increase instance size if it creates performance issues.</p>
          <p>Requires <i>DR_CAMERA_KVS_ENABLE=True</i> to enable camera and <i>DR_ENABLE_EXTRA_KVS_OVERLAY=True</i> to include action space overlay</p>
          <iframe src="http://www.example.com" style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
        </TextContent>
      }
    />
  );
}


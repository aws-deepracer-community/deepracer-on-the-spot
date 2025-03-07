import { TextContent, Button, Flashbar, FlashbarProps } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";
import { useState } from "react";

const public_ip = "update_to_publicip";
const s3_virtual_url = "update_to_s3_virtual_url";
const s3_physical_url = "update_to_s3_physical_url";

export default function SaveModelPage() {
  const [loadingSaveModelEnd, setLoadingSaveModelEnd] = useState(false);
  const [loadingSavePhysicalModelEnd, setLoadingSavePhysicalModelEnd] = useState(false);
  const [loadingSaveConsoleModelEnd, setLoadingSaveConsoleModelEnd] = useState(false);
  const [flashMessages, setFlashMessages] = useState<ReadonlyArray<FlashbarProps.MessageDefinition>>([]);

  const handleSaveVirtual = async () => {
    setLoadingSaveModelEnd(true);
    try {
      const response = await fetch(`http://${public_ip}:5000/api/run-command`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: 'cd ~/deepracer-for-cloud/ && ./save_virtual_model.sh' }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFlashMessages([{ type: 'success', content: 'Virtual model successfully saved.', dismissible: true }]);
    } catch (error) {
      setFlashMessages([{ type: 'error', content: 'Failed to save virtual model.', dismissible: true }]);
    } finally {
      setLoadingSaveModelEnd(false);
    }
  };

  const handleSavePhysical = async () => {
    setLoadingSavePhysicalModelEnd(true);
    try {
      const response = await fetch(`http://${public_ip}:5000/api/run-command`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: 'cd ~/deepracer-for-cloud/ && ./save_physical_model.sh' }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFlashMessages([{ type: 'success', content: 'Physical model successfully saved.', dismissible: true }]);
    } catch (error) {
      setFlashMessages([{ type: 'error', content: 'Failed to save physical model.', dismissible: true }]);
    } finally {
      setLoadingSavePhysicalModelEnd(false);
    }
  };

  const handleSaveConsole = async () => {
    setLoadingSaveConsoleModelEnd(true);
    try {
      const response = await fetch(`http://${public_ip}:5000/api/run-command`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: 'cd ~/deepracer-for-cloud/ && ./save_console_model.sh' }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFlashMessages([{ type: 'success', content: 'Model successfully imported to the DeepRacer console.', dismissible: true }]);
    } catch (error) {
      setFlashMessages([{ type: 'error', content: 'Failed to import model to console.', dismissible: true }]);
    } finally {
      setLoadingSaveConsoleModelEnd(false);
    }
  };

  return (
    <BaseAppLayout
      content={
        <TextContent>
          <Flashbar items={flashMessages} />
          <h1>Options to save your virtual or physical models</h1>
          <h2>Save Virtual Model to S3</h2>
          <p>DeepRacer on the Spot allows you to save checkpoints of your model in case you want to use it in the future, e.g. to clone from that point in time if your model gets worse later, or to race with that specific checkpoint.</p>
          <p>You can set this to automatically happen on a schedule by setting <i>DR_REGULAR_UPLOAD=</i> and the number of minutes you want to pass between each checkpoint save, e.g. <i>DR_REGULAR_UPLOAD=60</i> will save a checkpoint every 60 minutes.</p>
          <p>However if you've forgot to set this variable or you simply want to save an ad-hoc checkpoint of your model you can use this button: -</p>
          <Button onClick={handleSaveVirtual} loading={loadingSaveModelEnd}>Save virtual model to S3</Button>
          <p>Upon completion your model will be saved to your <a href={`${s3_virtual_url}`} target="_blank"> S3 Bucket</a>, you can use this location to manual import into the DeepRacer Console, or by cloning to continue your training by ensuring the <i>model/.coach_checkpoint</i> and <i>model/deepracer_checkpoints.json</i> reference the checkpoint you want to use.</p>
          <p></p>
          <h2>Save Physical Model to S3</h2>
          <p>DeepRacer on the Spot allows you to save checkpoints of your physical model to take part in physical racing.</p>
          <p>You can set this to automatically happen on a schedule by setting <i>DR_REGULAR_PHYSICAL_MODEL_UPLOAD=</i> and the number of minutes you want to pass between each physical model save, e.g. <i>DR_REGULAR_PHYSICAL_MODEL_UPLOAD=60</i> will save a physical model every 60 minutes.</p>
          <p>However if you've forgot to set this variable or you simply want to save an ad-hoc checkpoint of your model you can use this button: -</p>
          <Button onClick={handleSavePhysical} loading={loadingSavePhysicalModelEnd}>Save physical model to S3</Button>
          <p>Upon completion your model will be saved to your <a href={`${s3_physical_url}`} target="_blank"> S3 Bucket</a> in the name format <i>modelname</i>-chk<i>number</i>.tar.gz</p>
          <p></p>
          <h2>Import Model to DeepRacer Console</h2>
          <p>DeepRacer on the Spot allows you to import your model into the DeepRacer console to take part in virtual races against other people.</p>
          <p>This is set to automatically happen at the end of training using the default setting <i>DR_IMPORT_MODEL_ON_COMPLETION=True</i> in run.env.</p>
          <p>However if you'd like to import an ad-hoc checkpoint of your model so yuo can see how it's progressing you can use this button: -</p>
          <Button onClick={handleSaveConsole} loading={loadingSaveConsoleModelEnd}>Import model to DeepRacer Console</Button>
          <p>Once imported your model will appear in the <a href={'https://us-east-1.console.aws.amazon.com/deepracer/home?region=us-east-1#models'} target="_blank"> DeepRacer Console</a></p>
          <p></p>
        </TextContent>
      }
    />
  );
}

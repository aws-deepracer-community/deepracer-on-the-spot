import { TextContent, Button } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";
import { useState } from "react";

export default function UpdateTrainingPage() {
  const [loading, setLoading] = useState(false);

  const handleEndTraining = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/run-command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: 'cd ~/deepracer-for-cloud/ && ./update_stack.sh 2' }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Training ended successfully');
    } catch (error) {
      alert('Failed to end training: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Update your training by running commands</h1>
          <h2>End Training</h2>
          <p>You may want to end your training earlier than you previously anticipated.  In order to do this you need to delete the CloudFormation stack that deployed your standard or spot instance.</p>
          <Button onClick={handleEndTraining} loading={loading}>End Training</Button>
        </TextContent>
      }
    />
  );
}

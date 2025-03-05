import { TextContent, Button, Input, Flashbar, FlashbarProps } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";
import { useState } from "react";

export default function UpdateTrainingPage() {
  const [loading, setLoading] = useState(false);
  const [extendTime, setExtendTime] = useState('');
  const [error, setError] = useState('');
  const [flashMessages, setFlashMessages] = useState<ReadonlyArray<FlashbarProps.MessageDefinition>>([]);

  const handleEndTraining = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://13.48.78.12/api/run-command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: 'cd ~/deepracer-for-cloud/ && ./update_stack.sh 2' }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFlashMessages([{ type: 'success', content: 'Training ended successfully', dismissible: true }]);
    } catch (error) {
      setFlashMessages([{ type: 'error', content: 'Failed to end training', dismissible: true }]);
    } finally {
      setLoading(false);
    }
  };

  const handleExtendTraining = async () => {
    if (!/^\d+$/.test(extendTime) || parseInt(extendTime) < 0 || parseInt(extendTime) > 1440) {
      setError('Please enter a valid number between 0 and 1440');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://13.48.78.12/api/run-command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: `cd ~/deepracer-for-cloud/ && ./update_stack.sh ${extendTime}` }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFlashMessages([{ type: 'success', content: 'Training extended successfully', dismissible: true }]);
    } catch (error) {
      setFlashMessages([{ type: 'error', content: 'Failed to extend training', dismissible: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseAppLayout
      content={
        <TextContent>
          <Flashbar items={flashMessages} />
          <h1>Update your training finish time</h1>
          <h2>End Training</h2>
          <p>You may want to end your training earlier than you previously anticipated.  In order to do this you need to delete the CloudFormation stack that deployed your standard or spot instance.</p>
          <Button onClick={handleEndTraining} loading={loading}>End Training</Button>
          <h2>Extend Training</h2>
          <p>You may want to extend your training to finish later than original planned.  In order to do this we update the CloudFormation stack that deployed your standard or spot instance with a later end time.</p>
          <p>Note - please enter the time in minutes to extend training by, this cannot be the same number of minutes you originally used when deploying the stack or previously extending the training time.</p>
          <Input value={extendTime} onChange={e => setExtendTime(e.detail.value)} placeholder="Enter time to extend" />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p></p>
          <Button onClick={handleExtendTraining} loading={loading}>Extend Training</Button>
        </TextContent>
      }
    />
  );
}

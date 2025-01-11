import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";

export default function GenAIPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Improve Your Racing with Generative AI</h1>
          <p></p>
          <p>Use Generative AI to improve your models and learn about AWS services at the same time!</p>
          <p></p>
          <h2>Struggling for ideas to create a model?</h2>
          <p>Try the <a href="https://partyrock.aws/u/markjross2/Rdjf1Rg9I/DeepRacer-Model-Builder" target="_blank">DeepRacer Model Builder</a> PartyRock application.  Using plain English for your hyperparameter, action space and reward function ideas it will help you create your next model.</p>
          <h2>Want to improve your existing model?</h2>  
          <p>Try the <a href="https://partyrock.aws/u/markjross2/qFmDwPD8x/AWS-DeepRacer-Optimiser" target="_blank">DeepRacer Model Optimiser</a> PartyRock application.  Paste in your existing hyperparameters, action space and reward function and it will give you ideas to help you to improve on your existing model.</p>
          <h2>Preparing for physical racing?</h2>
          <p>Use Generative AI to learn whether your model is well generalised using a <a href="https://github.com/aws-deepracer-community/deepracer-genai-workshop" target="_blank">Deepracer GenAI Workshop</a></p>
        </TextContent>
      }
    />
  );
}

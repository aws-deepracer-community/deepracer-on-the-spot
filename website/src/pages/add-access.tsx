import { TextContent } from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";
import { Link } from "react-router-dom";

export default function AddAccessPage() {
  return (
    <BaseAppLayout
      content={
        <TextContent>
          <h1>Explaining the Add Access stack</h1>
          <h2>Architecture Overview</h2>
          <img src="/images/add-access-stack.png"></img>
          <p></p>
          <p>The <Link to="/understanding_dots/base_resources">base resources stack</Link> deploys a Security Group and updates a Network Access Control List (NACL), and it allows access from the IP address you specify when you deploy that stack.
            However, you may require access from more that one location, which means you need to add additional IP addresses to the Security Group and NACLs.  The add access stack allows you to do this. The stack must be ran against each base stack you create to receive notifications, i.e. once per region.</p>
          <p>The add access stack updates the following resources: -</p>
          <li>Stateless firewall rules called <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html" target="_blank"> NACLs</a>, by adding in the IP address you specify when running the add access script.  This rule will allow the traffic from your device to this website to monitor your training.</li>
          <li>Updating stateful firewall rules called a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html" target="_blank"> Security Group</a>, containing the IP address you specify when running the add access script.   This rule will allow the traffic from your device to this website to monitor your training.</li>
     </TextContent>
      }
    />
  );
}

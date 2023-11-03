import { DefaultHeading } from "@/components/interface/default-heading";
import { ListAgents } from "./components/list-agents";

export default function Agents() {
  return (
    <>
      <DefaultHeading tag="h1" className="font-valorant">
        Agentes
      </DefaultHeading>
      <ListAgents />
    </>
  );
}

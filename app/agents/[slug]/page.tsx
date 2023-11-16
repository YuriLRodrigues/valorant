import { AgentsListProps } from "@/types/agents-list-types";
import AgentDetailsContainer from "./components/agent-details/agent-details-container";
import { FetchData } from "@/utils/fetch-data";
import { Container } from "@/components/interface/container";
import { findAgents } from "@/lib/actions";

export async function generateStaticParams() {
  const agents = await findAgents();
  const agentsList = agents.filter((agent) => agent.isPlayableCharacter);

  return agentsList.map((agent) => ({
    slug: agent.uuid,
  }));
}

const Agent = ({ params }: { params: { slug: string } }) => {
  return (
    <Container tag="main">
      <AgentDetailsContainer uuid={params.slug} />
    </Container>
  );
};

export default Agent;

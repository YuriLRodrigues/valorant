import { AgentsListProps } from '@/types/agents-list-types';
import AgentDetailsContainer from "./components/agent-details/agent-details-container";
import { FetchData } from '@/utils/fetch-data';

export async function generateStaticParams() {
  const agents: AgentsListProps = await FetchData({
    url: "https://valorant-api.com/v1/agents?language=pt-BR",
  });

  const agentsList = agents.data.filter((agent) => agent.isPlayableCharacter);

  return agentsList.map((post) => ({
    slug: post.uuid,
  }))
}

const Agent = ({ params }: { params: { slug: string } }) => {
  return <AgentDetailsContainer uuid={params.slug} />;
};

export default Agent;

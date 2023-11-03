import AgentDetailsContainer from "./components/agent-details/agent-details-container";

const Agent = ({ params }: { params: { slug: string } }) => {
  return <AgentDetailsContainer uuid={params.slug} />;
};

export default Agent;

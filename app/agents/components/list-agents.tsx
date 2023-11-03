import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { BlurImage } from "@/components/ui/blur-image";
import { AgentsListProps } from "@/types/agents-list-types";
import { FetchData } from "@/utils/fetch-data";

export const ListAgents = async () => {
  const agents: AgentsListProps = await FetchData({
    url: "https://valorant-api.com/v1/agents?language=pt-BR",
  });

  return (
    <AutomaticGrid>
      {agents.data.length > 0 &&
        agents.data.map(
          (agent) =>
            agent.isPlayableCharacter && (
              <Card.Root
                uuid={agent.uuid}
                redirect="agents"
                key={agent.uuid}
                gradient={agent.backgroundGradientColors}
              >
                <BlurImage
                  src={agent.background}
                  alt={agent.displayName + "-Agent-BG"}
                />
                <BlurImage
                  className="absolute"
                  src={agent.fullPortraitV2}
                  alt={agent.displayName + "-Agent"}
                />
                <Card.Title gradient={agent.backgroundGradientColors}>
                  {agent.displayName}
                </Card.Title>
              </Card.Root>
            )
        )}
    </AutomaticGrid>
  );
};

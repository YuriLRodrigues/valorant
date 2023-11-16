import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";

import { findAgents } from "@/lib/actions";
import Image from "next/image";

export const ListAgents = async () => {
  const agents = await findAgents();

  return (
    <AutomaticGrid>
      {agents.length > 0 &&
        agents.map(
          (agent) =>
            agent.isPlayableCharacter && (
              <Card.Root
                uuid={agent.uuid}
                redirect="agents"
                key={agent.uuid}
                gradient={agent.backgroundGradientColors}
                className="max-h-[380px]"
              >
                <Image
                  src={agent.background}
                  alt={agent.displayName + "-Agent-BG"}
                  width={318}
                  height={465}
                  sizes="(max-width: 768px) 100vw, 318px"
                  className="max-w-3xl"
                />
                <Image
                  className="absolute w-full"
                  src={agent.fullPortraitV2}
                  alt={agent.displayName + "-Agent"}
                  width={318}
                  height={465}
                  sizes="(max-width: 768px) 100vw, 318px"
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

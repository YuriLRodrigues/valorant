import { FetchData } from "@/utils/fetch-data";
import { AgentDetails } from "./index";
import { AgentListProps } from "@/types/agent-list-types";
import { BlurImage } from "@/components/ui/blur-image";
import { FlexDiv } from "@/components/ui/flex-div";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Heading } from "@/components/interface/heading";

type AgentUuidProps = {
  uuid: string;
};

const AgentDetailsContainer = async ({ uuid }: AgentUuidProps) => {
  const agentDetails: AgentListProps = await FetchData({
    url: `https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`,
  });

  return (
    <AgentDetails.Root>
      <Heading position="centered" tag="h1" size="lg" className="font-valorant">
        {agentDetails.data.displayName}
      </Heading>
      <FlexDiv
        style={{
          background: `linear-gradient(#${agentDetails.data.backgroundGradientColors[0]}, #${agentDetails.data.backgroundGradientColors[1]}, #${agentDetails.data.backgroundGradientColors[2]})`,
        }}
        className="md:rounded-md rounded my-6 justify-between"
      >
        <BlurImage
          src={agentDetails.data.background}
          alt={agentDetails.data.displayName + "-AgentCardImage"}
          className="max-w-[60%]"
        />
        <BlurImage
          src={agentDetails.data.fullPortraitV2}
          alt={agentDetails.data.displayName + "-AgentImage"}
          className="max-w-[100%] absolute"
        />
      </FlexDiv>
      <AgentDetails.Content>
        <AgentDetails.Title>Sobre:</AgentDetails.Title>
        <AgentDetails.Description>
          {agentDetails.data.description}
        </AgentDetails.Description>
        <AgentDetails.Title>Habilidades:</AgentDetails.Title>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ícone</TableHead>
              <TableHead>Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agentDetails.data.abilities.map((ablitie) => (
              <TableRow key={ablitie.displayName}>
                <TableCell className="flex flex-col items-center justify-center">
                  {ablitie.displayIcon && (
                    <Image
                      src={ablitie.displayIcon}
                      alt={ablitie.displayName + "-IconImg"}
                      className="dark:bg-transparent bg-black rounded p-2"
                      width={50}
                      height={50}
                    />
                  )}
                  <AgentDetails.Description>
                    {ablitie.displayName}
                  </AgentDetails.Description>
                </TableCell>
                <TableCell>{ablitie.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AgentDetails.Content>
    </AgentDetails.Root>
  );
};

export default AgentDetailsContainer;

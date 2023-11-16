import { AgentDetails } from "./index";
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
import { findAgentsById } from "@/lib/actions";

type AgentUuidProps = {
  uuid: string;
};

const AgentDetailsContainer = async ({ uuid }: AgentUuidProps) => {
  const agentDetails = await findAgentsById(uuid);

  return (
    <AgentDetails.Root>
      <Heading position="centered" tag="h1" size="lg" className="font-valorant">
        {agentDetails.displayName}
      </Heading>
      <FlexDiv
        style={{
          background: `linear-gradient(#${agentDetails.backgroundGradientColors[0]}, #${agentDetails.backgroundGradientColors[1]}, #${agentDetails.backgroundGradientColors[2]})`,
        }}
        className="md:rounded-md rounded my-6 justify-between"
      >
        <BlurImage
          src={agentDetails.background}
          alt={agentDetails.displayName + "-AgentCardImage"}
          className="max-w-[60%]"
        />
        <BlurImage
          src={agentDetails.fullPortraitV2}
          alt={agentDetails.displayName + "-AgentImage"}
          className="max-w-[100%] absolute"
        />
      </FlexDiv>
      <AgentDetails.Content>
        <AgentDetails.Title>Sobre:</AgentDetails.Title>
        <AgentDetails.Description>
          {agentDetails.description}
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
            {agentDetails.abilities.map((ablitie) => (
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

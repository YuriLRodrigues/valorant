import { FlexDiv } from "@/components/ui/flex-div";
import { Agents } from "./index";
import { BlurImage } from "@/components/ui/blur-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AgentsContainer = () => {
  return (
    <Agents.Root>
      <FlexDiv col className="px-4">
        <Agents.Heading>Seus agentes</Agents.Heading>
        <Agents.Title>A criatvidade é sua melhor arma</Agents.Title>
        <Agents.Description>
          Mais do que armas e munição, VALORANT inclui agentes com habilidades
          adaptativas, rápidas e letais, que cram oportunidades para você exibr
          sua mecânica de tiro. Cada Agente é único, assim como os momentos de
          destaque de cada partida.
        </Agents.Description>
      </FlexDiv>
      <FlexDiv col className="items-center justify-center">
        <Button className="uppercase m-auto absolute z-30 bg-white text-red-600 text-lg px-4 py-2">
          <Link href={"/agents"}>Ver todos os agentes</Link>
        </Button>
        <BlurImage
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6174cd1a-f614-4c1e-9d75-4997060b6156/ddrsqbl-eb74072b-24d1-4fcf-8981-8526538e676b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNzRjZDFhLWY2MTQtNGMxZS05ZDc1LTQ5OTcwNjBiNjE1NlwvZGRyc3FibC1lYjc0MDcyYi0yNGQxLTRmY2YtODk4MS04NTI2NTM4ZTY3NmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XE0tgzITQOCQo38R05ZFj_RGaVYSEmx5hXh2_l4BJmY"
          alt="Valorant Agents"
          className="max-w-lg"
        />
      </FlexDiv>
    </Agents.Root>
  );
};

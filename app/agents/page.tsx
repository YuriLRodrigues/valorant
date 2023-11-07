import { Heading } from "@/components/interface/heading";
import { ListAgents } from "./components/list-agents";
import { Suspense } from "react";
import { Container } from "@/components/interface/container";

export default function Agents() {
  return (
    <Container tag="main">
      <Heading tag="h1" position="centered" size="lg" className="font-valorant">
        Agentes
      </Heading>
      <Suspense>
        <ListAgents />
      </Suspense>
    </Container>
  );
}

import { Heading } from "@/components/interface/heading";
import { ListMaps } from "./components/list-maps";
import { Suspense } from "react";
import { Container } from "@/components/interface/container";

export default function Maps() {
  return (
    <Container>
      <Heading tag="h1" position="centered" size="lg" className="font-valorant">
        Mapas
      </Heading>
      <Suspense>
        <ListMaps />
      </Suspense>
    </Container>
  );
}

import { Container } from "@/components/interface/container";
import { Heading } from "@/components/interface/heading";
import { GunsList } from "./components/guns-list";

export default function Guns() {
  return (
    <Container tag="main">
      <Heading
        position="centered"
        size="lg"
        className="font-valorant tracking-widest"
      >
        Armas
      </Heading>
      <GunsList />
    </Container>
  );
}

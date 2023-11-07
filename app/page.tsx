import { Footer } from "@/components/interface/footer/index";
import { IntroductionContainer } from "./components/introduction/introduction-container";
import { NewsContainer } from "./components/news/news-container";
import { WavContainer } from "./components/we-are-valorant/wav-container";
import { AgentsContainer } from "./components/agents/agents-container";
import { MapsContainer } from "./components/maps/maps-container";
import { Container } from "@/components/interface/container";

export default function HomeIntroduction() {
  return (
    <Container tag="main" className="p-0 m-0">
      <IntroductionContainer />
      <NewsContainer />
      <WavContainer />
      <AgentsContainer />
      <MapsContainer />
      <Footer />
    </Container>
  );
}

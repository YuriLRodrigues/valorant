import { Button } from "@/components/ui/button";
import { Introduction } from "./index";

export const IntroductionContainer = () => {
  return (
    <Introduction.Section>
      <Introduction.Gif />
      <Introduction.Div>
        <Introduction.Title>vAlorant</Introduction.Title>
        <Introduction.Description>
          Um jogo de tiro tático 5x5 com personagens originais
        </Introduction.Description>
        <Button>Jogar agora</Button>
      </Introduction.Div>
    </Introduction.Section>
  );
};

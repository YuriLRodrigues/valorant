import { Button } from "@/components/ui/button";
import { Wav } from "./index";
import { BlurImage } from "@/components/ui/blur-image";

export const WavContainer = () => {
  return (
    <>
      <hr className="w-11/12 mx-auto" />
      <Wav.Root>
        <Wav.Div>
          <Wav.Heading>Nós somos valorant</Wav.Heading>
          <Wav.Title>Desafie seus limtes</Wav.Title>
          <Wav.Description>
            Misture o seu estilo e experiência em um cenário global e
            competitivo. Você terá 13 rodadas para atacar e defender com
            disparos certeiros e habilidades táticas. Com apenas uma vida por
            rodada, você deve pensar mais rápido que o oponente se quiser
            sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além
            da Disputa da Spike e do Mata-Mata!
          </Wav.Description>
          <Button className="uppercase p-4 lg:mx-0 mx-auto">
            Conheça o jogo
          </Button>
        </Wav.Div>

        <Wav.Div className="sm:w-8/12 w-10/12 mx-auto">
          <video autoPlay muted loop className="aspect-video w-full">
            <source src="/chamber-haven-pistol.mp4" type="video/mp4" />
          </video>
          <Button className="px-5 py-1 absolute top-14 -left-8">Jogo</Button>
        </Wav.Div>
      </Wav.Root>
    </>
  );
};

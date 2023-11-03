import { FlexDiv } from "@/components/ui/flex-div";
import { Maps } from "./index";
import { BlurImage } from "@/components/ui/blur-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MapsContainer = () => {
  return (
    <>
      <hr className="w-11/12 mx-auto" />
      <Maps.Root>
        <FlexDiv col className="px-4">
          <Maps.Heading>Seus mapas</Maps.Heading>
          <Maps.Title>Batalhe ao redor do mundo</Maps.Title>
          <Maps.Description>
            Cada mapa serve como um palco para mostrar sua criatividade. Os
            mapas são feitos sob medida para estratégias de equipe, jogadas
            espetaculares e momentos eletrizantes. Faça as jogadas que todo
            mundo vai tentar imitar no futuro!
          </Maps.Description>
        </FlexDiv>
        <FlexDiv col className="items-center justify-center mt-5">
          <Button className="uppercase m-auto absolute z-30 text-lg px-4 py-2">
            <Link href={"/maps"}>Ver todos os mapas</Link>
          </Button>
          <BlurImage
            src="https://www.gamespot.com/a/uploads/scale_super/1746/17463818/4083149-6-1mediakit_lotus07.png"
            alt="Valorant Maps"
          />
        </FlexDiv>
      </Maps.Root>
    </>
  );
};

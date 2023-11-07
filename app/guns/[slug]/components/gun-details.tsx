import { FlexContainer } from "@/components/interface/flex-container";
import { Heading } from "@/components/interface/heading";
import { Text } from "@/components/interface/text";
import { GunDetails } from "@/types/gun-details-types";
import { FetchData } from "@/utils/fetch-data";
import Image from "next/image";
import { GunSkinsSlider } from "./gun-skins-slider";

type GunDetailsProps = {
  uuid: string;
};

export const GunDetailsContainer = async ({ uuid }: GunDetailsProps) => {
  const { data: gun }: GunDetails = await FetchData({
    url: `https://valorant-api.com/v1/weapons/${uuid}?language=pt-BR`,
  });
  console.log(gun.skins);

  return (
    <>
      <Heading position="centered" size="lg">
        {gun.displayName}
      </Heading>
      <FlexContainer
        flex="col"
        my="xl"
        gap="10"
        width="4xl"
        position="centered"
      >
        <Image
          src={gun.displayIcon}
          alt={`GunImg-${gun.displayName}`}
          width={500}
          height={500}
          className="object-cover object-center mx-auto"
        />
        <Text position="left">Categoria: {gun.category.split("::")[1]}</Text>

        <GunSkinsSlider skins={gun.skins} />
      </FlexContainer>
    </>
  );
};

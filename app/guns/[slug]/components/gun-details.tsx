import { FlexContainer } from "@/components/interface/flex-container";
import { Heading } from "@/components/interface/heading";
import { Text } from "@/components/interface/text";
import { GunDetails } from "@/types/gun-details-types";
import { FetchData } from "@/utils/fetch-data";
import Image from "next/image";
import { GunSkinsSlider } from "./gun-skins-slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GunListSkins } from "./gun-list-skins";

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
        width="5xl"
        position="centered"
      >
        <Image
          src={gun.displayIcon}
          alt={`GunImg-${gun.displayName}`}
          width={500}
          height={500}
          className="object-cover object-center mx-auto"
        />

        <Tabs defaultValue="list">
          <TabsList className="mb-10 grid w-52 grid-cols-2">
            <TabsTrigger value="list">Lista</TabsTrigger>
            <TabsTrigger value="slide">Slide</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <Heading>Skins</Heading>
            <GunListSkins skins={gun.skins} />
          </TabsContent>
          <TabsContent value="slide">
            <Heading size="md">Skins</Heading>
            <GunSkinsSlider skins={gun.skins} />
          </TabsContent>
        </Tabs>
      </FlexContainer>
    </>
  );
};

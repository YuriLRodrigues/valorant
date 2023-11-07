import { Container } from "@/components/interface/container";
import { Heading } from "@/components/interface/heading";
import { FlexContainer } from "@/components/interface/flex-container";
import { FetchData } from "@/utils/fetch-data";
import Image from "next/image";
import { ComponentProps } from "react";
import { Map } from "./index";
import { Text } from "@/components/interface/text";
import { GiIceBomb } from "react-icons/gi";

type MapProps = {
  data: {
    uuid: string;
    displayName: string;
    narrativeDescription: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    splash: string;
    assetPath: string;
    mapUrl: string;
  };
};

type MapContainerProps = ComponentProps<"div"> & {
  mapId: string;
};

export const MapContainer = async ({ mapId }: MapContainerProps) => {
  const { data: mapResume }: MapProps = await FetchData({
    url: `https://valorant-api.com/v1/maps/${mapId}?language=pt-BR`,
  });

  return (
    <Container tag="main">
      <Heading tag="h1" position="centered" size="lg">
        {mapResume.displayName}
      </Heading>
      <FlexContainer
        variant="centered-all"
        position="centered"
        my="xl"
        width="5xl"
        flex="col"
      >
        <Image
          src={mapResume.splash}
          alt={mapResume.displayName}
          width={700}
          height={500}
          className="object-center object-cover aspect-video w-full rounded-lg"
        />
        <Map.Content className="mt-8">
          <Text>{mapResume.narrativeDescription}</Text>
          {mapResume.tacticalDescription && (
            <Text className="flex gap-2 items-center">
              <GiIceBomb /> Bombs: {mapResume.tacticalDescription}
            </Text>
          )}
        </Map.Content>
      </FlexContainer>
    </Container>
  );
};

import { Container } from "@/components/interface/container";
import { FetchData } from "@/utils/fetch-data";
import { ComponentProps } from "react";

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
  const { data: map }: MapProps = await FetchData({
    url: `https://valorant-api.com/v1/maps/${mapId}`,
  });

  return (
    <Container>
      <div>Teste</div>
    </Container>
  );
};

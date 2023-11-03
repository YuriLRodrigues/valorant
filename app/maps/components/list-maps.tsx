import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { DefaultHeading } from "@/components/interface/default-heading";

import { BlurImage } from "@/components/ui/blur-image";
import { MapsListProps } from "@/types/maps-list-types";
import { FetchData } from "@/utils/fetch-data";

export const ListMaps = async () => {
  const maps: MapsListProps = await FetchData({
    url: "https://valorant-api.com/v1/maps?language=pt-BR",
  });

  return (
    <>
      <DefaultHeading tag="h1">Mapas</DefaultHeading>
      <AutomaticGrid className="grid-cols-auto-fit-400 lg:grid-cols-auto-fit-400 xl:grid-cols-auto-fit-400 sm:grid-cols-auto-fit-400">
        {maps.data.length > 0 &&
          maps.data.map((map) => (
            <Card.Root uuid={map.uuid} redirect="maps" key={map.uuid}>
              <BlurImage
                src={map.splash ? map.splash : ""}
                alt={map.displayName + "-Map-BG"}
              />
              <Card.Title>{map.displayName}</Card.Title>
            </Card.Root>
          ))}
      </AutomaticGrid>
    </>
  );
};

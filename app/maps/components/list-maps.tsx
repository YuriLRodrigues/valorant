import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { BlurImage } from "@/components/ui/blur-image";
import { MapsListProps } from "@/types/maps-list-types";
import { FetchData } from "@/utils/fetch-data";

export const ListMaps = async () => {
  const maps: MapsListProps = await FetchData({
    url: "https://valorant-api.com/v1/maps?language=pt-BR",
  });

  return (
    <AutomaticGrid>
      {maps.data.length > 0 &&
        maps.data.map((map) => (
          <Card.Root uuid={map.uuid} redirect="maps" key={map.uuid}>
            <BlurImage
              src={map.splash ?? ""}
              alt={map.displayName + "-Map-BG"}
            />
            <Card.Title>{map.displayName}</Card.Title>
          </Card.Root>
        ))}
    </AutomaticGrid>
  );
};

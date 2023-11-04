import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { BlurImage } from "@/components/ui/blur-image";
import { MapsListProps } from "@/types/maps-list-types";
import { FetchData } from "@/utils/fetch-data";
import Image from "next/image";

export const ListMaps = async () => {
  const maps: MapsListProps = await FetchData({
    url: "https://valorant-api.com/v1/maps?language=pt-BR",
  });

  return (
    <AutomaticGrid>
      {maps.data.length > 0 &&
        maps.data.map((map) => (
          <Card.Root uuid={map.uuid} redirect="maps" key={map.uuid}>
            <Image
              src={map.splash}
              alt={map.displayName + "-Map-BG"}
              width={318}
              height={180}
              sizes="(max-width: 768px) 100vw, 318px"
              className="duration-300 hover:scale-125 object-cover object-center w-full"
            />
            <Card.Title>{map.displayName}</Card.Title>
          </Card.Root>
        ))}
    </AutomaticGrid>
  );
};

import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { findMaps } from "@/lib/actions";
import Image from "next/image";

export const ListMaps = async () => {
  const maps = await findMaps();

  return (
    <AutomaticGrid>
      {maps.length > 0 &&
        maps.map((map) => (
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

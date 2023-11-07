import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { CardTitle } from "@/components/interface/card/card-title";
import { GunsProps } from "@/types/guns-list-types";
import { FetchData } from "@/utils/fetch-data";
import Image from "next/image";

export const GunsList = async () => {
  const { data: guns }: GunsProps = await FetchData({
    url: "https://valorant-api.com/v1/weapons",
  });

  return (
    <AutomaticGrid>
      {guns.map((gun) => (
        <Card.Root
          key={gun.uuid}
          redirect="guns"
          uuid={gun.uuid}
          className="h-[200px] duration-300 shadow shadow-muted-8 border-2 border-muted-9 py-4 hover:bg-gradient-to-b from-red-600 via-red-800 to-red-950"
        >
          <CardTitle className="z-30">{gun.displayName}</CardTitle>
          <Image
            src={gun.displayIcon}
            alt={`GunImg-${gun.displayName}`}
            width={300}
            height={300}
            className="object-cover object-center max-w-[230px] p-2 hover:scale-110 duration-300"
          />
        </Card.Root>
      ))}
    </AutomaticGrid>
  );
};

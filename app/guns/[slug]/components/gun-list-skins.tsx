import { AutomaticGrid } from "@/components/interface/automatic-grid";
import { Card } from "@/components/interface/card";
import { Heading } from "@/components/interface/heading";
import { GunDetailsSkins } from "@/types/gun-details-types";
import Image from "next/image";

type GunSkinSlideProps = {
  skins: Array<GunDetailsSkins>;
};

export const GunListSkins = ({ skins }: GunSkinSlideProps) => {
  return (
    <AutomaticGrid>
      {skins.map((skin) =>
        skin.chromas.map((sk) => {
          if (!sk.displayIcon || !sk.displayName || sk.displayName === "Frenzy")
            return;
          return (
            <Card.Root
              key={sk.uuid}
              className="hover:bg-red-700 border-2 border-muted-11 duration-300 hover:border-muted-12 p-6"
            >
              <Image
                src={sk.displayIcon ?? ""}
                alt={sk.displayName}
                width={700}
                height={500}
                className="object-center object-cover aspect-auto max-w-[250px] rounded-lg hover:scale-110 duration-300"
              />
              <Card.Title className="text-lg px-2">{sk.displayName}</Card.Title>
            </Card.Root>
          );
        })
      )}
    </AutomaticGrid>
  );
};

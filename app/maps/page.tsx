import { DefaultHeading } from "@/components/interface/default-heading";
import { ListMaps } from "./components/list-maps";
import { Suspense } from 'react';

export default function Maps() {
  return (
    <>
      <DefaultHeading tag="h1" className="font-valorant">
        Mapas
      </DefaultHeading>
      <Suspense>
        <ListMaps />
      </Suspense>
    </>
  );
}

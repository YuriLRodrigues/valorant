import { DefaultHeading } from "@/components/interface/default-heading";
import { ListMaps } from "./components/list-maps";

export default function Maps() {
  return (
    <>
      <DefaultHeading tag="h1" className="font-valorant">
        Mapas
      </DefaultHeading>
      <ListMaps />;
    </>
  );
}

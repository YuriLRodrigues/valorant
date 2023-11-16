import { FetchData } from "@/utils/fetch-data";
import { MapContainer } from "./components/map-container";
import { MapsListProps } from "@/types/maps-list-types";
import { findMaps } from "@/lib/actions";

export async function generateStaticParams() {
  const maps = await findMaps();

  return maps.map((post) => ({
    slug: post.uuid,
  }));
}

export default function Map({ params }: { params: { slug: string } }) {
  return <MapContainer mapId={params.slug} />;
}

import { FetchData } from "@/utils/fetch-data";
import { MapContainer } from "./components/map-container";
import { MapsListProps } from "@/types/maps-list-types";

export async function generateStaticParams() {
  const maps: MapsListProps = await FetchData({
    url: "https://valorant-api.com/v1/maps?language=pt-BR",
  });

  return maps.data.map((post) => ({
    slug: post.uuid,
  }));
}

export default function Map({ params }: { params: { slug: string } }) {
  return <MapContainer mapId={params.slug} />;
}

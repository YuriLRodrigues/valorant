import { MapContainer } from "./components/map-container";

export default function Map({ params }: { params: { slug: string } }) {
  return <MapContainer mapId={params.slug} />;
}

import { Container } from "@/components/interface/container";
import { GunDetailsContainer } from "./components/gun-details";
import { FetchData } from "@/utils/fetch-data";
import { GunsProps } from "@/types/guns-list-types";

export async function generateStaticParams() {
  const { data: guns }: GunsProps = await FetchData({
    url: "https://valorant-api.com/v1/weapons?language=pt-BR",
  });

  return guns.map((gun) => ({
    slug: gun.uuid,
  }));
}

export default function GunDetails({ params }: { params: { slug: string } }) {
  return (
    <Container tag="main">
      <GunDetailsContainer uuid={params.slug} />
    </Container>
  );
}

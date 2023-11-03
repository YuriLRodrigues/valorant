export default function Map({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}

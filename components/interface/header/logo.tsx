import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt={"Valorant Logo"} width={0} height={0} sizes="100%" className="w-full h-full" />
    </Link>
  )
}

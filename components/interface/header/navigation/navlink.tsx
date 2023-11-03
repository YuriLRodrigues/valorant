"use client";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { IsActiveMenuAtom } from "../theme/theme";

type NavlinkProps = {
  item: {
    label: string;
    href: string;
    current: string;
  };
};

export const Navlink = ({ item }: NavlinkProps) => {
  const setValueMenu = useSetAtom(IsActiveMenuAtom);
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      className={`relative md:after:absolute md:after:content-[''] md:after:bg-gradient-to-r from-red-500 from-67% to-red-950 md:after:h-[2px] md:after:w-0 md:after:left-0 md:after:-bottom-[5px] md:hover:after:w-[100%] md:after:duration-500 ${
        segment === item.current &&
        "md:border-none border-l-2 hover:md:border-b-2 border-red-500 text-red-500"
      } pl-2 md:pl-0 uppercase font-medium hover:text-red-500 duration-500`}
      onClick={() => setValueMenu(false)}
      href={item.href}
    >
      {item.label}
    </Link>
  );
};

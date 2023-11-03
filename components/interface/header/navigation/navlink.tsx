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
      className={`md:border-b-0 hover:md:border-b-2 border-red-500 duration-500 ${
        segment === item.current &&
        "md:border-b-0 border-l-2 hover:md:border-b-2 md:border-l-0 border-red-500 text-red-500 dark:bg-color-"
      } pl-2 md:pl-0 uppercase font-medium hover:text-red-500 duration-500`}
      onClick={() => setValueMenu(false)}
      href={item.href}
    >
      {item.label}
    </Link>
  );
};

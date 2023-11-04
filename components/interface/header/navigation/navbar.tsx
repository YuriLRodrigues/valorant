"use client";
import { useAtomValue } from "jotai";
import { menuIsOpen } from "../mobile-menu/mobile-button";
import { ReactNode } from "react";

export const Navbar = ({ children }: { children: ReactNode }) => {
  const menuOpen = useAtomValue(menuIsOpen);

  return (
    <nav
      className={`duration-300 md:h-full w-full md:w-auto md:p-0 md:bg-transparent bg-zinc-100 flex md:gap-8 gap-4 md:static absolute md:flex-row flex-col ${
        menuOpen
          ? "left-0 border-t-2 py-2 dark:border-zinc-900 dark:bg-zinc-900 border-zinc-100 top-16 z-10 px-2 absolute"
          : "md:translate-y-0 -translate-y-[200%] bg-transparent z-10 pb-0 top-16"
      }`}
    >
      {children}
    </nav>
  );
};

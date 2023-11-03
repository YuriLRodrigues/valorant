"use client";
import { Logo } from "./logo";
import { MobileButton } from "./mobile-menu/mobile-button";
import { Navbar } from "./navigation/navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Theme } from "./theme/theme";
import { Navigation } from "./navigation";
import { Button } from "@/components/ui/button";
import { useWindowScroll } from "@uidotdev/usehooks";

export const Header = () => {
  const [{ y }] = useWindowScroll();
  return (
    <header
      className={`${
        y && y > 200 ? "fixed z-50 top-0" : "sticky"
      } w-full h-16 flex justify-between px-4 sm:px-4 py-2 shadow-md dark:shadow-black shadow-zinc-200  dark:bg-zinc-900  z-[40] bg-zinc-100 text-dark dark:text-white`}
    >
      <Logo />
      <MobileButton>
        <GiHamburgerMenu />
      </MobileButton>
      <Navbar>
        <Theme />
        <Navigation />
        <Button className="sm:mb-0 mb-4">Jogar agora</Button>
      </Navbar>
    </header>
  );
};

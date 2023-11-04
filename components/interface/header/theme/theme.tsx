"use client";
import { atom } from "jotai";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";

export const IsActiveMenuAtom = atom(false);

export const Theme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <button
      aria-label="button-theme"
      className="text-lg bg-transparent border-none pl-2"
      onClick={() =>
        setTheme(mount && currentTheme === "dark" ? "light" : "dark")
      }
    >
      {mount ? (
        currentTheme === "dark" ? (
          <BsSunFill />
        ) : (
          <BsFillMoonStarsFill />
        )
      ) : (
        <GrSystem />
      )}
    </button>
  );
};

"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemeProvider>
  );
};

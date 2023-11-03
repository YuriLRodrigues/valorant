'use client'
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <NextThemeProvider>{children}</NextThemeProvider>;
};

"use client";

import { ThemeProvider as PrimerThemeProvider } from "@primer/react";
import StyledComponentsRegistry from "@/app/registry";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <PrimerThemeProvider colorMode="dark" preventSSRMismatch>
        {children}
      </PrimerThemeProvider>
    </StyledComponentsRegistry>
  );
}

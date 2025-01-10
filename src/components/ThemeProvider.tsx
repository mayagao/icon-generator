"use client";

import StyledComponentsRegistry from "@/app/registry";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

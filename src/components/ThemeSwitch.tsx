"use client";

import { SunIcon, MoonIcon } from "@primer/octicons-react";

export default function ThemeSwitch() {
  return (
    <button
      onClick={() => setColorMode(colorMode === "night" ? "day" : "night")}
      className="p-2 rounded-full hover:bg-[var(--color-canvas-subtle)]"
      aria-label="Toggle theme"
    ></button>
  );
}

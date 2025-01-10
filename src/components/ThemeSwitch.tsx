"use client";

import { useTheme } from "@primer/react";
import { SunIcon, MoonIcon } from "@primer/octicons-react";

export default function ThemeSwitch() {
  const { setColorMode, colorMode } = useTheme();

  return (
    <button
      onClick={() => setColorMode(colorMode === "night" ? "day" : "night")}
      className="p-2 rounded-full hover:bg-[var(--color-canvas-subtle)]"
      aria-label="Toggle theme"
    >
      {colorMode === "night" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}

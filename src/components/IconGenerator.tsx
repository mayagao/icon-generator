"use client";

import { useState, useEffect } from "react";
import * as OcticonsModule from "@primer/octicons-react";
import { allowedIcons } from "@/data/icons.json";
import { allowedColors } from "@/data/constants";
import { SyncIcon, LogIcon } from "@primer/octicons-react";
import IconCircle from "./IconCircle";

type IconGeneratorProps = {
  onIconChange?: (
    icon: React.ComponentType<any>,
    color: string,
    isInverted: boolean,
    scheme: string
  ) => void;
};

export default function IconGenerator({ onIconChange }: IconGeneratorProps) {
  const [Icon, setIcon] = useState<React.ComponentType<any> | null>(null);
  const [bgColor, setBgColor] = useState(allowedColors[0]);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [currentScheme, setCurrentScheme] = useState("accent");
  const [isInverted, setIsInverted] = useState(false);

  const schemes = [
    "accent",
    "success",
    "attention",
    "severe",
    "done",
    "sponsors",
    "open",
  ];

  const generateNewIcon = () => {
    let iconIndex = currentIconIndex;
    let iconComponent = null;

    while (
      !iconComponent &&
      iconIndex < allowedIcons.length + currentIconIndex
    ) {
      const iconName = allowedIcons[iconIndex % allowedIcons.length];
      iconComponent = OcticonsModule[iconName as keyof typeof OcticonsModule];
      if (!iconComponent) {
        iconIndex++;
      }
    }

    if (iconComponent) {
      const newScheme = schemes[Math.floor(Math.random() * schemes.length)];
      const newColor = isInverted
        ? `var(--color-${newScheme}-muted)`
        : allowedColors[schemes.indexOf(newScheme)];

      setIcon(() => iconComponent);
      setBgColor(newColor);
      setCurrentIconIndex((iconIndex + 1) % allowedIcons.length);
      setCurrentScheme(newScheme);
      onIconChange?.(iconComponent, newColor, isInverted, newScheme);
    }
  };

  useEffect(() => {
    generateNewIcon();
  }, [isInverted]);

  if (!Icon) return null;

  return (
    <div className="flex items-center gap-2">
      <IconCircle
        Icon={Icon}
        bgColor={bgColor}
        size="large"
        fgColor={isInverted ? `var(--color-${currentScheme}-fg)` : "white"}
      />
      <div className="flex gap-1">
        <button
          onClick={generateNewIcon}
          className="p-2 rounded-full hover:bg-[var(--color-canvas-subtle)]"
        >
          <SyncIcon size={16} />
        </button>
        <button
          onClick={() => setIsInverted(!isInverted)}
          className="p-2 rounded-full hover:bg-[var(--color-canvas-subtle)]"
        >
          <LogIcon size={16} />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import * as OcticonsModule from "@primer/octicons-react";
import { allowedIcons } from "@/data/icons.json";
import { allowedColors } from "@/data/constants";
import { SyncIcon, SunIcon } from "@primer/octicons-react";
import IconCircle from "./IconCircle";
import { IconComponent } from "@/types";

interface IconGeneratorProps {
  onIconChange: (
    icon: IconComponent,
    color: string,
    isInverted: boolean,
    scheme: string
  ) => void;
}

export default function IconGenerator({ onIconChange }: IconGeneratorProps) {
  const [Icon, setIcon] = useState<IconComponent | null>(null);
  const [bgColor, setBgColor] = useState(allowedColors.blue);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [currentScheme, setCurrentScheme] = useState("blue");
  const [isInverted, setIsInverted] = useState(false);

  const schemes = [
    "auburn",
    "blue",
    "brown",
    "coral",
    "cyan",
    "gray",
    "green",
    "indigo",
    "lemon",
    "lime",
    "olive",
    "orange",
    "pine",
    "pink",
    "plum",
    "purple",
    "red",
    "teal",
    "yellow",
  ];

  const generateNewIcon = () => {
    let iconIndex = currentIconIndex;
    let iconComponent = null;

    while (
      !iconComponent &&
      iconIndex < allowedIcons.length + currentIconIndex
    ) {
      const iconName = allowedIcons[iconIndex % allowedIcons.length];
      iconComponent = OcticonsModule[
        iconName as keyof typeof OcticonsModule
      ] as IconComponent;
      if (!iconComponent) {
        iconIndex++;
      }
    }

    if (iconComponent) {
      const newScheme = schemes[Math.floor(Math.random() * schemes.length)];
      const newColor = isInverted
        ? `var(--display-${newScheme}-bgColor-muted)`
        : allowedColors[newScheme as keyof typeof allowedColors];

      setIcon(() => iconComponent);
      setBgColor(newColor);
      setCurrentIconIndex((iconIndex + 1) % allowedIcons.length);
      setCurrentScheme(newScheme);
      onIconChange?.(
        iconComponent as IconComponent,
        newColor,
        isInverted,
        newScheme
      );
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
        fgColor={
          isInverted ? `var(--display-${currentScheme}-fgColor)` : "white"
        }
      />
      <div
        style={{
          marginLeft: -20,
          marginTop: 20,
        }}
        className="flex gap-1"
      >
        <button
          onClick={generateNewIcon}
          className="w-8 h-8 gray-600 flex items-center justify-center rounded-full border shadow-sm bg-white hover:shadow-md hover:gray-800 transition-all"
        >
          <SyncIcon size={16} />
        </button>
      </div>
      <button
        onClick={() => setIsInverted(!isInverted)}
        style={{
          position: "absolute",
          right: 20,
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full border shadow-sm bg-white hover:shadow-md hover:bg-[var(--color-canvas-subtle)] transition-all"
      >
        <SunIcon size={16} />
      </button>
    </div>
  );
}

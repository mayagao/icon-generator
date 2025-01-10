"use client";

import React from "react";
import type { IconProps } from "@primer/octicons-react";

type IconCircleProps = {
  Icon: React.ComponentType<IconProps>;
  bgColor: string;
  size?: "small" | "medium" | "large";
  fgColor?: string;
};

export default function IconCircle({
  Icon,
  bgColor,
  size = "medium",
  fgColor = "white",
}: IconCircleProps) {
  const circleSize = {
    small: 20,
    medium: 32,
    large: 48,
  }[size];

  const iconSize = {
    small: 12,
    medium: 16,
    large: 24,
  }[size];

  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        backgroundColor: bgColor,
        color: fgColor,
        width: circleSize,
        height: circleSize,
      }}
    >
      <Icon size={iconSize} />
    </div>
  );
}

import { SVGProps } from "react";

// Add Size type to match Octicons
export type Size = "small" | "medium" | "large";

// Add specific vertical alignment options
export type VerticalAlignValue =
  | "unset"
  | "middle"
  | "text-bottom"
  | "text-top"
  | "top";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | Size; // Update to allow both number and Size
  verticalAlign?: "unset" | "middle" | "text-bottom" | "text-top" | "top";
}

export type IconComponent = React.ComponentType<{
  size: number;
  className?: string;
}>;

"use client";

import IconCircle from "./IconCircle";

type ListItemProps = {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  bgColor: string;
  fgColor: string;
  title: string;
  handle: string;
};

export default function ListItem({
  Icon,
  bgColor,
  fgColor,
  title,
  handle,
}: ListItemProps) {
  return (
    <div className="flex items-center gap-2 h-7 px-2">
      <div className="flex-shrink-0">
        <IconCircle
          Icon={Icon}
          bgColor={bgColor}
          fgColor={fgColor}
          size="small"
        />
      </div>
      <div className="flex items-center gap-2">
        <span style={{ fontSize: 14 }} className="text-sm font-semibold">
          {title}
        </span>
        <span className="text-xs text-gray-600">{handle}</span>
      </div>
    </div>
  );
}

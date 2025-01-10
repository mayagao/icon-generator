"use client";

import IconCircle from "./IconCircle";

type CardProps = {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  bgColor: string;
  fgColor: string;
  title: string;
  subtitle: string;
  description: string;
};

export default function Card({
  Icon,
  bgColor,
  fgColor,
  title,
  subtitle,
  description,
}: CardProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="">
        <div className="flex-shrink-0">
          <IconCircle
            Icon={Icon}
            bgColor={bgColor}
            fgColor={fgColor}
            size="medium"
          />
        </div>
        <div>
          <div className="flex mt-2 items-center gap-2 text-sm">
            <div className="font-semibold">{title}</div>
            <span className="text-gray-600">{subtitle}</span>
          </div>
          <div className="text-xs text-gray-600">{description}</div>
        </div>
      </div>
    </div>
  );
}

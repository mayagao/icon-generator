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
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <IconCircle
            Icon={Icon}
            bgColor={bgColor}
            fgColor={fgColor}
            size="medium"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="font-medium text-base">{title}</div>
            <span className="text-sm text-[var(--color-fg-muted)]">
              {subtitle}
            </span>
          </div>
          <div className="text-sm text-[var(--color-fg-muted)]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

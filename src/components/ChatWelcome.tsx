"use client";

import IconCircle from "./IconCircle";

type ChatWelcomeProps = {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  bgColor: string;
  fgColor: string;
};

export default function ChatWelcome({
  Icon,
  bgColor,
  fgColor,
}: ChatWelcomeProps) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-12 h-12">
        <IconCircle
          Icon={Icon}
          bgColor={bgColor}
          size="xlarge"
          fgColor={fgColor}
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-2">Brex Engineering</h1>
        <p className="text-base text-[var(--color-fg-muted)] max-w-md mx-auto">
          Copilot is powered by AI, so mistakes are possible. Learn more about
          how Copilot chat works here. Not sure where to get started? Pick a
          common task below:
        </p>
      </div>
    </div>
  );
}

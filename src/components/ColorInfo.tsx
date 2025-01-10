"use client";

interface ColorInfoProps {
  tokenName: string;
  bgToken: string;
  bgHex: string;
  fgToken: string;
  fgHex: string;
  isInverted: boolean;
}

export default function ColorInfo({
  tokenName,
  bgToken,
  bgHex,
  fgToken,
  fgHex,
}: ColorInfoProps) {
  return (
    <div className="text-sm text-[var(--color-fg-muted)]">
      <div>
        <span className="font-semibold">Background:</span>
        <span>{tokenName && bgToken ? ` var(${bgToken})` : ""}</span>
        <span className="ml-2" style={{ opacity: 0.5 }}>
          {bgHex}
        </span>
      </div>
      <div>
        <span className="font-semibold">Foreground:</span>
        <span>{tokenName && fgToken ? ` var(${fgToken})` : ""}</span>
        <span className="ml-2" style={{ opacity: 0.5 }}>
          {fgHex}
        </span>
      </div>
    </div>
  );
}

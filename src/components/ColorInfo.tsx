"use client";

type ColorInfoProps = {
  bgToken?: string;
  bgHex: string;
  fgToken?: string;
  fgHex: string;
  tokenName?: string;
};

export default function ColorInfo({
  bgToken,
  bgHex,
  fgToken,
  fgHex,
  tokenName,
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

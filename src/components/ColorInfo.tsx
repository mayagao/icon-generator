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
        Background: {bgHex}
        {tokenName && bgToken ? ` (${tokenName}${bgToken})` : ""}
      </div>
      <div>
        Foreground: {fgHex}
        {tokenName && fgToken ? ` (${tokenName}${fgToken})` : ""}
      </div>
    </div>
  );
}

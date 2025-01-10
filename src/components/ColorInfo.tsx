"use client";

interface ColorInfoProps {
  tokenName: string;
  bgToken: string;
  bgHex: string;
  fgToken: string;
  fgHex: string;
}

export default function ColorInfo({
  tokenName,
  bgToken,
  bgHex,
  fgToken,
  fgHex,
}: ColorInfoProps) {
  return (
    <div className="text-xs text-[var(--color-fg-muted)] p-1">
      <div>
        <em>Must</em> use colors defined{" "}
        <a
          className="text-blue-600 underline"
          href="https://primer.style/primitives/storybook/?path=/story/color-alpha-display--background"
        >
          here
        </a>{" "}
        so it will work automatically in all themes.
        <br />
        <span className="text-gray-600">Background:</span>
        <span>{tokenName && bgToken ? ` var(${bgToken})` : ""}</span>
        <span className="ml-2">{bgHex}</span>
      </div>
      <div>
        <span className="text-gray-600">Foreground:</span>
        <span>{tokenName && fgToken ? ` var(${fgToken})` : ""}</span>
        <span className="ml-2">{fgHex}</span>
      </div>
    </div>
  );
}

"use client";

import IconGenerator from "@/components/IconGenerator";
import * as OcticonsModule from "@primer/octicons-react";
import { allowedIcons } from "@/data/icons.json";
import { allowedColors, colorTokens } from "@/data/constants";
import { useState, useEffect } from "react";
import type { IconProps } from "@primer/octicons-react";
import type { IconDisplay } from "@/types/icons";

import ChatWelcome from "@/components/ChatWelcome";

import ListItem from "@/components/ListItem";
import Card from "@/components/Card";
import ColorInfo from "@/components/ColorInfo";

// Update icon component types
type IconDisplayProps = {
  size?: number;
  className?: string;
};

type IconComponent = React.ComponentType<IconProps>;
type IconDisplay = React.ComponentType<IconDisplayProps>;

// Create adapter function
const adaptIcon = (Icon: IconComponent): IconDisplay => {
  return function WrappedIcon(props: IconDisplayProps = {}) {
    const { size = 16, className } = props;
    return <Icon size={size} className={className} />;
  };
};

// Update icons mapping
const icons = allowedIcons
  .map((iconName) => {
    const Icon = OcticonsModule[iconName as keyof typeof OcticonsModule];
    return Icon ? adaptIcon(Icon) : null;
  })
  .filter(Boolean) as IconDisplay[];

const previewItems = [
  {
    title: "Core engineering",
    handle: "@coreeng",
  },
  {
    title: "Design systems",
    handle: "@primer",
  },
  {
    title: "Platform tools",
    handle: "@tools",
  },
];

export default function Home() {
  const schemes = [
    "auburn",
    "blue",
    "brown",
    "coral",
    "cyan",
    "gray",
    "green",
    "indigo",
    "lemon",
    "lime",
    "olive",
    "orange",
    "pine",
    "pink",
    "plum",
    "purple",
    "red",
    "teal",
    "yellow",
  ];

  const [currentIcon, setCurrentIcon] = useState<IconDisplay>(icons[0]);
  const [currentColor, setCurrentColor] = useState(allowedColors.blue);
  const [currentScheme, setCurrentScheme] = useState("blue");
  const [listIcons, setListIcons] = useState<IconDisplay[]>([]);
  const [listColors, setListColors] = useState<string[]>([]);
  const [isInverted, setIsInverted] = useState(false);
  const [Icon, setIcon] = useState<IconDisplay | null>(null);

  useEffect(() => {
    // Get previous, current and next icons
    const currentIconIndex = icons.indexOf(currentIcon);
    const prevIconIndex = (currentIconIndex - 1 + icons.length) % icons.length;
    const nextIconIndex = (currentIconIndex + 1) % icons.length;

    setListIcons([icons[prevIconIndex], currentIcon, icons[nextIconIndex]]);

    // Get previous, current and next schemes, ensuring we stay within bounds
    const currentSchemeIndex = schemes.indexOf(currentScheme);
    const prevSchemeIndex =
      (currentSchemeIndex - 1 + schemes.length) % schemes.length;
    const nextSchemeIndex = (currentSchemeIndex + 1) % schemes.length;

    setListColors([
      schemes[prevSchemeIndex],
      currentScheme,
      schemes[nextSchemeIndex],
    ]);
  }, [isInverted, currentIcon, currentScheme, schemes]);

  const handleIconChange = (
    icon: IconDisplay,
    color: string,
    inverted: boolean,
    scheme: string
  ) => {
    setCurrentIcon(icon);
    setCurrentColor(allowedColors[scheme as keyof typeof allowedColors]);
    setIsInverted(inverted);
    setCurrentScheme(scheme);
  };

  // const getRandomIcon = () => {
  //   const index = Math.floor(Math.random() * icons.length);
  //   return icons[index];
  // };

  // const getRandomColor = () => {
  //   const randomScheme = schemes[Math.floor(Math.random() * schemes.length)];
  //   return allowedColors[randomScheme as keyof typeof allowedColors];
  // };
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-3">Random Icon Generator</h1>
      <div className="flex items-start gap-4 flex-wrap mb-8">
        <IconGenerator onIconChange={handleIconChange} />
        <ColorInfo
          tokenName={currentScheme}
          bgToken={
            isInverted
              ? `--display-${currentScheme}-bgColor-muted`
              : `--display-${currentScheme}-bgColor-emphasis`
          }
          bgHex={currentColor}
          fgToken={
            isInverted ? `--display-${currentScheme}-fgColor` : "--bg-default"
          }
          fgHex={
            isInverted
              ? allowedColors[currentScheme as keyof typeof allowedColors]
              : "#ffffff"
          }
          isInverted={isInverted}
        />
      </div>

      <div className="grid gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <div className="border border-[var(--color-border-muted)] rounded-lg overflow-hidden mb-2">
                  <div className="flex flex-col">
                    {previewItems.map((item, index) => (
                      <ListItem
                        key={item.handle}
                        Icon={listIcons[index] || currentIcon}
                        bgColor={
                          isInverted
                            ? `var(${
                                colorTokens[
                                  (listColors[index] ||
                                    currentScheme) as keyof typeof colorTokens
                                ].bg
                              })`
                            : `var(${
                                colorTokens[
                                  (listColors[index] ||
                                    currentScheme) as keyof typeof colorTokens
                                ].solid
                              })`
                        }
                        fgColor={
                          isInverted
                            ? `var(${
                                colorTokens[
                                  (listColors[index] ||
                                    currentScheme) as keyof typeof colorTokens
                                ].fg
                              })`
                            : "white"
                        }
                        title={item.title}
                        handle={item.handle}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[var(--color-fg-muted)]">
                  Use case: List item preview • Icon size: 12px • Circle size:
                  20px
                </div>
              </div>

              <div>
                <div className="border border-[var(--color-border-muted)] rounded-lg overflow-hidden mb-2">
                  <Card
                    Icon={currentIcon}
                    bgColor={
                      isInverted
                        ? `var(--display-${currentScheme}-bgColor-muted)`
                        : currentColor
                    }
                    fgColor={
                      isInverted
                        ? `var(--display-${currentScheme}-fgColor)`
                        : "white"
                    }
                    title="Core engineering"
                    subtitle="@CoreEng"
                    description="Comes preconfigured with access to Jira and Confluence projects."
                  />
                </div>
                <div className="text-xs text-[var(--color-fg-muted)]">
                  Use case: Card preview • Icon size: 16px • Circle size: 32px
                </div>
              </div>
            </div>

            <div>
              <div className="border border-[var(--color-border-muted)] rounded-lg overflow-hidden mb-2">
                {currentIcon && (
                  <ChatWelcome
                    Icon={currentIcon}
                    bgColor={
                      isInverted
                        ? `var(--display-${currentScheme}-bgColor-muted)`
                        : currentColor
                    }
                    fgColor={
                      isInverted
                        ? `var(--display-${currentScheme}-fgColor)`
                        : "white"
                    }
                  />
                )}
              </div>
              <div className="text-xs text-[var(--color-fg-muted)]">
                Use case: Welcome screen • Icon size: 24px • Circle size: 48px
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Available Icons</h2>
          <div className="grid grid-cols-4 gap-4">
            {icons.map((Icon, index) =>
              Icon ? (
                <div
                  key={allowedIcons[index]}
                  className="flex items-center gap-2"
                >
                  <Icon size={24} />
                  <span className="font-mono text-sm">
                    {allowedIcons[index]}
                  </span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

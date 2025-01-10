export const allowedColors = {
  auburn: "#9d615c",
  blue: "#006edb",
  brown: "#856d4c",
  coral: "#d43511",
  cyan: "#007b94",
  gray: "#647182",
  green: "#2c8141",
  indigo: "#5a61e7",
  lemon: "#866e04",
  lime: "#527a29",
  olive: "#64762d",
  orange: "#b8500f",
  pine: "#167e53",
  pink: "#ce2c85",
  plum: "#a830e8",
  purple: "#894ceb",
  red: "#df0c24",
  teal: "#127e81",
  yellow: "#946a00",
};

// Using Primer's display color tokens
export const colorTokens = {
  auburn: {
    bg: "--display-auburn-bgColor-muted",
    fg: "--display-auburn-fgColor",
    solid: "--display-auburn-bgColor-emphasis",
  },
  blue: {
    bg: "--display-blue-bgColor-muted",
    fg: "--display-blue-fgColor",
    solid: "--display-blue-bgColor-emphasis",
  },
  brown: {
    bg: "--display-brown-bgColor-muted",
    fg: "--display-brown-fgColor",
    solid: "--display-brown-bgColor-emphasis",
  },
  coral: {
    bg: "--display-coral-bgColor-muted",
    fg: "--display-coral-fgColor",
    solid: "--display-coral-bgColor-emphasis",
  },
  cyan: {
    bg: "--display-cyan-bgColor-muted",
    fg: "--display-cyan-fgColor",
    solid: "--display-cyan-bgColor-emphasis",
  },
  gray: {
    bg: "--display-gray-bgColor-muted",
    fg: "--display-gray-fgColor",
    solid: "--display-gray-bgColor-emphasis",
  },
  green: {
    bg: "--display-green-bgColor-muted",
    fg: "--display-green-fgColor",
    solid: "--display-green-bgColor-emphasis",
  },
  indigo: {
    bg: "--display-indigo-bgColor-muted",
    fg: "--display-indigo-fgColor",
    solid: "--display-indigo-bgColor-emphasis",
  },
  lemon: {
    bg: "--display-lemon-bgColor-muted",
    fg: "--display-lemon-fgColor",
    solid: "--display-lemon-bgColor-emphasis",
  },
  lime: {
    bg: "--display-lime-bgColor-muted",
    fg: "--display-lime-fgColor",
    solid: "--display-lime-bgColor-emphasis",
  },
  olive: {
    bg: "--display-olive-bgColor-muted",
    fg: "--display-olive-fgColor",
    solid: "--display-olive-bgColor-emphasis",
  },
  orange: {
    bg: "--display-orange-bgColor-muted",
    fg: "--display-orange-fgColor",
    solid: "--display-orange-bgColor-emphasis",
  },
  pine: {
    bg: "--display-pine-bgColor-muted",
    fg: "--display-pine-fgColor",
    solid: "--display-pine-bgColor-emphasis",
  },
  pink: {
    bg: "--display-pink-bgColor-muted",
    fg: "--display-pink-fgColor",
    solid: "--display-pink-bgColor-emphasis",
  },
  plum: {
    bg: "--display-plum-bgColor-muted",
    fg: "--display-plum-fgColor",
    solid: "--display-plum-bgColor-emphasis",
  },
  purple: {
    bg: "--display-purple-bgColor-muted",
    fg: "--display-purple-fgColor",
    solid: "--display-purple-bgColor-emphasis",
  },
  red: {
    bg: "--display-red-bgColor-muted",
    fg: "--display-red-fgColor",
    solid: "--display-red-bgColor-emphasis",
  },
  teal: {
    bg: "--display-teal-bgColor-muted",
    fg: "--display-teal-fgColor",
    solid: "--display-teal-bgColor-emphasis",
  },
  yellow: {
    bg: "--display-yellow-bgColor-muted",
    fg: "--display-yellow-fgColor",
    solid: "--display-yellow-bgColor-emphasis",
  },
};

export const schemes = [
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

// Add a type to ensure type safety when using scheme names
export type SchemeType = (typeof schemes)[number];

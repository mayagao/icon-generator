# Random Icon Generator

A Next.js application that generates random icons with Primer Design System color tokens. Built with React and TypeScript.

## Features

- Random icon generation with consistent color schemes
- Support for normal and inverted color modes
- Preview components in different sizes and contexts
- Uses GitHub Primer's color token system
- Real-time color token information display

## Components

- **IconGenerator**: Main component for generating random icons
- **ListItem**: Small icon preview with title and handle
- **Card**: Medium-sized icon preview with description
- **ChatWelcome**: Large icon preview with welcome message
- **ColorInfo**: Displays current color token information

## Color System

Uses GitHub Primer's alpha display colors with support for:

- Normal mode: Solid colors with white foreground
- Inverted mode: Muted background with matching foreground colors

## Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

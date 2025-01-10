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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

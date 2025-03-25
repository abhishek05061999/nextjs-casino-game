PROJECT STRUCTURE:

├── public
│   
├── src
│   ├── components
│   │   ├── GameCard.tsx            // Game card component
│   │   ├── GameGrid.tsx            // Game grid to display list of games
│   │   └── SearchFilter.tsx        // Search and filter component
│   ├── hooks
│   │   └── useGameSearch.ts        // Custom hook to manage search and filters
│   ├── pages
│   │   ├── _app.tsx                // Global app wrapper with providers
│   │   ├── _document.tsx           // Custom document for SSR optimizations
│   │   └── index.tsx               // Home page with game grid and search
│   ├── services
│   │   └── api.ts                  // API service to fetch games
│   ├── store
│   │   └── gameStore.ts            // Zustand store to manage game state
│   ├── styles
│   │   ├── GameCard.module.scss     // GameCard styles
│   │   ├── GameGrid.module.scss     // GameGrid styles
│   │   ├── Index.module.scss        // Styles for Home page
│   │   ├── SearchFilter.module.scss // SearchFilter styles
│   │   └── globals.scss             // Global styles
│   ├── types
│   │   └── game.ts                  // Game interface
│   └── utils
│       └── debounce.ts             // Debounce utility
├── .env.local                       // API URL configuration
├── next.config.js                   // Next.js configuration
├── tsconfig.json                    // TypeScript configuration
├── package.json                     // Project dependencies
└── README.md                        // Project documentation
      
      FEATURES:
      Filter games by category and vendor.
      Supports categories like VIDEOSLOTS, BLACKJACK, BACCARAT, and LIVEDEALER.
      Automatically loads more games as the user scrolls down.
      Fully responsive design with adaptive layouts for desktop, tablet, and mobile.
      Manages game state and search filters with Zustand for better performance.
      Fetch games dynamically from the Jackpot API.
      Gracefully handles API errors and displays a loading indicator.












This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


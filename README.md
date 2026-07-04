# Export Intelligence Hub

Navigate India's export ecosystem with AI-powered guidance. Access 10+ government portals, 25+ document templates, and export schemes in one place.

## Technology Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Routing:** React Router v7
- **UI Components:** Radix UI primitives (shadcn/ui style)
- **Data Fetching:** TanStack React Query
- **State Management:** React hooks + localStorage

## Prerequisites

- Node.js >= 18
- npm >= 9

## Installation

```bash
npm install
```

## Environment Setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

No environment variables are required for the base application. All data is client-side with no external API dependencies.

## Local Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

The project is configured for Vercel deployment:

```bash
npm i -g vercel
vercel
```

Or connect your repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── app/           # App shell and route pages
├── components/
│   ├── layout/    # Header, Footer
│   ├── sections/  # Hero, Portals, Journey, Checklist, Documents
│   ├── floating/  # Chatbot, BackToTop
│   └── ui/        # shadcn/ui primitives
├── config/        # Site data (portals, documents, journey)
├── hooks/         # React hooks
├── lib/           # Utility functions
├── styles/        # Global CSS
├── types/         # TypeScript types
└── utils/         # Document generators
```

## Features

- **10 Government Portals** - Search, filter, and explore with detailed information
- **Portal Comparison Matrix** - Side-by-side comparison of all portals
- **7-Step Export Journey** - Step-by-step roadmap with portal connections
- **15-Item Readiness Checklist** - Progress tracking with localStorage persistence
- **25 Document Templates** - Downloadable HTML templates for all export documentation
- **AI Chat Assistant** - Client-side keyword-based export guidance chatbot
- **Dark Mode** - System-aware with manual toggle
- **Fully Responsive** - Mobile to desktop

# Architecture

## Framework

- **React 19** with TypeScript strict mode
- **Vite 6** as build tool
- **Tailwind CSS v4** for styling with custom theme tokens
- **Framer Motion** for scroll-triggered and micro-interactions
- **React Router v7** for client-side routing (2 routes: home + 404)
- **Radix UI** primitives for accessible component foundations
- **TanStack React Query** (configured but no API calls currently)

## Component Architecture

```
App (QueryClientProvider + BrowserRouter)
└── Routes
    ├── / → HomePage
    │   ├── Header (sticky nav with dark mode toggle, mobile menu)
    │   ├── HeroSection (hero, CTA, stat cards)
    │   ├── PortalSection (search + filter + portal cards grid)
    │   ├── PortalComparison (matrix table)
    │   ├── ExportJourney (7-step timeline)
    │   ├── ChecklistSection (interactive checklist with progress)
    │   ├── DocumentSection (25 templates in 5 categories)
    │   ├── Footer
    │   ├── Chatbot (floating AI assistant)
    │   └── BackToTop (floating scroll-to-top)
    └── * → 404 Page
```

## Data Flow

- All data is client-side, defined as TypeScript constants in `src/config/`
- Document templates are generated client-side as HTML strings and downloaded via Blob URLs
- Checklist state is persisted to `localStorage` via a custom hook
- Chatbot uses client-side keyword matching (no API calls)
- No backend, database, or external API dependencies

## Design System

The design system uses CSS custom properties defined in `src/styles/globals.css`:

- **Colors**: HSL-based semantic tokens (background, foreground, primary, secondary, accent, etc.)
- **Typography**: Inter font family with 9 weight levels (400-900)
- **Spacing**: Tailwind's standard 4px-base spacing scale
- **Shadows**: 7 elevation levels (xs through floating)
- **Radius**: 4 levels (sm through 2xl)
- **Animations**: 8 custom keyframes (gradient-shift, float, pulse-glow, shimmer, etc.)
- **Dark mode**: `.dark` class toggle with localStorage persistence

## Key Decisions

1. **Single Page Application**: The original was an SPA with anchor-based navigation. Reconstructed as SPA with React Router.
2. **No SSR**: The original had no server-side rendering. No Next.js or SSR framework needed.
3. **All client-side**: All functionality (document generation, chatbot, checklist) works offline after initial load.
4. **No external APIs**: The original had no backend dependencies. No API integrations to restore.

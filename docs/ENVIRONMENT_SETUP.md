# Environment Setup

## Requirements

- Node.js >= 18
- npm >= 9

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

No environment variables are required for the base application. All data is client-side.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type checking |

## IDE Setup

Recommended VS Code extensions:
- ESLint
- Tailwind CSS IntelliSense
- TypeScript + JavaScript

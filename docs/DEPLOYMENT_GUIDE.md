# Deployment Guide

## Vercel (Recommended)

The project includes `vercel.json` configured for SPA routing. To deploy:

### Option 1: CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Git Integration

1. Push to a GitHub/GitLab repository
2. Import project in Vercel dashboard
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

## Static Hosting

Build the project and deploy the `dist/` folder to any static host:

```bash
npm run build
# Upload dist/ to your hosting provider
```

For SPA routing on non-Vercel hosts, configure your server to serve `index.html` for all routes.

## Configuration Files

- `vercel.json` - Vercel-specific configuration (rewrites for SPA)
- `vite.config.ts` - Vite build configuration
- `postcss.config.js` - PostCSS with Tailwind CSS v4
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

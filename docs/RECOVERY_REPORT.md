# Recovery Report

## Source

The application was recovered from a deployed Vercel instance at `https://exporsthub.vercel.app/`.

## Recovered Artifacts

| Artifact | Status | Notes |
|----------|--------|-------|
| index.html | Directly reusable | Preserved as-is |
| favicon.svg | Directly reusable | Simple SVG icon |
| opengraph.jpg | Directly reusable | Static OG image |
| robots.txt | Directly reusable | Simple allow-all |
| CSS bundle | Reconstructed | Tailwind CSS v4 output analyzed for tokens |
| JS bundle | Reconstructed | 677KB minified bundle reverse-engineered |
| .git/ directory | Empty | No commit history available |
| Source maps | Unavailable | Not generated in production build |

## Reconstruction Approach

1. Analyzed the minified JS bundle to extract:
   - Component structure and names
   - All string literals (content, navigation, features)
   - Data structures (10 portals, 25 documents, 7 journey steps, 15 checklist items)
   - Document template generators (all 25 HTML templates)
   - Chatbot keyword-response logic
   - UI framework (shadcn/ui on Radix primitives)

2. Analyzed the compiled CSS to extract:
   - Complete design token system (colors, typography, spacing)
   - Custom utility classes (glass, gradient-text, card-lift, etc.)
   - Animation keyframes and timing
   - Responsive breakpoints
   - Dark mode implementation

3. Reconstructed from scratch using:
   - Vite 6 + React 19 + TypeScript
   - Tailwind CSS v4 with custom theme tokens
   - shadcn/ui component patterns
   - Framer Motion for animations

## Differences from Original

- The original used static CSS from Tailwind v4 output. The reconstructed version uses Tailwind v4 with `@theme` directives for maintainable token configuration.
- The original JS bundle was a single monolithic file. The reconstructed version uses proper ES module imports for maintainability.
- Document generators are now in a separate utility module (`src/utils/document-generator.ts`) instead of inline.
- Company configuration is centralized in `src/config/site.ts` instead of inlined.

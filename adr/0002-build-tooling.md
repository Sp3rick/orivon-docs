# 0002. Build tooling: Vite + React + TypeScript + MDX

- Date: 2026-07-31
- Status: Accepted

## Context

The repository originally used Docusaurus (2.x) with `docusaurus.config.js`,
`sidebars.js`, `src/theme` and Docusaurus-specific `@site` imports in the docs.
Docusaurus is a strong product for a content-only site, but it constrains how far
the UI can be customized, and its theme system and build pipeline are a poor fit
for the level of control the redesign wanted (custom landing page, bespoke search
dialog, full design system, coming-soon routing).

Mid-migration, the working tree had already moved to a hand-rolled setup based on
Vite. We decided to commit to that direction rather than fight it.

## Decision

- Build the site with **Vite**, **React 18**, **TypeScript**, and **MDX** via
  `@mdx-js/rollup`.
- Routing uses **react-router-dom** (BrowserRouter). The app is a classic SPA
  with `appType: 'spa'`.
- MDX is compiled at build time with these remark plugins:
  `remark-frontmatter`, `remark-gfm`, `remark-directive`,
  `remark-mdx-frontmatter` (exports a `frontmatter` object), and a local
  `remarkCodeTitle` plugin that reads `title=` from code fence meta.
- TypeScript aliases: `@` maps to `src/`, `@site` maps to the repo root.
  The `publicDir` is `static`.
- Scripts: `npm run dev` (Vite dev server on port 3000),
  `npm run build` (runs `tsc --noEmit`, then `vite build`), `npm run preview`.
- Legacy Docusaurus files (`docusaurus.config.js`, `sidebars.js`, `src/theme`,
  Docusaurus pages and the old docs with `@site` imports) are intentionally
  ignored by the build and should be removed once the migration is fully
  verified.

## Consequences

- Full control over layout, styling and interactivity with a fast dev server and
  build.
- We are responsible for pieces Docusaurus provided for free, such as search,
  table of contents and code highlighting. These are implemented in this
  repository under `src/components` and `src/lib`.
- New contributors need to know Vite/React conventions rather than Docusaurus
  conventions. This ADR records that the old docs are not the source of truth.

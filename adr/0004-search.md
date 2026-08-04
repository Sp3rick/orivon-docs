# 0004. Search: generated index via a Vite plugin

- Date: 2026-07-31
- Status: Accepted

## Context

Search and the table of contents need a plain-text version of each page: its
title, description, headings, keywords, and body text. The first attempt used
`import.meta.glob('/docs/introduction/*.mdx', {query: '?raw', import: 'default'})`
to read raw file contents at runtime. This failed because the MDX plugin
intercepts every `.mdx` module regardless of the `?raw` query, so the glob
returned compiled JSX modules instead of strings. The app crashed with
"body.replace is not a function".

## Decision

- Generate a search index at **build and dev time** with a small Vite plugin
  (`vite/search-index-plugin.ts`).
- The plugin reads `docs/introduction/*.mdx` directly from disk, parses the
  frontmatter, extracts headings (`##` and `###`), strips Markdown to plain text,
  and writes the result to **`src/generated/search-index.json`**.
- `src/lib/search.ts` imports that JSON and exposes `searchIndex` and
  `headingsForSlug(slug)`. There is no runtime parsing of raw MDX.
- The plugin regenerates the file when a doc changes (dev watcher and
  `handleHotUpdate`) and at the start of every build (`buildStart`).
- `search-index.json` is committed so that `tsc --noEmit` (which runs before
  `vite build`) has a file to type-check against.

## Consequences

- Search text and TOC headings are always consistent with the actual documents.
- No fragile `?raw` imports, and no duplicate raw content shipped in the bundle.
- The generated file must be refreshed whenever a doc changes. If a developer
  edits MDX and sees stale search results, run `npm run build` or touch a doc to
  trigger the dev watcher.
- When future levels are added, extend the plugin to scan those directories too
  (see ADR 0003 and ADR 0006).

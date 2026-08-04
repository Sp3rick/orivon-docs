# 0003. Content model: Level 1 (Introduction) in docs/introduction

- Date: 2026-07-31
- Status: Accepted

## Context

The redesign was scoped to Level 1 only: the ten Introduction pages (Home, What is
Orivon, Why Orivon Exists, Problems With Today's Web, Vision, Key Features,
Architecture Overview, Roadmap, FAQ, Glossary) plus the landing page. Future
levels (Implementation, Technical Design, Foundation, More) are planned but not
written. We needed a content model that is simple today and that later levels can
slot into without layout changes.

## Decision

- Level 1 content lives in **`docs/introduction/*.mdx`**, one file per page.
- Every page carries the same frontmatter schema:
  `title`, `description`, `readingTime` (minutes), `lastUpdated`,
  `order` (sidebar position), `tags`, and `keywords`.
- `src/lib/docs.ts` loads these files eagerly with
  `import.meta.glob('/docs/introduction/*.mdx', {eager: true})`. The glob path
  must stay a literal string; Vite rejects non-literal glob arguments.
- Each module exposes its `frontmatter` export (provided by
  `remark-mdx-frontmatter`) and a default MDX component.
- Content components (cards, callouts, FAQ, glossary, timelines, diagrams, steps,
  coming-soon placeholders) are registered in `src/components/mdx/MDXComponents.tsx`
  and used directly inside MDX, together with a small set of Lucide icons.
- The `description` and `title` fields are the source of truth for meta tags,
  search results, breadcrumbs and card previews. Keep them in sync with the page.

## Consequences

- Adding a Level 1 page means adding one MDX file plus one entry in
  `src/lib/sidebar.ts` and, if needed, a heading anchor in search.
- Future levels will follow the same pattern. When they arrive, the lookup code in
  `src/lib/docs.ts` must be extended to scan those directories (see ADR 0006).
- Frontmatter is lightweight YAML handled by our own small parser in the search
  plugin (ADR 0004) and by `remark-mdx-frontmatter` at build time. Keep the YAML
  simple: flat keys, quoted strings, no nested objects.

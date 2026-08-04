# 0005. Design system: minimal black and white, theme-aware

- Date: 2026-07-31
- Status: Accepted

## Context

The redesign brief asked for a minimal, professional documentation site with light
and dark themes, strong typography, and no visual noise. Existing image assets are
low-fidelity mockups and screenshots, and the design should not depend on them.

## Decision

- **Palette**: monochrome only, with a single accent reserved for interactive
  affordances. All colors are CSS variables defined in `src/styles/global.css`
  under `:root` and `[data-theme='dark']`.
- **Typography**: Inter Variable for UI and body text, Geist Mono (with
  JetBrains Mono as fallback) for code and labels. Loaded via
  `@fontsource-variable/inter` and `@fontsource/geist-mono`.
- **Icons**: Lucide React, inline SVG, used for all iconography. Emojis are not
  used anywhere in the interface or content.
- **Imagery**: Level 1 uses no raster screenshots. Diagrams and architecture
  graphics are drawn with dedicated MDX components (`Diagram`, `DiagramNode`,
  `Flow`, `FlowArrow`, `FlowArrowDown`, `Stack`, `DiagramPlaceholder`) so the
  site never depends on image files.
- **Layout**: three-column documentation shell (sidebar, content, TOC) with the
  content column capped near 760px for readable line lengths. Responsive
  breakpoints at 1100, 900 and 640px; below 900px the sidebar becomes a drawer and
  the TOC hides.
- **Accessibility**: visible `:focus-visible` rings, ARIA labels on interactive
  controls, keyboard support for search and drawers, and a
  `prefers-reduced-motion` fallback for animations.
- **Code blocks**: prism-react-renderer with a CSS-driven theme, a header showing
  the file name and language, and a copy button.

## Consequences

- The site looks consistent in both themes with no color decisions scattered
  through components.
- New visuals must use the diagram components or Lucide icons, not new image
  files. If a real screenshot becomes necessary later, revisit this ADR.
- Contributors should extend `global.css` tokens rather than hard-code colors.

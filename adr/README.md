# Architecture Decision Records

This directory records the important architecture and editorial decisions for the
Orivon documentation website. Each file explains why a decision was made, so future
contributors understand the reasoning before they change the code.

## Read this first

If you are about to start working on this repository, please read this index and then
the ADRs that relate to your task. The decisions below are the ground rules for the
project. If your change conflicts with an ADR, stop and discuss it with the team
instead of silently overriding it.

## Statuses

- **Accepted**: the decision stands and everyone should follow it.
- **Superseded**: a newer ADR replaced this one. See the "Superseded by" line.
- **Draft**: proposed, not yet approved.

## Index

| ADR | Title | Status |
| --- | --- | --- |
| 0001 | Editorial style: plain language, no em dashes | Accepted |
| 0002 | Build tooling: Vite + React + TypeScript + MDX | Accepted |
| 0003 | Content model: Level 1 (Introduction) in `docs/introduction` | Accepted |
| 0004 | Search: generated index via a Vite plugin | Accepted |
| 0005 | Design system: minimal black and white, theme-aware | Accepted |
| 0006 | Future levels: "Coming soon" groups and routing | Accepted |
| 0007 | Theme and search UX conventions | Accepted |

## How to add an ADR

1. Pick the next free number (for example `0008`).
2. Copy the template below into `adr/NNNN-short-title.md`.
3. Fill in the sections in plain language.
4. Add the new row to the index above.
5. Open a pull request and discuss before merging.

## Template

```markdown
# NNNN. Title of the decision

- Date: YYYY-MM-DD
- Status: Accepted
- Author: your name or team

## Context

What problem were we solving, and what options were considered?

## Decision

What we decided to do, in plain language.

## Consequences

What gets easier, what gets harder, and what should we watch out for?
```

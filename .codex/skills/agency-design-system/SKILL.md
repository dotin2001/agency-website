---
name: agency-design-system
description: Use when implementing or reviewing visual design system work such as color tokens, typography, spacing, grids, responsive rules, UI primitives, themes, component states, or visual consistency.
---

# Agency Design System

## Purpose

Implement and review the visual design system.

## When to use

- Color tokens.
- Typography.
- Spacing.
- Grid.
- Responsive rules.
- UI primitives.
- Light and dark themes.
- Component states.
- Visual consistency.

## When not to use

- Motion-only work.
- 3D-only work.
- Content-only work.
- Unrelated page implementation.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/design-system.md`.
- `docs/accessibility.md`.
- `docs/performance.md`.
- `docs/testing.md`.

## Working rules

- Use tokens before page-specific values.
- Preserve brand direction.
- Keep contrast accessible.
- Define responsive behavior explicitly.
- Avoid unexplained arbitrary values.
- Keep primitives reusable.
- Do not redesign unrelated UI.

## Implementation checklist

- Inspect existing tokens and primitives.
- Reuse before creating new patterns.
- Cover default, hover, focus, active, disabled, and error states when relevant.
- Check light and dark themes when applicable.
- Update design documentation when decisions change.

## Verification checklist

- Run lint and TypeScript for code changes.
- Report visual checks only when actually performed.
- Report responsive checks only when actually performed.
- Run contrast and keyboard checks when relevant.

## Final report

- Summary.
- Files changed.
- Token or component decisions.
- Verification.
- Issues.
- Anything not tested.

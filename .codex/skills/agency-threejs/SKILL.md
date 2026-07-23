---
name: agency-threejs
description: Use when implementing or reviewing 3D or WebGL work such as Three.js, React Three Fiber, Drei, canvas architecture, scenes, cameras, lighting, models, pointer interaction, scroll-driven camera behavior, or 3D fallbacks.
---

# Agency Three.js

## Purpose

Implement and review 3D and WebGL experiences.

## When to use

- Three.js.
- React Three Fiber.
- Drei.
- Canvas architecture.
- Scenes.
- Cameras.
- Lighting.
- Models.
- Pointer interaction.
- Scroll-driven camera behavior.
- 3D fallbacks.

## When not to use

- Standard UI-only work.
- Motion-only DOM animation.
- Content-only work.
- Decorative 3D without product value.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/three-d-system.md`.
- `docs/storytelling.md`.
- `docs/accessibility.md`.
- `docs/performance.md`.
- `docs/testing.md`.

## Working rules

- Prefer one persistent canvas.
- Keep 3D selective and purposeful.
- Isolate scene logic from standard UI.
- Optimize models and textures.
- Handle lifecycle and cleanup.
- Provide mobile, reduced-motion, and WebGL fallbacks.
- Provide accessible fallback content.
- Avoid multiple unnecessary canvases.
- Do not add dependencies before the relevant implementation step.

## Implementation checklist

- Confirm whether 3D is necessary.
- Inspect scene lifecycle and ownership.
- Define camera and lighting responsibilities.
- Define loading and fallback states.
- Check asset budgets.
- Update 3D documentation when architecture changes.

## Verification checklist

- Run lint and TypeScript.
- Run build.
- Report runtime checks only when performed.
- Report mobile fallback checks only when performed.
- Report reduced-motion checks only when performed.
- Report WebGL failure fallback checks only when performed.
- Report performance checks only when performed.

## Final report

- Summary.
- Scene or architecture decisions.
- Files changed.
- Verification.
- Fallback coverage.
- Anything not tested.

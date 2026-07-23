---
name: agency-motion
description: Use when implementing or reviewing purposeful UI motion, Framer Motion, GSAP, ScrollTrigger, Lenis, page transitions, scroll storytelling, reveal effects, hover motion, or reduced-motion behavior.
---

# Agency Motion

## Purpose

Implement purposeful UI and scroll motion.

## When to use

- Framer Motion.
- GSAP.
- ScrollTrigger.
- Lenis.
- Page transitions.
- Scroll storytelling.
- Reveal effects.
- Hover motion.
- Reduced-motion behavior.

## When not to use

- Static visual styling only.
- 3D scene work.
- Unrelated frontend architecture.
- Decorative animation without narrative value.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/motion-system.md`.
- `docs/storytelling.md`.
- `docs/accessibility.md`.
- `docs/performance.md`.
- `docs/testing.md`.

## Working rules

- Motion must support storytelling or hierarchy.
- Respect Discovery, Energy, and Confidence modes.
- Keep motion logic isolated.
- Avoid layout shifts.
- Provide reduced-motion behavior.
- Simplify motion on mobile.
- Avoid multiple libraries for the same responsibility.
- Do not add dependencies before the relevant implementation step.

## Implementation checklist

- Define trigger, duration, easing, and exit behavior.
- Confirm cleanup for effects and scroll triggers.
- Check interaction with keyboard and focus states.
- Confirm mobile behavior.
- Update motion docs when behavior changes.

## Verification checklist

- Run lint and TypeScript.
- Run build for production-sensitive animation.
- Report browser motion checks only when performed.
- Report reduced-motion checks only when performed.
- Report mobile performance checks only when performed.

## Final report

- Summary.
- Motion behavior.
- Files changed.
- Verification.
- Performance or accessibility notes.
- Anything not tested.

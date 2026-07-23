# Motion System

Motion is planned and not implemented. Do not install or implement motion dependencies until the relevant implementation step.

## Purpose

Motion must support storytelling, hierarchy, orientation, and conversion. Decorative motion without narrative or usability purpose is not allowed.

## Motion modes

- Discovery: slow, atmospheric motion for first impressions and narrative entry.
- Energy: quicker movement for transitions, project reveals, and moments of momentum.
- Confidence: restrained motion for navigation, forms, proof, and conversion areas.

## Duration categories

- Micro: fast feedback for buttons, links, controls, and focus-adjacent interactions.
- Standard: section reveals, cards, menus, and content transitions.
- Narrative: longer scroll-linked or chapter transitions that carry story meaning.

## Easing principles

- Use consistent easing families.
- Favor natural acceleration and clear settling.
- Avoid bounce or playful easing unless a specific brand decision supports it.
- Motion should feel intentional, not mechanical.

## Scroll-trigger principles

- Scroll sequences must reveal or connect content, not hide essential information.
- Pinned sections should be rare and justified.
- Users must retain control and orientation.
- Content must remain accessible without scroll animation.

## Hover and focus rules

- Hover motion should be subtle and fast.
- Focus styles must be visible and not replaced by animation alone.
- Keyboard users should receive equivalent state clarity.
- Touch devices should not depend on hover-only behavior.

## Page transition principles

- Transitions should preserve wayfinding.
- Avoid blocking navigation with long animations.
- Route changes should prioritize perceived speed and content readiness.
- Reduced-motion users should receive instant or simplified transitions.

## Reduced-motion behavior

- Respect `prefers-reduced-motion`.
- Replace complex sequences with opacity, static states, or immediate content.
- Never require animation to understand content order or meaning.

## Mobile simplification

- Reduce scroll-linked complexity on mobile.
- Avoid heavy pinned sections on small screens.
- Prioritize readable content, stable CTAs, and battery-friendly behavior.

## Planned responsibilities

- Framer Motion: UI transitions, component states, presence, and simple route or section transitions.
- GSAP and ScrollTrigger: complex scroll-driven sequences that Framer Motion should not own.
- Lenis: smooth scrolling if the experience requires it and native scrolling remains accessible.

## Performance restrictions

- Avoid layout thrashing and animation of expensive properties.
- Prefer transform and opacity when possible.
- Keep long-running animations limited.
- Test motion on mobile hardware before treating it as production-ready.
- Avoid motion that competes with 3D rendering.

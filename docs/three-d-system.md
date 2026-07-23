# 3D System

3D is planned and not implemented. Do not install or implement 3D dependencies until the relevant implementation step.

## Purpose of 3D

3D should create a memorable agency signature, clarify transformation, or enrich selected project stories. It must be selective, purposeful, accessible, and performant.

## Approved use cases

- Central transforming hero object.
- Subtle spatial metaphor for the homepage narrative.
- Project-specific 3D when the project story benefits from it.
- Lightweight interactive object that supports exploration.
- Static rendered fallback when runtime 3D is unnecessary.

## Central transforming hero object

- A single hero object may represent creative transformation across the opening narrative.
- The object should have clear states, restrained interaction, and strong fallback imagery.
- It must not delay access to headline, CTA, or core content.

## Persistent canvas direction

- Prefer one carefully managed persistent canvas for major 3D storytelling.
- Share scene state across chapters only if it reduces load and improves continuity.
- Avoid multiple unnecessary canvases.

## Scene lifecycle principles

- Load only what the current experience needs.
- Pause or reduce rendering when offscreen.
- Dispose geometry, materials, textures, and listeners when no longer needed.
- Keep loading, error, and fallback states visible and useful.

## Camera and lighting principles

- Camera movement should support story beats and orientation.
- Avoid disorienting motion and excessive parallax.
- Lighting should reinforce the premium cinematic direction.
- Scenes need stable framing across mobile and desktop.

## GLB model and texture rules

- Optimize GLB assets before use.
- Keep polygon counts purposeful.
- Compress textures and avoid oversized maps.
- Use meaningful filenames and document model ownership.
- Provide poster or image fallback assets.

## Fallbacks

- Mobile fallback: simplify geometry, reduce effects, or replace with static media when needed.
- Reduced-motion fallback: freeze or simplify camera/object motion.
- WebGL failure fallback: show accessible static media and equivalent copy.
- Accessibility fallback content: preserve all narrative meaning in HTML content outside the canvas.

## Planned responsibilities

- Three.js: low-level 3D primitives and rendering concepts.
- React Three Fiber: React integration and scene composition.
- Drei: helpers for cameras, controls, loading, environment, and common patterns.

## Performance budget principles

- Protect Core Web Vitals and route interactivity.
- Avoid blocking text and CTA rendering on 3D assets.
- Limit draw calls, shader complexity, post-processing, and texture memory.
- Test on mobile and low-power devices before production use.
- Disable or simplify effects when performance is constrained.

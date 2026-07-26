# Motion System

Motion is planned and not implemented. Do not install Framer Motion, GSAP, ScrollTrigger, Lenis, or any other motion dependency until the relevant implementation step.

## Purpose

Motion should make the agency experience feel cinematic, clear, and responsive. It must support the homepage story, project case studies, navigation, media presentation, and conversion flows without delaying access to content or becoming required for comprehension.

## Motion principles

1. Motion supports storytelling, hierarchy, and feedback.
2. Motion must not delay access to content.
3. Motion must not be required to understand the interface.
4. The same interaction should use a consistent motion pattern.
5. Motion intensity should match narrative context.
6. Readability and control take priority over spectacle.
7. Motion must degrade gracefully on mobile and reduced-motion environments.

## Motion modes

### Discovery

Use for:

- Hero.
- Major introductions.
- Atmospheric transitions.
- First reveal of a chapter.

Direction:

- Slow.
- Controlled.
- Spacious.
- Subtle depth.
- Minimal simultaneous movement.

### Energy

Use for:

- Transformation moments.
- Process sequences.
- Campaign execution.
- Selected project transitions.

Direction:

- Quicker.
- Directional.
- Connected to scroll or interaction.
- Still controlled.
- Avoid chaotic motion.

### Confidence

Use for:

- Results.
- Team.
- Testimonials.
- Final CTA.
- Interface feedback.

Direction:

- Calm.
- Precise.
- Short.
- Stable.
- Clear end state.

## Motion tokens

These semantic tokens are planned only. Final values must be selected and tested during implementation.

### Duration tokens

- `motion-duration-instant`: immediate state feedback and reduced-motion replacements.
- `motion-duration-fast`: button, link, control, focus-adjacent, and small UI feedback.
- `motion-duration-base`: menus, cards, media controls, and standard component transitions.
- `motion-duration-slow`: section reveals, project-card previews, and calm narrative movement.
- `motion-duration-cinematic`: major storytelling transitions and scroll-linked chapter moments when justified.

### Easing tokens

- `motion-ease-standard`: default UI transitions with natural acceleration and settling.
- `motion-ease-enter`: content entering or becoming visible.
- `motion-ease-exit`: content exiting without blocking interaction unnecessarily.
- `motion-ease-emphasized`: major narrative or project transitions that need stronger direction.
- `motion-ease-linear`: scroll-synced, progress-based, or media-timed movement.

### Distance tokens

- `motion-distance-xs`: small control shifts and pressed states.
- `motion-distance-sm`: compact reveals, menus, and card feedback.
- `motion-distance-md`: section reveals and media entrances.
- `motion-distance-lg`: cinematic transitions used sparingly for chapter or project movement.

### Stagger tokens

- `motion-stagger-tight`: compact UI groups, metadata, tags, and control sets.
- `motion-stagger-base`: cards, lists, and section content groups.
- `motion-stagger-loose`: major storytelling statements or project media sequences.

## Library responsibilities

### CSS

Use for:

- Simple hover.
- Focus.
- Color.
- Opacity.
- Small transform transitions.
- Theme-safe component state changes.

### Framer Motion

Use for:

- Component entry and exit.
- Layout transitions.
- UI state transitions.
- Route-level transition orchestration when needed.
- Accessible presence management.

### GSAP and ScrollTrigger

Use for:

- Complex scroll-linked storytelling.
- Pinned chapter sequences.
- Coordinated multi-element timelines.
- Advanced project transitions.
- Scroll-driven camera coordination.

### Lenis

Use only for:

- Consistent smooth-scroll behavior when justified and when native scrolling is insufficient.

Rules:

- Do not use multiple tools for the same simple effect.
- Do not use GSAP for ordinary button hover.
- Do not require Framer Motion for static primitives.
- Do not add Lenis unless native scroll is insufficient.
- Dependencies remain planned until the relevant implementation step.

## Motion triggers

Approved trigger types:

- Viewport entry.
- Scroll progress.
- Pointer interaction.
- Keyboard interaction.
- Route change.
- Content state change.
- Media state change.

Rules:

- Entry animations should usually run once unless replay adds value.
- Content must remain available when scripts fail.
- Keyboard users must receive equivalent state feedback.
- Autoplay behavior must not surprise users.
- Scroll-linked motion must not hijack scrolling.
- Pinned sections need clear start and end conditions.
- Sticky and pinned behavior needs a non-pinned fallback.

## Reveal patterns

Approved patterns:

- Fade.
- Fade and translate.
- Mask or clip reveal.
- Scale with restraint.
- Sequential stagger.
- Media wipe.
- Controlled perspective transition.

Rules:

- Avoid combining too many effects.
- Avoid large blur as the default reveal.
- Avoid excessive rotation.
- Avoid long delays before content appears.
- Avoid animating every section identically.
- Text should remain sharp and readable.

## Text motion

- Hero text may reveal by line or phrase.
- Body paragraphs should not animate word-by-word by default.
- Vietnamese and English line wrapping may differ.
- Animation must not depend on hardcoded line counts.
- Text remains selectable.
- Screen-reader content must not be duplicated.
- Essential text must exist in the DOM before animation.
- Reduced-motion mode shows final text immediately.

## Navigation and UI motion

Planned interaction coverage:

- Menu open and close.
- Active navigation state.
- Button and link feedback.
- Theme control feedback.
- Language switcher feedback.
- Modal or overlay behavior when introduced later.

Rules:

- Interactions must respond quickly.
- Exit motion must not block navigation unnecessarily.
- Focus management must not wait for decorative motion.
- Loading indicators must communicate progress clearly.
- No essential behavior may be hover-only.

## Project motion

Approved project interactions:

- Image reveal.
- Media-to-detail transition.
- Perspective depth.
- Gallery slide transition.
- Next-project transition.
- Project-card preview.

Rules:

- Project media remains the focus.
- Do not apply identical 3D tilt to every card.
- Avoid motion that changes verified project imagery.
- Video previews must have static poster fallback.
- Transitions must preserve clear navigation state.
- Deep links and browser back behavior must remain reliable.

## Scroll storytelling

- Chapter progress should feel connected.
- Scroll position controls narrative progression only where useful.
- Avoid excessive pinning.
- Avoid trapping users in long scroll scenes.
- Provide normal document flow on compact screens.
- Content order must remain understandable without animation.
- Scroll progress should not depend on exact viewport height.
- Resize and orientation changes must be handled safely.

## 3D coordination

- DOM motion and 3D camera movement need one clear source of progression.
- 3D must not compete with text reveals.
- Camera motion should be slower than essential UI feedback.
- Theme changes must not restart the motion narrative.
- Expensive 3D updates should pause offscreen.
- Reduced-motion mode limits camera movement and object transformation.
- WebGL fallback preserves the same narrative order.

## Reduced-motion behavior

Reduced motion is a complete experience, not merely shorter durations.

- Respect `prefers-reduced-motion`.
- Remove non-essential parallax.
- Replace scroll-linked transforms with static states or short fades.
- Avoid camera travel.
- Avoid large zoom.
- Disable smooth scrolling.
- Disable long crossfades.
- Keep essential feedback immediate.
- Keep manual controls functional.
- Do not remove content.

## Mobile motion

- Reduce simultaneous movement.
- Shorten travel distance.
- Avoid long pinned sequences.
- Reduce particle or background motion.
- Prefer vertical flow.
- Avoid hover-based previews.
- Preserve touch responsiveness.
- Account for mobile browser chrome.
- Pause nonessential motion when the page is not visible.

## Performance rules

- Prefer transform and opacity.
- Avoid layout-thrashing properties.
- Clean up timelines, observers, and event listeners.
- Avoid unnecessary global animation loops.
- Pause offscreen work.
- Lazy-load motion-heavy sections when appropriate.
- Monitor main-thread and GPU cost.
- Do not animate high-resolution media without need.
- Avoid excessive `will-change`.
- Measure before adding complexity.

## Accessibility rules

- Motion cannot block focus.
- Focus order remains stable.
- No flashing or rapid flicker.
- Provide pause controls for long or autoplay motion when relevant.
- Animation must not cause loss of context.
- Live regions should not announce decorative state changes.
- Screen-reader flow remains independent of visual sequencing.
- Reduced-motion behavior must be testable.

## Open motion decisions

- Exact duration values.
- Exact easing curves.
- Exact scroll-smoothing strategy.
- Whether Lenis is needed.
- Exact route-transition behavior.
- Exact page-transition treatment.
- Exact pinned-section count.
- Exact mobile animation thresholds.
- Exact project-detail transition technique.

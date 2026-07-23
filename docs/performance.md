# Performance

This document defines planned targets and principles. No performance scores are claimed as achieved.

## Core Web Vitals

- Optimize for strong Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift.
- Protect first content, route interactivity, and mobile experience before adding rich effects.
- Treat regressions in Core Web Vitals as product issues.

## JavaScript and bundle discipline

- Keep client JavaScript limited to required interactivity.
- Use Server Components by default.
- Avoid installing dependencies without implementation need and justification.
- Split heavy runtime systems away from simple content routes.

## Images

- Use responsive images and appropriate formats.
- Prefer optimized image delivery for project media, team portraits, and editorial assets.
- Avoid oversized source images.
- Provide useful dimensions to reduce layout shift.

## Video loading

- Avoid autoplay unless justified and accessible.
- Use posters, lazy loading, and compressed formats.
- Do not block key content or CTAs on video loading.
- Provide alternatives for reduced-motion or constrained devices.

## Font loading

- Limit font families, weights, and styles.
- Use Next.js font loading where appropriate.
- Avoid layout shift from font swaps.
- Confirm Vietnamese and English glyph support.

## Lazy loading

- Lazy load below-the-fold media, heavy sections, and optional effects.
- Keep critical content and navigation immediately available.
- Avoid lazy loading elements required for initial comprehension.

## Dynamic imports

- Use dynamic imports for heavy client-only features such as complex motion, 3D scenes, analytics tools, or rich galleries when implemented.
- Provide loading and fallback states.
- Do not use dynamic imports to hide architecture problems.

## Third-party scripts

- Add third-party scripts only with clear business need.
- Load analytics, embeds, and tracking scripts with minimal impact.
- Review privacy, consent, and performance implications.

## 3D budgets

- Keep model size, texture memory, draw calls, shader complexity, and post-processing limited.
- Compress GLB models and textures.
- Prefer static or simplified fallbacks on constrained devices.

## Canvas lifecycle

- Use as few canvases as practical.
- Pause or reduce rendering when offscreen.
- Dispose scene resources when unmounted.
- Avoid canvas work competing with route transitions or input responsiveness.

## Mobile fallbacks

- Simplify motion, media, and 3D on mobile when needed.
- Prioritize readable content, stable navigation, and conversion paths.
- Test on representative mobile hardware before production release.

## Monitoring

- Plan production monitoring for Core Web Vitals, route performance, errors, and conversion events.
- Treat analytics and monitoring as planned, not implemented in this step.

## Performance testing

- Run build checks before release.
- Use browser profiling for animation and 3D work.
- Test responsive images, video, script loading, and fallback behavior.
- Report measured results only after tests are actually run.

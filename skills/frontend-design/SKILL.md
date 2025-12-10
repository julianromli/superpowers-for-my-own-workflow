---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

## Task Dispatch

For complex frontend implementations, dispatch to specialist droids:

### When to Dispatch

**Simple components/pages**: Implement directly using the aesthetic guidelines above.

**Complex implementations**: Dispatch to `frontend-developer` with the design direction:

```
TASK (frontend-developer: "Implement [component/page] with the following aesthetic direction:
- Tone: [chosen aesthetic - e.g., brutalist/raw, luxury/refined]
- Typography: [specific font choices and pairings]
- Color palette: [dominant colors, accents, CSS variables]
- Motion: [animation approach - staggered reveals, hover effects]
- Layout: [spatial composition - asymmetry, grid-breaking, etc.]
- Special effects: [textures, gradients, overlays]

Technical requirements:
- Framework: [Next.js/React/Vue/etc.]
- Styling: [Tailwind/CSS modules/styled-components]
- Components: [shadcn/ui, Radix, custom]

Implement production-ready code that is visually distinctive and memorable.")
```

### Dispatch Decision Tree

1. **Is this a full page or multi-component feature?**
   - Yes → Dispatch to `frontend-developer`
   - No → Implement directly

2. **Does it require complex state management or API integration?**
   - Yes → Dispatch to `frontend-developer`
   - No → Implement directly

3. **Is it a design system or component library?**
   - Yes → Dispatch to `frontend-developer` with design tokens
   - No → Implement directly

### Post-Implementation Validation

After implementation, optionally dispatch for visual validation:

```
TASK (ui-visual-validator: "Validate the implemented [component/page]:
- Check adherence to the intended aesthetic direction
- Verify responsive behavior across breakpoints
- Assess accessibility (contrast, focus states)
- Identify any generic/AI-slop patterns that slipped through
- Report deviations from the design vision")
```

## Remember

You are capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

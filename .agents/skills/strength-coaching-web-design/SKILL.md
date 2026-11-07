---
name: strength-coaching-web-design
description: Design and implement consistent, accessible pages for a strength coaching website using editorial minimalism with subtle scientific influence. Use for homepage redesigns, page creation, UI refactors, responsive styling, component changes, and visual QA in this project.
---

# Strength Coaching Web Design Skill

## Purpose

Apply the project's approved design system to build a cohesive strength coaching website. The brand serves beginners, general strength clients, experienced lifters, competitive powerlifters, and athletes. The style is **editorial minimalism with subtle scientific influence**, not conventional aggressive gym marketing.

## Required source of truth

1. Locate and read **`design-system.md` at the repository root** before making design decisions. In the provided folder layout, this skill is at `.agents/skills/strength-coaching-web-design/SKILL.md` and the design system is at `../../../design-system.md` relative to this file.
2. Treat `design-system.md` as authoritative for brand direction, typography, color, spacing, layouts, imagery, components, accessibility, and content constraints.
3. Inspect existing project conventions and approved content. Preserve real business details, current integrations, and tested functionality.
4. If `design-system.md` is unavailable, **report the missing dependency rather than inventing a new visual system**. Do not continue with an unrelated brand direction.

## When to use

Activate for website-related requests that involve visual design, component styling, page redesign, new landing pages, responsive behavior, interaction design, content presentation, visual audits, and design-system enforcement. Not necessary for unrelated backend-only changes.

## Workflow

### 1. Inspect

- Identify framework, router, styling method, component library, deployment constraints, and existing tokens.
- Read `design-system.md`; inspect relevant pages, reusable components, assets, and live copy.
- Identify existing navigation, forms, analytics, SEO metadata, booking/contact integrations, and other behaviors that must remain intact.
- Inventory available photos and media. Do not assume the reference websites' assets may be used.

### 2. Plan the change

- State the page's primary audience intent, one-sentence core message, and primary CTA.
- Sketch section order and mobile stacking before implementation.
- Identify reusable components and which existing tokens should be applied.
- Flag missing source material (credentials, proof, photos, pricing, testimonials) without inventing any.
- If a design conflict exists, follow the design system unless the user's current instruction explicitly overrides it; note any intentional deviation.

### 3. Implement in the existing stack

- Prefer the project's established framework and CSS/component conventions. Do not introduce Tailwind, a new UI library, or a page builder solely for convenience.
- Centralize colors, type, spacing, containers, and radii in the existing token mechanism; avoid ad hoc values.
- Build semantic reusable components when repetition or maintainability warrants it; avoid premature abstraction.
- Use Manrope for headings and Inter for body/UI unless existing project constraints require fallback; optimize font loading.
- Prioritize readable copy, deliberate whitespace, authentic imagery, and clear CTA hierarchy.
- Use charting/biomechanics details only when content is accurate, educational, and supported.
- Do not change business operations, services, claims, forms, analytics, or routes without a clear requirement.

### 4. Validate

Where the environment supports it, run type checking, linting, build/tests, and visual previews. Check at minimum around **375px, 768px, and 1440px** widths (and narrower when needed).

Verify:

- Typography hierarchy, spacing, container alignment, image crops, and CTA visibility.
- No horizontal overflow, clipped headings, overlapping elements, or mobile menu failures.
- Accessible headings/landmarks, labels, keyboard navigation, focus states, contrast, and reduced-motion behavior.
- No invented claims, credentials, citations, testimonials, or client outcomes.
- Existing forms, links, navigation, SEO, and analytics were preserved.
- Reasonable page weight, responsive images, and layout stability.

### 5. Report

Provide a compact implementation summary with:

1. What changed and which files/components were modified.
2. What design-system rules were applied.
3. Which checks actually ran and their results.
4. Remaining blockers, placeholders, or items needing real brand/content assets.

Do not claim to have tested browsers, devices, integrations, or screenshots that were not actually available.

## Non-negotiable design rules

- Editorial minimalism first; scientific precision is selective and purposeful.
- Outcome-led messaging that welcomes new lifters without alienating advanced lifters.
- Light off-white/charcoal foundation, restrained blue accent, consistent typography.
- No generic black/red gym aesthetics, exaggerated slogans, dashboard-like clutter, decorative graphs, or gratuitous motion.
- Scientific claims are qualified where needed and backed by real evidence; no fabricated sources.
- Real client photography and testimonials require suitable rights/permission.
- Use progressive disclosure for technical explanations.
- Preserve existing functionality and accessibility.

## Reference handling

- Linear: hierarchy and restraint, not SaaS mimicry.
- Future: premium coaching and clarity, not its product-specific claims.
- Barbell Medicine: technical credibility and information depth, not a direct visual clone.

Use a supplied screenshot or precise user feedback over vague assumptions about what a live reference site looks like. When reference URLs cannot be opened, proceed from the written design system and disclose that the pages were not inspected.

## Stop conditions and decision policy

Do not stop for cosmetic preferences already defined here. Make a coherent first implementation and expose it for review. Ask only when a missing fact materially changes the business offer, CTA destination, legal compliance, or truthfulness. If assets or facts are absent, implement the surrounding layout with clearly marked non-publication placeholders and report them.

Never silently replace original business copy, delete existing content, or change functional flows solely to make a screenshot look cleaner.

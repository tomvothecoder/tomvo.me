# Homepage Redesign Prompt

Redesign the homepage of my personal strength coaching website using the existing codebase. **Implement the redesign**, rather than only producing a concept or written critique.

## Project context

I coach resistance training, general strength, and powerlifting, with an emphasis on exercise science and thoughtful, individualized training. My audience includes people beginning resistance training, general-population clients, experienced lifters, competitive powerlifters, and athletes.

The site should communicate **approachable expertise**. Lead with the broad benefit of getting stronger, then establish technical credibility through the coaching approach. Do not make it look like a hardcore powerlifting-only gym or an academic research lab.

## Required design direction

**Editorial minimalism with subtle scientific influence.**

Prioritize typography, whitespace, purposeful layouts, authentic strength-training photography, understated color, and disciplined information hierarchy. Use fine dividers, occasional technical labels, simple educational diagrams, or meaningful data only when they genuinely improve understanding.

The result should feel refined and modern, yet grounded and human. Avoid aggressive fitness marketing, generic gym templates, app-dashboard styling, exaggerated performance claims, excessive cards, decorative graphs, gradients, and unnecessary animation.

## Read and enforce project instructions

1. Read the repository-root `design-system.md` completely. Treat it as the source of truth for typography, colors, spacing, components, and accessibility.
2. Apply `.agents/skills/strength-coaching-web-design/SKILL.md` when implementing design work.
3. Inspect `design/references/` and, if present, its `README.md` or reference notes. **Open the actual images**, not just their filenames or links, before making layout decisions.
4. Inspect the existing homepage, shared components, styles, actual services/copy, images, routing, forms, analytics, and SEO before making changes.
5. Reuse the existing framework, styling stack, and content/integrations wherever possible. Do not introduce a new framework or UI library without necessity.

### How to use the `design/` folder

Expected project layout (paths relative to the repository root):

```text
.
├── design-system.md                         # Authoritative design rules
├── redesign-prompt.md                       # This implementation brief
├── .agents/
│   └── skills/strength-coaching-web-design/
│       └── SKILL.md                         # Agent workflow and validation
└── design/
    └── references/                          # Inspiration only, NOT production assets
        ├── 01-forner-editorial.jpg
        ├── 02-linear-typography.avif
        ├── 03-future-coaching.png
        ├── 04-juggernaut-strength.webp
        ├── 05-intervalcoach-analytics.png
        └── README.md                        # Optional source links and reference notes
```

- Place the five downloaded screenshots inside `design/references/` with the filenames above. The reference ZIP may include a gallery, source links, and a download script **without containing the image binaries**. Verify which image files actually exist; do not assume they were included.
- If a screenshot cannot be opened, use its documented guidance below and flag it as unreviewed. Do not claim to have visually inspected missing files. Do not halt the whole redesign solely because a reference is unavailable.
- Treat this folder as a **read-only mood board**, not the site's asset library. Do **not** import, embed, publish, or copy these screenshots into the website. Put authorized original training photos in the project's normal public/media asset location.
- Follow the design system when screenshot colors, fonts, or UI patterns conflict with it. Prioritize reference _principles_, not pixel-level imitation.
- Before coding, form a short design plan noting the role each available reference plays in the page and which traits you are deliberately avoiding. Then implement; do not stop after the plan.

## Visual reference instructions: what to borrow from each image

**Reference hierarchy:** Forner Studio and Linear establish the visual identity. Future informs coaching UX. JuggernautAI and IntervalCoach are narrow, supporting references only. Do not average five distinct brand styles together.

### 01. Forner Studio — primary editorial art direction

**File:** `design/references/01-forner-editorial.jpg`  
**Reference source:** https://www.awwwards.com/sites/forner-studio

**Borrow:**

- Warm, off-white canvas and quiet, high-end visual tone.
- Generous negative space around headings, photography, and section transitions.
- Editorial image/text balance, intentional asymmetry, and clean alignments.
- A restrained, magazine-like rhythm rather than repetitive marketing cards.

**Apply to:** Hero composition, section spacing, photography placement, full-page pacing.

**Avoid:** Furniture/fashion-specific styling, decorative scripts, aggressively cropped words, or copying the layout exactly. Translate the editorial feel into a welcoming strength-coaching context.

### 02. Linear — typography and interface precision

**File:** `design/references/02-linear-typography.avif`  
**Reference source:** https://linear.app/

**Borrow:**

- Strong typography hierarchy: concise headline, controlled supporting copy, precise alignment.
- Consistent grid, spacing cadence, and deliberate content density.
- Understated navigation, buttons, fine borders/dividers, and clear interactive states.
- Subtle technical polish without ornamental UI.

**Apply to:** Hero text hierarchy, header/nav, CTA styling, component consistency, text alignment.

**Avoid:** Copying dark mode, SaaS dashboard elements, ultra-small/low-contrast text, or software-product aesthetics. Retain the design system's light neutral palette and Manrope/Inter specification.

### 03. Future — approachable coaching and conversion UX

**File:** `design/references/03-future-coaching.png`  
**Reference source:** https://future.co/

**Borrow:**

- A clear, outcome-led coaching proposition understandable in seconds.
- Human-centered presentation and credible, relatable training imagery.
- Straightforward explanation of how coaching works and what clients should do next.
- One prominent primary CTA, supported by a logical progression through the page.

**Apply to:** Headline clarity, coaching service explanation, process section, CTA hierarchy.

**Avoid:** Copying Future's copy, pricing/subscription model, proprietary brand visuals, unsupported services, or lifestyle-only imagery that obscures actual resistance training.

### 04. JuggernautAI — authentic barbell-training subject matter only

**File:** `design/references/04-juggernaut-strength.webp`  
**Reference source:** https://www.juggernautai.app/

**Borrow:**

- Recognizable strength-training subject matter: squat, bench press, deadlift, gym coaching, actual barbell practice.
- The sense that the coaching can support serious lifting, without requiring visitors to be competitive athletes.
- Concrete exercise-specific imagery or explanations when they support the service.

**Apply to:** Selection and direction of **original, properly licensed** strength-training photography; relevant coaching content.

**Avoid:** Aggressive dark/red/blue styling, high-intensity slogans, heavy badges, powerlifting-exclusive positioning, AI-product claims, or reusing the screenshot's photographs.

### 05. IntervalCoach — scientific information design only

**File:** `design/references/05-intervalcoach-analytics.png`  
**Reference source:** https://www.intervalcoach.app/

**Borrow:**

- Legible, low-noise visualizations: thin chart strokes, readable axes/labels, restrained accent colors.
- A tidy visual language for _real_ training progression, if data are available.
- Scientific clarity expressed through information structure, not lab-themed decoration.

**Apply to:** A small progression illustration, coaching methodology diagram, or verified training metric **only if it materially helps explain the service**.

**Avoid:** Dashboard-like homepage sections, fabricated progress graphs, unexplained metrics, decorative graphs, or using endurance/cycling data as purported lifting results. If no accurate dataset or educational rationale exists, **omit the chart entirely**.

### Additional content-only reference: Barbell Medicine

**Website:** https://www.barbellmedicine.com/coaching/

Use as background inspiration for evidence-informed strength coaching, nuanced explanations, and educational credibility. **Do not** treat it as one of the five visual screenshots or copy its site design, research claims, credentials, or client results. Any scientific assertion in our copy must be defensible and sourced where appropriate.

### Synthesis rules

- The primary aesthetic is **Forner's editorial restraint + Linear's typographic discipline**.
- Add **Future's approachable coaching UX**, then use JuggernautAI only for strength-training relevance and IntervalCoach only for meaningful information design.
- A predominantly light page with warm neutral surfaces, charcoal typography, and a restrained accent should remain recognizable throughout.
- Do not reproduce competitor compositions, logos, text, photos, screenshots, or graphical assets.
- The homepage should welcome beginners without losing credibility among experienced lifters, powerlifters, and athletes.

## Homepage goals

Visitors should quickly understand:

1. What I offer: individualized resistance/strength coaching.
2. Who it is for: from new lifters to competitive athletes, without splitting the identity into four brands.
3. Why my approach is credible: deliberate programming, evidence-informed decisions, and ongoing progression.
4. What to do next: one clear primary action using an existing real conversion route.

**Illustrative hero copy (refine only if supported by existing business content):**

- Eyebrow: `INDIVIDUALIZED STRENGTH COACHING`
- Headline: `Get stronger. Train with purpose.`
- Supporting text: `Personalized resistance training informed by exercise science, built around your goals and experience.`
- CTA: `Explore coaching` (replace with an actual available destination; use consultation language only if it is truly offered).

## Preferred section flow

Build the shortest convincing homepage that covers the following where truthful and relevant:

1. Minimal header with clear navigation and CTA.
2. Outcome-led hero with expressive typography and authentic training imagery (if available).
3. Concise "who I coach" section that welcomes beginners and advanced lifters alike.
4. "How coaching works" section explaining assessment, programming, feedback, and progression, matched to real operations.
5. "My approach" section explaining practical exercise-science principles without excess jargon.
6. Real coaching offering and credible proof (only verified credentials, outcomes, or testimonials).
7. FAQ and final CTA where they help visitors decide.
8. Minimal, accessible footer.

You may combine or remove sections to improve focus. Do not fill space with invented statistics or fake testimonials.

## Implementation requirements

- Use the design system's Manrope/Inter type hierarchy, neutrals, restrained accent, grids, and spacing tokens, subject to current project constraints.
- Maintain responsive quality at approximately 375px, 768px, and 1440px, including accessible mobile navigation.
- Meet WCAG 2.2 AA expectations where applicable: semantics, contrast, focus, keyboard access, readable content, and reduced-motion support.
- Preserve existing forms, routes, SEO, analytics, and integrations; do not break functionality in pursuit of design aesthetics.
- Use available licensed/authentic imagery. If assets are missing, use clearly labeled placeholders and identify what photography is needed before publication. Never take images from reference brands.
- Never invent credentials, client results, offerings, quotes, research, or scheduling links.
- Keep the implementation maintainable with shared design tokens and components instead of per-section one-off styling.

## Implementation and visual QA workflow

1. Inspect the existing site, design system, skill, and all available reference screenshots.
2. Draft a **brief** page-level art-direction plan describing the intended hero layout, type hierarchy, section pacing, imagery, CTA, and how each reference will be applied. Identify conflicts with the existing codebase.
3. Implement the full homepage in the existing stack. Do not stop after producing the plan or a static mockup.
4. Run available build, typecheck, lint, and tests. Check functional navigation, forms, and conversion routes.
5. Render and capture screenshots at **1440px desktop, 768px tablet, and 375px mobile** where browser tooling is available. Inspect actual output, not just source code.
6. Compare against the design system and relevant **qualities** of the reference images: heading scale/line wraps, breathing room, grid/alignment, crop choices, CTA prominence, visual weight, mobile stacking, and readable charts (if any).
7. Fix meaningful discrepancies, then re-render and inspect again. Specifically check clipping, horizontal overflow, low contrast, clutter, repetitive cards, and small-screen usability.
8. If automated screenshot/browser inspection is unavailable, say so explicitly and provide reproducible local review steps; never claim a visual QA pass that was not performed.

## Deliverable and acceptance criteria

Make the code changes for a complete, responsive homepage. Then provide:

- A concise summary of files and components changed.
- How the final design uses the five references selectively, especially Forner + Linear for the visual foundation.
- How editorial minimalism and restrained scientific visual elements were implemented.
- Actual checks run (lint/build/tests, responsive review, accessibility checks) and results.
- Any missing/unreadable reference images, factual content gaps, imagery placeholders, and items requiring approval.

**Success condition:** The homepage immediately communicates modern, evidence-informed, individualized strength coaching to a broad audience, looks intentional and minimal rather than templated, and retains working navigation and conversion flows.

### Automated Visual Reference Collection

Before implementing the redesign, use the available browser automation tools (preferably Playwright) to visit the five reference websites and capture screenshots of the relevant sections.

Save screenshots to `design/references/` using descriptive filenames.

For each reference, identify:

- Specific typography, spacing, and layout decisions worth adopting.
- Relevant visual patterns and their application to the homepage.
- Elements that should not be copied.

Do not capture entire websites unnecessarily. Prioritize homepage hero sections, navigation, content layouts, and relevant examples of scientific visualization.

If browser access is unavailable or a website blocks automated capture, use any existing local reference images and the documented visual descriptions. Report missing references rather than claiming to have inspected them.

After implementing the redesign, capture screenshots of the local homepage at 375px, 768px, and 1440px widths. Compare the results against the references and design system, then correct significant visual inconsistencies.

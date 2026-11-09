# Strength Coaching Website Design System

**Version:** 1.0  
**Status:** Applied to the coaching homepage; see implementation notes below.  
**Scope:** Marketing website for individualized resistance training, strength coaching, powerlifting, and athletic performance.  
**Core direction:** **Editorial minimalism with subtle scientific influence.**

## 1. Brand and design brief

### Positioning

Present strength coaching as a thoughtful, individualized, evidence-informed process. The website must be accessible to people beginning resistance training and credible to experienced lifters, competitive powerlifters, and athletes.

**Primary promise:** Help people get stronger through purposeful, individualized training.  
**Supporting differentiator:** Coaching decisions are informed by exercise science, practical experience, and the client's goals and response to training.

The homepage should lead with the common outcome (**getting stronger**) rather than trying to name every audience in the hero. Different training contexts can appear in subsequent sections.

### Brand attributes

- **Clear:** Plain language, meaningful headings, one primary decision per section.
- **Measured:** Calm confidence; no hyperbole or guaranteed outcomes.
- **Precise:** Consistent grids, spacing, terminology, and component behavior.
- **Human:** Real training environments, individual goals, approachable explanations.
- **Evidence-informed:** Scientific substance where it clarifies a coaching decision, not ornamental laboratory graphics.

### Visual balance

Use roughly **80% editorial restraint / 20% athletic or scientific expression** as an art-direction heuristic, not a layout quota. Let typography, whitespace, composition, and photography carry the design. Use thin rules, discrete labels, simple charts, and occasional movement annotations only when justified by content.

### Avoid

Aggressive black/red gym branding, flame or lightning motifs, oversized motivational slogans, exaggerated claims, generic stock fitness images, dense dashboards, faux research diagrams, unnecessary glassmorphism, gradients, floating cards, parallax, scroll-jacking, and decorative animation.

## 2. Audience and content strategy

| Audience | What they need to understand quickly | How to communicate it |
| --- | --- | --- |
| New lifters | Coaching is approachable and tailored to their starting point | Plain language, process overview, low-friction CTA |
| General strength clients | Program fits goals, life, and progression | Individualization, consistency, practical outcomes |
| Experienced lifters | Programming is rigorous, not generic | Progression, feedback, training decisions, transparent methodology |
| Competitive powerlifters | Specificity and performance demands are understood | Relevant coaching details and authentic strength imagery |
| Athletes | Training accounts for performance context | Goal-based programming and relevant sport demands |

**Content hierarchy:** Outcome → how coaching works → who it helps → coaching approach/evidence → real proof (only when available) → CTA.

**Progressive disclosure:** Keep the core pages clear to beginners. Link to deeper technical explanations, FAQs, or articles instead of putting physiology lectures in primary conversion copy.

**Example voice:** “Get stronger. Train with purpose.” / “Individualized strength coaching informed by exercise science.” These are starting points, not claims that must replace existing approved business copy.

**Tone:** Direct, approachable, technically competent, specific. Prefer “adjust training based on progress and recovery” to “optimize physiological adaptations through advanced periodization methodology.”

**Claims policy:** Never invent credentials, client results, testimonials, statistics, research citations, services, prices, scheduling options, or guarantees. Distinguish evidence from coaching judgment. If showing an illustrative chart, label it as illustrative and do not imply it depicts a client outcome.

## 3. Design foundations

### Color tokens

Light mode is the default. Use color sparingly and semantically.

| Token | Hex | Use |
| --- | --- | --- |
| `--color-bg` | `#FAFAF8` | Main off-white canvas |
| `--color-surface` | `#FFFFFF` | Panels, forms, selective content blocks |
| `--color-text` | `#1D2226` | Primary headings and body text |
| `--color-muted` | `#646B70` | Supporting text, metadata |
| `--color-border` | `#E2E4E2` | Subtle dividers and control borders |
| `--color-accent` | `#3157CC` | Primary CTA, links, active controls, select data highlights |
| `--color-accent-hover` | `#2444AA` | CTA hover state |
| `--color-focus` | `#3157CC` | Visible focus ring |

For these initial pairings, primary text on background is approximately **15.35:1**, muted text on background **5.18:1**, and white on accent **6.24:1**. Re-check contrast whenever colors, opacity, or backgrounds change. Do not use low-opacity text as a design shortcut.

**Application:** Predominantly background/surface neutrals. One accent hue, not one accent color per audience. A dark photographic section can appear occasionally if it serves content and maintains contrast.

### Typography

- **Headings/display:** Manrope, fallback `system-ui, sans-serif`.
- **Body/UI:** Inter, fallback `system-ui, sans-serif`.
- Load only the font weights actually used; use `font-display: swap` and self-host when feasible.
- Use sentence case for most headings; uppercase sparingly for short labels.
- Tighten tracking on large display text only. Never tighten body text to mimic a graphic treatment.

| Role | Desktop | Mobile | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | 64px | 40px | 700 | 1.06–1.12 | -0.035em |
| H2 | 44px | 32px | 600–700 | 1.12–1.18 | -0.025em |
| H3 | 26px | 22px | 600 | 1.2–1.3 | -0.015em |
| Intro / lead | 20px | 18px | 400 | 1.5 | normal |
| Body | 18px | 16px | 400 | 1.55–1.65 | normal |
| Supporting / UI | 14px | 14px | 400–600 | 1.4–1.5 | normal |
| Eyebrow / meta | 12px | 12px | 500–600 | 1.4 | 0.06em, optional uppercase |

Use responsive `clamp()` values where the stack supports them. Avoid text that is too small to read, especially chart labels and mobile metadata. Restrict long paragraphs to approximately **60–70 characters per line**; short hero text can be narrower.

### Layout

- Max main content width: **1200px**; centered in the viewport.
- Article/prose column: **680–760px** maximum.
- Gutter: **24–32px desktop**, **20–24px tablet**, **16–20px mobile**.
- Grid: **12 columns desktop**, **6 tablet**, **4 mobile**; not every page must visibly use all columns.
- Breakpoints as defaults, not rigid assumptions: mobile `<768px`, tablet `768–1023px`, desktop `>=1024px`.
- Section vertical spacing: **80–112px desktop**, **64–80px tablet**, **56–72px mobile**.
- Establish a stable alignment system between hero, section headings, body content, imagery, and footer.
- Prefer asymmetric but balanced editorial compositions over repetitive three-card grids.

### Spacing and surface rules

Use an 8px-oriented spacing scale with 4px half steps:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 112` px.

- Subtle dividers: 1px `--color-border`.
- Corner radius: 8px for controls; 12px for selected image/card surfaces. Large rounded “app cards” are not a default.
- Shadows: none by default. Introduce only where elevation is essential to usability.
- Borders: light and restrained; do not box every content section.
- Background: avoid alternating every section between different tinted fills simply to create variety.

### Foundation token example

The following CSS custom properties are illustrative. Translate into the site's existing theme/tokens rather than introducing a second parallel styling system.

```css
:root {
  --color-bg: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #1d2226;
  --color-muted: #646b70;
  --color-border: #e2e4e2;
  --color-accent: #3157cc;
  --color-accent-hover: #2444aa;
  --color-focus: #3157cc;

  --font-display: "Manrope", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-28: 112px;

  --container-max: 1200px;
  --radius-control: 8px;
  --radius-media: 12px;
}
```

## 4. Component specifications

### Global navigation

Brand/name on left; simple text navigation and one visible primary CTA on right when space permits. Suggested navigation: **Coaching, Approach, About, Contact**. On mobile use an accessible, keyboard-operable menu. No oversized mega-menu without a genuine content need. Include a skip link.

### Buttons and links

- **Primary:** Solid accent fill, white text, clear label (for example, “Explore coaching” or “Book a consultation” only when booking is actually available).
- **Secondary:** Text link or restrained outline; do not create multiple competing filled buttons.
- Minimum tap target **44×44px**; visible hover, focus, active, and disabled states.
- Do not rely on color alone to show a link or state. Provide underlines or consistent affordances, particularly in body text.
- Buttons use action verbs; link labels describe destinations. Avoid generic “Learn more” when specific labels work.

### Cards

Prefer simple editorial sections, list rows, or content columns. Use cards only for genuinely distinct services, articles, or process stages. Consistent padding and predictable hierarchy; avoid gradients, floating shadows, and decorative icons.

### Forms

Plain labels above inputs, clear helper text, meaningful validation, explicit privacy information, and confirmation states. Do not change existing form destinations/integrations unless required and verified.

### Proof and credibility

Use verified credentials, coaching experience, actual service offerings, authentic client stories with permission, and specific methodology. No placeholder testimonials presented as real, invented certification badges, or unverified “science-backed” statistics.

### Scientific elements

Use a thin chart, an annotated lifting image, a numbered progression diagram, or a concise methodology note **only if it conveys accurate and relevant information**. Include units, axes, labels, and data provenance on charts. Support empirical claims with credible references when appropriate; keep citations visually quiet and legible. Do not fabricate research references.

## 5. Image and media art direction

- Use authentic photos of coaching, barbells, strength exercises, and training environments. Reflect varied ages, experience levels, and body types when real assets permit.
- Prefer natural light, honest color, and editorial framing over stylized grit or fake “high-performance” imagery.
- Mix occasional close technical details (hands on bar, equipment, training log) with wider human-centered coaching scenes.
- Use consistent image color grading and defined aspect ratios, for example **3:2 wide** and **4:5 portrait**.
- Avoid before/after transformations as the defining visual language.
- Do not pull copyrighted images from reference websites or imply any image represents actual clients unless true.
- If production assets are missing, use clearly identified placeholders or neutral blocks during development, and flag them for replacement before launch.

## 6. Motion and interaction

Interactions should feel stable and unobtrusive. Use subtle opacity, color, or position transitions (approximately **150–250ms**) when useful. Avoid looping movement, attention-grabbing reveal sequences, and layout shifts. Honor `prefers-reduced-motion` by minimizing or eliminating nonessential motion.

## 7. Recommended homepage information architecture

1. **Header/navigation:** Name/wordmark, short navigation, primary action.
2. **Hero:** Outcome-led headline, one-sentence offer, primary CTA, authentic training photo or elegant editorial composition.
3. **Who coaching is for:** Broadly inclusive framing with contextual examples (new lifters, general strength, powerlifting, athletes). Do not fragment into four competing brand identities.
4. **How coaching works:** Assessment → individualized programming → feedback and progression. Align exact process with real service operations.
5. **Approach:** Explain training decisions in accessible language. Add one credible scientific or programming visual if justified.
6. **Offer/coaching details:** Clearly state available coaching formats and who each is suited for, but only if confirmed.
7. **Credibility/proof:** Verified background, relevant experience, actual testimonials/case studies if available.
8. **FAQ:** Practical concerns, expectations, how to start.
9. **Closing CTA + footer:** Clear next step, contact methods, legal/accessibility essentials.

The homepage should be persuasive without being long by default. Remove sections that are redundant or unsupported by real content.

### Example copy directions (illustrative only)

- Eyebrow: `INDIVIDUALIZED STRENGTH COACHING`
- H1: `Get stronger. Train with purpose.`
- Subheading: `Personalized resistance training informed by exercise science, built around your goals and experience.`
- CTA: `Explore coaching`

Preserve user-approved existing copy when it is accurate and performs the same role. Do not automatically impose this illustrative copy.

## 8. Responsiveness, accessibility, and performance

- Aim for **WCAG 2.2 AA**. Body text contrast >=4.5:1, large text and applicable UI boundaries >=3:1; verify actual rendered combinations.
- Use semantic landmarks, one H1 per page, logical headings, meaningful button names, form labels, visible focus indicators, accessible error messages, and alt text for meaningful imagery.
- All navigation and forms must work with keyboard and assistive technology; test menu open/close and focus management.
- At 320–375px widths, avoid horizontal scrolling, clipped headings, tiny chart labels, and cramped CTAs.
- Use optimized images, responsive sizing, appropriate lazy loading (not for above-the-fold hero), and avoid shipping unnecessary JS or fonts.
- Target Core Web Vitals good thresholds when feasible: LCP <=2.5s, CLS <=0.1, INP <=200ms in real-world conditions.
- Preserve metadata, meaningful page titles, structured data only when justified, canonical URLs, and existing analytics/events.

## 9. Reference sites and what to take from them

These are **directional references, not templates**. If an agent can browse or review screenshots, use specific observed examples; otherwise rely on the written principles here. Do not copy proprietary layouts or assets.

- [Linear](https://linear.app/): precise hierarchy, consistent spacing, technical restraint. **Do not borrow** a product-dashboard aesthetic wholesale.
- [Future](https://future.co/): premium coaching framing, approachable explanation, clean conversion pathways. **Do not borrow** unsupported product features or app-specific promises.
- [Barbell Medicine](https://www.barbellmedicine.com/): evidence-informed strength coaching content and credibility. **Do not treat** its density or exact information architecture as the visual target.

## 10. Design acceptance checklist

- [ ] Immediate message: strength coaching, who it helps, and the next step are clear.
- [ ] Headline speaks to a broad strength audience, not just competitors.
- [ ] Layout reads as editorial minimalism, not a generic gym or SaaS template.
- [ ] Typography uses the approved hierarchy and adequate line length.
- [ ] Accent color is restrained and consistent.
- [ ] Scientific elements are accurate, useful, and explained.
- [ ] No invented business information, research, testimonials, or client results.
- [ ] Mobile, tablet, desktop, keyboard, and reduced-motion states are checked.
- [ ] Forms, links, routing, SEO, and business integrations still function.
- [ ] Imagery is authentic or clearly marked for replacement.
- [ ] All reusable design decisions are implemented as tokens/components, not scattered one-offs.

## 11. Change control

The design system is the source of truth for visuals. Add new tokens only when existing tokens cannot express an actual design need. Record deliberate deviations with rationale. Do not silently rebrand the site or alter approved business information. Revisit this document after the first homepage implementation and update it based on concrete design review findings.

## 12. Homepage implementation notes

- The `/coach` homepage uses scoped shared tokens, a 1200px content grid, Manrope headings, self-hosted Inter body/UI text, the neutral canvas, and blue actions. The career page retains its existing styling.
- Added `--color-control-border: #7D8489` for input boundaries and the menu button. The lighter divider token remains appropriate for non-interactive rules but is insufficient for identifying form controls on white.
- Authentic repository training imagery appears once, in the hero (4:5 lockout, six of twelve columns). The portrait provides a human counterpoint. All photography shares one desaturation grade, and images carry no visible captions; alt text identifies them. Reference screenshots are never production assets.
- Photos still to be supplied (a coaching session and a gym portrait) are configured in `src/components/CoachRedesign/photos.ts`. Missing photos render as labeled placeholders only on the dev server; production falls back to no image (approach) or the existing portrait (about). See `docs/homepage-refinement-2.md`.
- The name is a single plain text wordmark, "Tom Vo Strength", identical in the header and footer. The unused barbell logo in `src/assets/coach-logos/` conflicts with the blue accent; adopting it is an open brand decision.
- The contact section is the one surface-colored (white) band on the page, used to mark the next step; the form sits directly on it.
- Refinement pass: numbered section eyebrows, numbered process/service rows, and the homepage FAQ were removed. The page is hero → coaching (audience + formats) → approach → recorded results → about → application, on a shared 12-column grid whose recurring axes are columns 1 and 8. The approach statement is the only display text above H2 scale. FAQ answers now live where they apply (weekly review and medical-care caveat in the approach; next steps in the application).
- No chart or numbered diagram is used as a scientific element: no suitable progression dataset was supplied. Technical credibility comes from concrete coaching decisions in prose. Meet results lead with a plain-language outcome and a one-sentence explanation of attempts and totals; figures are supporting detail and link to OpenPowerlifting.
- Desktop, tablet, and mobile screenshot review found a wrapping numbered label and a truncated form placeholder; both were corrected. The mobile menu starts at 1024px to avoid crowded tablet navigation.
- Route round-trip screenshot review exposed global career styles changing the coaching hero and link colors. The conflicting career selector is scoped, coaching link colors are explicit, and browser QA compares their rendered styles before/after navigation.
- See `docs/homepage-redesign.md` for reference observations, reproducible QA, known repository check limitations, and publication review items. Automated accessibility checks are evidence, not a claim of complete WCAG conformance.

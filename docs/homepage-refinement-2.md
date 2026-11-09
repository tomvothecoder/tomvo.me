# Homepage refinement, round 2

Follow-up review of the `/coach` homepage after the first refinement pass
(see `homepage-redesign.md`). Each item states the problem, the change, and
its status.

## Changes

### 1. Remove the deadlift setup photo

- **Problem:** It is a frame from the same video as the hero (same lift,
  outfit, and gym), so it reads as a repeat. As a video still it is soft and
  includes bystanders.
- **Change:** Delete `training-setup.jpg` / `-600.jpg`. The approach section
  becomes the large statement plus a single readable text column. Add a photo
  slot for a future coaching photo (see Photos below).
- **Status:** Done.

### 2. Remove the slash from the name and unify the wordmark

- **Problem:** The blue `/` after "Strength" was an ornament matching the
  `01 /` section labels, which were removed. On its own it reads like a typo
  or a file path. The nav ("Tom Vo" large, "Strength" small) and the footer
  ("Tom Vo Strength" on one line) also styled the name differently.
- **Change:** Remove the slash. Use one text wordmark, "Tom Vo Strength", with
  the same treatment in the nav and footer.
- **Not changed:** The unused brand logo in `src/assets/coach-logos/` (green
  and orange barbell "TV" mark). Its colors conflict with the site's blue
  accent. Adopting it means changing the accent palette, so that is a
  separate brand decision.
- **Status:** Done.

### 3. Rebalance the hero

- **Problem:** The copy sat at the bottom of the photo, leaving a large empty
  area above it. The photo looked parked on the right instead of composed
  with the text.
- **Change:** Enlarge the photo from five to six of the twelve columns and
  center the copy vertically against it.
- **Tried and rejected:** Raising the desktop H1 to 72px. In the six-column
  copy area it broke "Train with purpose." onto two lines, so the H1 stays at
  the design system's 64px.
- **Status:** Done.

### 4. Quiet the gym colors

- **Problem:** The red-and-black gym was the loudest color on the page and
  clashed with the blue accent.
- **Change:** Apply one shared, slightly stronger desaturation to all
  photography so the images are graded consistently.
- **Status:** Done.

### 5. Strengthen the coaching formats

- **Problem:** The three formats (in person, online, meet prep) are the
  actual offer, but their descriptions were small grey text that read like
  footnotes.
- **Change:** Show descriptions in body size and the primary text color.
  Format names and location lines are unchanged.
- **Status:** Done.

### 6. Differentiate the closing section

- **Problem:** Coaching, About, and Contact all opened the same way, with a
  heading and paragraph on a plain background, so the page had no clear end.
- **Change:** Place the contact section on a full-width white band. The form
  sits directly on it instead of in a bordered box. This is the only tinted
  section, used once to mark the next step.
- **Status:** Done.

### 7. Tidy the footer

- **Problem:** It had a filler tagline ("Purposeful training. Personal
  coaching.") and an awkward 2×2 link grid.
- **Change:** Remove the tagline and keep the location. Links go in one row.
- **Status:** Done.

### 8. Typography follow-up (round 3)

- **Running text is dark; grey is for labels and fine print.** The hero
  intro, About paragraphs, results explanation, contact follow-up, and rates
  note now use the primary text color. Format and location labels, results
  context lines, lift breakdowns, the results disclaimer, and form fine print
  stay grey.
- **Rates note** is now body size: it is pricing information, not fine print.
  Its link no longer breaks across lines.
- **No single-word last lines:** paragraphs use `text-wrap: pretty`.
- **Results explanation** sits directly under its heading instead of floating
  at the top right.
- **Status:** Done.

### 9. Photography

Tracked as a GitHub issue: replace the hero video still and fill the
`coaching` and `about` slots. See Photos to supply below.

## Validation

- `pnpm test`: 13 tests pass, including one that renders in production mode
  and confirms no placeholder appears.
- `pnpm build` passes; the production bundle does not contain the placeholder
  code.
- `docs/homepage-qa.cjs` passes at 320, 375, 768, 1024, and 1440px against
  both the dev server (placeholders visible) and `pnpm preview` (production),
  with zero axe violations.

## Photos to supply

The new photos are configured in
`src/components/CoachRedesign/photos.ts`. Until you add a file there:

- `pnpm dev` shows a labeled grey placeholder with the brief below.
- Production builds never show a placeholder. The approach section renders
  without an image, and About keeps the current café portrait.

To add a photo, put the file in `src/assets/`, import it in `photos.ts`, and
set the slot's `src` (and a smaller `srcSmall`, around 600px wide).

| Slot | Where | Brief |
| --- | --- | --- |
| `coaching` | Approach section, left of the text | Tom coaching a client: cueing at the rack or platform, or reviewing a lift together. Landscape 4:3, at least 1600px wide, natural light. The client must give permission. |
| `about` | About section, right of the text | Tom in a gym, relaxed and not mid-lift: standing near the rack or platform, looking at the camera or mid-conversation. Portrait 4:5, at least 1600px tall, uncluttered background, neutral clothing. Use a camera or phone photo mode, not a video still. |

Both slots also need alt text. Write it in `photos.ts` and describe what the
photo shows.

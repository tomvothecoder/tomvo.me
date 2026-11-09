// Photos still to be supplied. Set `src` (and `srcSmall`, ~600px wide) once a
// file is added to src/assets/. Until then, dev builds show a labeled
// placeholder and production builds fall back as described per slot.
// See docs/homepage-refinement-2.md for the photo briefs.

export interface PhotoSlotConfig {
  src?: string;
  srcSmall?: string;
  alt: string;
  width: number;
  height: number;
  brief: string;
}

export const photos: Record<"coaching" | "about", PhotoSlotConfig> = {
  // Production fallback: no image; the approach text stands alone.
  coaching: {
    alt: "",
    width: 1600,
    height: 1200,
    brief: "Tom coaching a client · landscape 4:3 · natural light",
  },
  // Production fallback: the existing café portrait.
  about: {
    alt: "",
    width: 1280,
    height: 1600,
    brief: "Tom in a gym, relaxed, not mid-lift · portrait 4:5",
  },
};

# Training imagery

All training stills come from the existing `public/videos/IMG_3290.mp4` and
show Tom training; none is client-result photography. The original footage
remains unchanged.

- `training-deadlift.jpg` / `-600.jpg`: lockout at 00:08 (homepage hero).

A second still (deadlift setup) was tried and removed: as a frame from the
same video it read as a repeat of the hero. New photography is tracked in
`docs/homepage-refinement-2.md`.

Generated with FFmpeg, preserving the source crop:

```sh
ffmpeg -ss 8 -i public/videos/IMG_3290.mp4 -frames:v 1 -vf scale=960:-1 -q:v 3 src/assets/training-deadlift.jpg
ffmpeg -ss 8 -i public/videos/IMG_3290.mp4 -frames:v 1 -vf scale=600:-1 -q:v 4 src/assets/training-deadlift-600.jpg
```

One shared saturation reduction is applied to all coaching page photography. The
hero uses a 4:5 crop positioned to retain Tom’s face, grip, and feet. Visible
captions were removed in the homepage refinement; each image’s alt text
identifies it as Tom’s own training, not a client session.

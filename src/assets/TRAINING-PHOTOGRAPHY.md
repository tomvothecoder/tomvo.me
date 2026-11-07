# Training imagery

`training-deadlift.jpg` and `training-deadlift-600.jpg` are stills at 00:08
from the existing `public/videos/IMG_3290.mp4`. The image shows Tom training;
it is not client-result photography. The original footage remains unchanged.

Generated with FFmpeg, preserving the source crop:

```sh
ffmpeg -ss 8 -i public/videos/IMG_3290.mp4 -frames:v 1 -vf scale=960:-1 -q:v 3 src/assets/training-deadlift.jpg
ffmpeg -ss 8 -i public/videos/IMG_3290.mp4 -frames:v 1 -vf scale=600:-1 -q:v 4 src/assets/training-deadlift-600.jpg
```

A restrained saturation reduction is applied in the coaching page CSS. The
homepage uses a 4:5 crop positioned to retain Tom’s face, grip, and feet;
the caption identifies this as Tom’s own training, not a client session.

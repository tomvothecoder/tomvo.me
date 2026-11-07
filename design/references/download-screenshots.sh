#!/usr/bin/env bash
set -uo pipefail

# Run at the repository root. These are third-party archived reference screenshots.
out_dir="design/references"
mkdir -p "$out_dir"

fetch() {
  local filename="$1"
  local url="$2"
  printf 'Downloading %s\n' "$filename"
  if ! curl --fail --location --retry 2 --connect-timeout 10 --max-time 60 --silent --show-error \
    --output "$out_dir/$filename" "$url"; then
    rm -f "$out_dir/$filename"
    printf 'FAILED: %s. Open the cited source in README.md and save manually.\n' "$filename" >&2
    return 1
  fi
}

failed=0
fetch '01-forner-editorial.jpg' 'https://assets.awwwards.com/awards/sites_of_the_day/2022/08/forner-interior-2.jpg' || failed=1
fetch '02-linear-typography.avif' 'https://cdn.sanity.io/images/jqi5lycx/production/c58b4808b00a69473124530e1a700b93a27b524a-1560x975.avif?auto=format&fit=max&w=1600' || failed=1
fetch '03-future-coaching.png' 'https://futureworks.payloadcms.app/media/future-cbmmVxAs9nFaeHgMiCWb1-1707900544863.png' || failed=1
fetch '04-juggernaut-strength.webp' 'https://cdn-image.creati.ai/ai-tools/product-image/juggernautai-app.webp' || failed=1
fetch '05-intervalcoach-analytics.png' 'https://www.intervalcoach.app/_next/image?dpl=dpl_5u7VVVxKR7uMQucrpoDeffjNLCj3&q=75&url=%2Fscreenshots%2Fanalytics-light.png&w=1920' || failed=1

if [[ "$failed" -eq 0 ]]; then
  echo 'All five reference images downloaded.'
else
  echo 'Some images could not be fetched. See README.md for sources.' >&2
fi
exit "$failed"

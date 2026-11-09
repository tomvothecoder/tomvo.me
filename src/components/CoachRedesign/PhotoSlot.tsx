import { type ReactNode } from "react";

import { type PhotoSlotConfig } from "components/CoachRedesign/photos";

interface PhotoSlotProps {
  photo: PhotoSlotConfig;
  sizes: string;
  className?: string;
  // Rendered in production while the photo is missing.
  fallback?: ReactNode;
}

function PhotoSlot({
  photo,
  sizes,
  className,
  fallback = null,
}: PhotoSlotProps) {
  if (photo.src) {
    return (
      <img
        className={className}
        src={photo.src}
        srcSet={
          photo.srcSmall
            ? `${photo.srcSmall} 600w, ${photo.src} ${photo.width}w`
            : undefined
        }
        sizes={sizes}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
      />
    );
  }

  // Never ship a placeholder: it only appears in the dev server.
  if (!import.meta.env.DEV) return <>{fallback}</>;

  return (
    <div
      className={`strength-photo-placeholder ${className ?? ""}`}
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      data-photo-placeholder
    >
      <p>
        Photo needed
        <span>{photo.brief}</span>
      </p>
    </div>
  );
}

export default PhotoSlot;

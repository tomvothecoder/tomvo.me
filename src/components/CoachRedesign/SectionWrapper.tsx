import { type ReactNode } from "react";

import { cn } from "lib/utils";

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  titleClassName,
  descriptionClassName,
  children,
  className,
  contentClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-40 px-6 py-16 md:scroll-mt-44 md:px-10 md:py-20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="coach-mono mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#a33c22]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "font-display text-3xl font-semibold leading-tight tracking-tight text-[#141816] md:text-5xl",
              titleClassName,
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-3 text-[17px] leading-7 text-[#4d574f]",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}

export default SectionWrapper;

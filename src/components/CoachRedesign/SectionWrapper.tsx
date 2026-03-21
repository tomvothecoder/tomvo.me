import { type ReactNode } from "react";

import { cn } from "lib/utils";

interface SectionWrapperProps {
  id: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

function SectionWrapper({
  id,
  title,
  description,
  descriptionClassName,
  children,
  className,
  contentClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32 px-6 py-16 md:scroll-mt-36 md:px-10 md:py-20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-4 text-lg leading-relaxed text-muted",
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

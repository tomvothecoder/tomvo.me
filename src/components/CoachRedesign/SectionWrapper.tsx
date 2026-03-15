import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "lib/utils";
import { fadeInUp, revealInView } from "components/CoachRedesign/animations";

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
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
  descriptionClassName,
  children,
  className,
  contentClassName,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id={id} className={cn("px-6 py-16 md:px-10 md:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={fadeInUp}
          {...(prefersReducedMotion ? {} : revealInView)}
          className="mb-10 max-w-3xl"
        >
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </p>
          ) : null}
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
        </motion.div>

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}

export default SectionWrapper;

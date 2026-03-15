import { type MouseEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "lib/utils";

interface CoachSection {
  id: string;
  label: string;
}

const sections: CoachSection[] = [
  { id: "services", label: "Services" },
  { id: "transformations", label: "Results" },
  { id: "packages", label: "Packages" },
  { id: "credibility", label: "Credibility" },
  { id: "faq", label: "FAQ" },
  { id: "consultation", label: "Consultation" },
];

const activeChipTransition = {
  type: "spring",
  stiffness: 420,
  damping: 36,
  mass: 0.3,
};

const ACTIVE_SECTION_TARGET_OFFSET_PX = 120;

function CoachSubNav() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
  const sectionIds = useMemo(() => new Set(sections.map((section) => section.id)), []);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sectionElements.length === 0) {
      return undefined;
    }

    const entryState = new Map<
      string,
      {
        isIntersecting: boolean;
        ratio: number;
        top: number;
      }
    >();

    const updateActiveSection = () => {
      const visibleSections = Array.from(entryState.entries()).filter(
        ([, state]) => state.isIntersecting,
      );

      if (visibleSections.length === 0) {
        return;
      }

      visibleSections.sort((a, b) => {
        const distanceFromTargetA = Math.abs(a[1].top - ACTIVE_SECTION_TARGET_OFFSET_PX);
        const distanceFromTargetB = Math.abs(b[1].top - ACTIVE_SECTION_TARGET_OFFSET_PX);

        if (distanceFromTargetA !== distanceFromTargetB) {
          return distanceFromTargetA - distanceFromTargetB;
        }

        return b[1].ratio - a[1].ratio;
      });

      const nextActiveId = visibleSections[0][0];
      setActiveSectionId((currentActiveId) =>
        currentActiveId === nextActiveId ? currentActiveId : nextActiveId,
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = (entry.target as HTMLElement).id;
          entryState.set(targetId, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          });
        });

        updateActiveSection();
      },
      {
        threshold: [0, 0.2, 0.4, 0.65, 1],
        rootMargin: "-36% 0px -50% 0px",
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    const hashSectionId = window.location.hash.replace("#", "");
    if (sectionIds.has(hashSectionId)) {
      setActiveSectionId(hashSectionId);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const syncFromHash = () => {
      const hashSectionId = window.location.hash.replace("#", "");
      if (sectionIds.has(hashSectionId)) {
        setActiveSectionId(hashSectionId);
      }
    };

    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [sectionIds]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) {
      return;
    }

    sectionElement.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    setActiveSectionId(sectionId);
    if (window.location.hash !== `#${sectionId}`) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div className="sticky top-16 z-30 border-b border-border/80 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/88">
      <nav aria-label="Coach section navigation" className="mx-auto w-full max-w-6xl px-6 py-2 md:px-10">
        <div className="flex min-h-10 snap-x snap-mandatory items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:justify-center">
          {sections.map((section) => {
            const isActive = activeSectionId === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => handleSectionClick(event, section.id)}
                className={cn(
                  "relative snap-start shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                  isActive
                    ? "border-accent/30 bg-accent/5 text-accent"
                    : "border-transparent bg-transparent text-foreground/70 hover:border-border/70 hover:bg-surface hover:text-foreground",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="coach-subnav-active-chip"
                    transition={prefersReducedMotion ? { duration: 0 } : activeChipTransition}
                    className="absolute inset-0 rounded-full bg-accent/10"
                  />
                ) : null}
                <span className="relative z-[1]">{section.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default CoachSubNav;

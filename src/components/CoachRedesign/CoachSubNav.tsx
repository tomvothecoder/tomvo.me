import { type MouseEvent, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "lib/utils";

interface CoachSection {
  id: string;
  label: string;
  mobileLabel?: string;
}

const sections: CoachSection[] = [
  { id: "services", label: "Services" },
  { id: "transformations", label: "Results" },
  { id: "packages", label: "Packages", mobileLabel: "Plans" },
  { id: "credibility", label: "Credibility", mobileLabel: "Coach" },
  { id: "faq", label: "FAQ" },
  { id: "consultation", label: "Consultation", mobileLabel: "Consult" },
];

const ACTIVE_SECTION_TARGET_OFFSET_PX = 120;

function CoachSubNav() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
  const sectionIds = useMemo(
    () => new Set(sections.map((section) => section.id)),
    [],
  );

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
        const distanceFromTargetA = Math.abs(
          a[1].top - ACTIVE_SECTION_TARGET_OFFSET_PX,
        );
        const distanceFromTargetB = Math.abs(
          b[1].top - ACTIVE_SECTION_TARGET_OFFSET_PX,
        );

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

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
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
    <div className="sticky top-16 z-30 border-b border-border bg-surface shadow-[0_10px_24px_-24px_rgba(17,17,17,0.5)]">
      <nav
        aria-label="Coach section navigation"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10"
      >
        <div className="overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-h-12 min-w-max items-center gap-5 md:w-full md:min-w-0">
            {sections.map((section) => {
              const isActive = activeSectionId === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(event) => handleSectionClick(event, section.id)}
                  className={cn(
                    "shrink-0 border-b-2 py-3 text-xs font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:text-sm",
                    isActive
                      ? "border-accent text-foreground"
                      : "border-transparent text-foreground/70 hover:text-foreground",
                  )}
                >
                  <span className="sm:hidden">
                    {section.mobileLabel ?? section.label}
                  </span>
                  <span className="hidden sm:inline">{section.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CoachSubNav;

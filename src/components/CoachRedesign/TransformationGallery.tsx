import { motion, useReducedMotion } from "framer-motion";

import {
  fadeInUp,
  revealInView,
  staggerContainer,
} from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Badge } from "components/ui/badge";
import { Card, CardContent } from "components/ui/card";
import { cn } from "lib/utils";

interface ProofLinksProps {
  profileUrl: string;
  meetUrl: string;
  className?: string;
}

const generalOutcomes = [
  {
    label: "Body composition (Remote)",
    title: "Sustainable weight-loss with structure",
    summary:
      "Remote coaching from Jan to Mar 2023 combined resistance training, cardio, and calorie targets for consistent adherence.",
    metric: "~210 lb -> 190 lb in ~3 months",
  },
  {
    label: "Beginner strength development",
    title: "First-time lifter built lean mass and confidence",
    summary:
      "From Dec 2024 to Jun 2025, a rec-league athlete with no gym background improved movement quality and built strength pain-free.",
    metric: "107 lb -> 115 lb bodyweight, 115 lb squat",
  },
];

const powerliftingOutcomes = [
  {
    label: "Advanced meet prep (Remote)",
    title: "1st place in 181 lb class",
    summary:
      "Remote meet prep from Jun to Jul 2023 with structured attempt selection and competition-week execution.",
    metric: "1416.4 lb total, 8/9 attempts",
    support: "+55.1 lb increase from June to July",
    lifts: ["Sq 512.5 lb", "Bn 330.7 lb", "Dl 573.2 lb"],
    profileUrl: "https://www.openpowerlifting.org/u/jordanang",
    meetUrl: "https://www.openpowerlifting.org/m/usapl/CA-2023-19#jordanang",
  },
  {
    label: "Competitive meet prep (Remote)",
    title: "1st place in 198 lb class",
    summary:
      "Remote coaching for an Aug 2023 meet supported first place in his class with structured prep.",
    metric: "1460.6 lb total, 9/9 attempts",
    lifts: ["Sq 529.1 lb", "Bn 303.1 lb", "Dl 628.3 lb"],
    profileUrl: "https://www.openpowerlifting.org/u/alvinpov",
    meetUrl: "https://www.openpowerlifting.org/m/uspa/2957#alvinpov",
  },
  {
    label: "Novice meet prep (In-person)",
    title: "First-time lifter became meet-ready",
    summary:
      "In-person meet prep from May to Nov 2024 for a first-time powerlifting athlete with minimal gym experience.",
    metric: "898.3 lb total, 8/9 attempts",
    lifts: ["Sq 297.6 lb", "Bn 198.4 lb", "Dl 402.3 lb"],
    profileUrl: "https://www.openpowerlifting.org/u/christophercruz2",
    meetUrl:
      "https://www.openpowerlifting.org/m/usapl/CA-2024-39#christophercruz2",
  },
];

function ProofLinks({ profileUrl, meetUrl, className }: ProofLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs leading-5 text-foreground/75",
        className,
      )}
    >
      <span>Verified via OpenPowerlifting</span>
      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-accent hover:underline"
      >
        Profile
      </a>
      <span>•</span>
      <a
        href={meetUrl}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-accent hover:underline"
      >
        Meet
      </a>
    </div>
  );
}

function TransformationGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="transformations"
      eyebrow="Results"
      title="Transformation stories built on structure, not shortcuts"
      description="The process emphasizes clear milestones, measurable outcomes, and consistent execution."
      className="py-14 md:py-20"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">
        General outcomes
      </p>

      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="mt-4 grid gap-5 md:grid-cols-2"
      >
        {generalOutcomes.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp}>
            <Card className="h-full border-border/90 bg-surface shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/65">
                    General case {index + 1}
                  </p>
                </div>
                <Badge className="mb-4 mt-3 w-fit" variant="accent">
                  {item.label}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-foreground/85 sm:text-base">
                  {item.summary}
                </p>
                <div className="mt-auto pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">
                    Result
                  </p>
                  <p className="mt-1 text-lg font-semibold leading-7 text-foreground">
                    {item.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">
        Powerlifting outcomes
      </p>

      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {powerliftingOutcomes.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp}>
            <Card className="group h-full border-accent/25 bg-gradient-to-b from-accent/5 to-surface shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/65">
                    Powerlifting case {index + 1}
                  </p>
                </div>
                <Badge className="mb-4 mt-3 w-fit" variant="accent">
                  {item.label}
                </Badge>
                <h3 className="text-xl font-semibold leading-tight text-foreground xl:min-h-[4rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-foreground/85 sm:text-base xl:min-h-[6.5rem]">
                  {item.summary}
                </p>
                <div className="mt-4 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2.5 transition-colors duration-300 group-hover:border-accent/35">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
                    Outcome
                  </p>
                  <p className="mt-1 text-[15px] font-semibold leading-6 text-foreground">
                    {item.metric}
                  </p>
                  {item.support ? (
                    <p className="mt-1 text-xs font-medium leading-5 text-foreground/80">
                      {item.support}
                    </p>
                  ) : null}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.lifts.map((lift) => (
                    <span
                      key={lift}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium leading-4 text-foreground/85"
                    >
                      {lift}
                    </span>
                  ))}
                </div>
                <ProofLinks
                  profileUrl={item.profileUrl}
                  meetUrl={item.meetUrl}
                  className="mt-auto pt-3"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default TransformationGallery;

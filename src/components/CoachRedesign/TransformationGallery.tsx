import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
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
      "From Jan to Mar 2023, remote coaching combined resistance training, cardio, and calorie targets for consistent adherence.",
    metric: "~210 lb to 190 lb in ~3 months",
  },
  {
    label: "Beginner strength development",
    title: "First-time lifter built lean mass and confidence",
    summary:
      "From Dec 2024 to Jun 2025, a rec-league basketball athlete with no gym experience improved movement quality and built strength pain-free.",
    metric: "107 lb to 115 lb bodyweight and 115 lb squat",
  },
];

const powerliftingOutcomes = [
  {
    label: "Advanced meet prep (Remote)",
    title: "1st place in 181 lb class",
    summary:
      "Remote meet prep from Jun to Jul 2023 focused on structured attempt selection and competition-week execution.",
    metric: "Outcome: +55.1 lb total, 8/9 attempts",
    detail: "Top lifts: Squat 512.5 lb, Bench 330.7 lb, Deadlift 573.2 lb, Total 1416.4 lb",
    profileUrl: "https://www.openpowerlifting.org/u/jordanang",
    meetUrl: "https://www.openpowerlifting.org/m/usapl/CA-2023-19#jordanang",
  },
  {
    label: "Novice meet prep (In-person)",
    title: "First-time lifter became meet-ready",
    summary:
      "In-person meet prep from May to Nov 2025 for a first-time powerlifting athlete with minimal gym experience.",
    metric: "Outcome: ~898 lb total, 8/9 attempts",
    detail: "Top lifts: Squat 297.6 lb, Bench 198.4 lb, Deadlift 402.3 lb, Total 898.3 lb",
    profileUrl: "https://www.openpowerlifting.org/u/christophercruz2",
    meetUrl: "https://www.openpowerlifting.org/m/usapl/CA-2024-39#christophercruz2",
  },
  {
    label: "Competitive meet prep (Remote)",
    title: "1st place in 90 kg class",
    summary:
      "Remote powerlifting coaching for an Aug 2023 meet supported first place in his weight class with structured prep.",
    metric: "Outcome: 1st place in 90 kg (198.4 lb) class, 9/9 attempts",
    detail: "Top lifts: Squat 529.1 lb, Bench 303.1 lb, Deadlift 628.3 lb, Total 1460.6 lb",
    profileUrl: "https://www.openpowerlifting.org/u/alvinpov",
    meetUrl: "https://www.openpowerlifting.org/m/uspa/2957#alvinpov",
  },
];

function ProofLinks({ profileUrl, meetUrl, className }: ProofLinksProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 whitespace-nowrap text-xs leading-5 text-foreground/70",
        className,
      )}
    >
      <span>Verified on OpenPowerlifting</span>
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
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="h-32 border-b border-border bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  General case {index + 1}
                </p>
              </div>
              <CardContent className="flex flex-1 flex-col pt-6">
                <Badge className="mb-4" variant="accent">
                  {item.label}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-foreground/75">{item.summary}</p>
                <p className="mt-auto pt-5 text-sm font-medium text-foreground">{item.metric}</p>
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
        className="mt-4 grid gap-5 lg:grid-cols-3"
      >
        {powerliftingOutcomes.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp}>
            <Card className="h-full border-accent/30 bg-accent/5">
              <CardContent className="flex h-full flex-col pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Powerlifting case {index + 1}
                </p>
                <Badge className="mb-4 mt-3" variant="accent">
                  {item.label}
                </Badge>
                <h3 className="text-xl font-semibold leading-tight text-foreground lg:min-h-[4rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-foreground/75 lg:min-h-[7rem]">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm font-medium leading-6 text-foreground lg:min-h-[3rem]">
                  {item.metric}
                </p>
                {item.detail ? (
                  <p className="mt-2 text-sm leading-6 text-foreground/75 lg:min-h-[3rem]">
                    {item.detail}
                  </p>
                ) : null}
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

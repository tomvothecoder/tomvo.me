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

const transformations = [
  {
    label: "Advanced meet prep (Remote)",
    title: "First-place finish with total progression",
    summary:
      "Remote meet prep raised total from 1361.3 lb to 1416.4 lb in seven weeks with structured attempt strategy.",
    metric: "+55.1 lb total and 1st place at USAPL Barbell Brigade Open (Jul 22, 2023)",
    profileUrl: "https://www.openpowerlifting.org/u/jordanang",
    meetUrl: "https://www.openpowerlifting.org/m/usapl/CA-2023-19#jordanang",
  },
  {
    label: "Body composition (Remote)",
    title: "Sustainable weight-loss with structure",
    summary:
      "From Jan to Mar 2023, remote coaching combined resistance training, cardio, and calorie targets for consistent adherence.",
    metric: "~210 lb to 190 lb in ~3 months",
    profileUrl: null,
    meetUrl: null,
  },
  {
    label: "Beginner strength development",
    title: "First-time lifter built lean mass and confidence",
    summary:
      "From Dec 2024 to Jun 2025, a rec-league basketball athlete with no gym experience improved movement quality and built strength pain-free.",
    metric: "107 lb to 115 lb bodyweight and 115 lb squat",
    profileUrl: null,
    meetUrl: null,
  },
];

function ProofLinks({ profileUrl, meetUrl, className }: ProofLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] leading-6", className)}>
      <span className="text-foreground/80">Verified on OpenPowerlifting</span>
      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-accent hover:underline"
      >
        Profile
      </a>
      <span className="text-foreground/70">•</span>
      <a
        href={meetUrl}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-accent hover:underline"
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
      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="grid gap-5 lg:grid-cols-3"
      >
        {transformations.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp}>
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="h-32 border-b border-border bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Case {index + 1}
                </p>
              </div>
              <CardContent className="flex flex-1 flex-col pt-6">
                <Badge className="mb-4" variant="accent">
                  {item.label}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-foreground/75">{item.summary}</p>
                <p className="mt-auto pt-5 text-sm font-medium text-foreground">{item.metric}</p>
                <div className="mt-2 min-h-10">
                  {item.profileUrl && item.meetUrl ? (
                    <ProofLinks
                      profileUrl={item.profileUrl}
                      meetUrl={item.meetUrl}
                    />
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">
        More verified outcomes
      </p>

      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="mt-6 grid gap-5 md:grid-cols-2"
      >
        <motion.div variants={fadeInUp}>
          <Card className="h-full border-accent/30 bg-accent/5">
            <CardContent className="flex h-full flex-col pt-6">
              <h3 className="text-lg font-semibold text-foreground">
                Additional result: novice to meet-ready
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-foreground/75">
                In-person meet prep from May to Nov 2025 for a first-time powerlifting athlete with minimal gym experience.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">~898 lb total, 8/9 attempts</p>
              <p className="mt-2 text-sm text-foreground/75">
                Top meet lifts: Squat 286.6 lb, Bench 198.4 lb, Deadlift 402.3 lb
              </p>
              <ProofLinks
                profileUrl="https://www.openpowerlifting.org/u/christophercruz2"
                meetUrl="https://www.openpowerlifting.org/m/usapl/CA-2024-39#christophercruz2"
                className="mt-auto pt-3"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="h-full border-accent/30 bg-accent/5">
            <CardContent className="flex h-full flex-col pt-6">
              <h3 className="text-lg font-semibold text-foreground">
                Additional result: first place in weight class
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-foreground/75">
                Competitive powerlifting client secured first place in his weight class with
                structured prep.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                90 kg (198.4 lb) class winner
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Top meet lifts: Squat 529.1 lb, Bench 303.1 lb, Deadlift 628.3 lb, Total 1460.6 lb
              </p>
              <ProofLinks
                profileUrl="https://www.openpowerlifting.org/u/alvinpov"
                meetUrl="https://www.openpowerlifting.org/m/uspa/2957#alvinpov"
                className="mt-auto pt-3"
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

export default TransformationGallery;

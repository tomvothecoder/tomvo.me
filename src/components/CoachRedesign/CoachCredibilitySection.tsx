import { ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import selfPortrait from "assets/me.jpg";
import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Card, CardContent } from "components/ui/card";

const credibilityPoints = [
  {
    icon: ClipboardCheck,
    title: "5 years of professional coaching experience",
    text: "Experience across private coaching, meet prep, and sustainable habit-building for adult clients.",
  },
  {
    icon: ShieldCheck,
    title: "NASM-certified coaching foundation",
    text: "Programming decisions are built on safe progressions and repeatable training principles.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-driven process",
    text: "As a software engineer, I coach with measurable inputs, frequent feedback loops, and iterative adjustments.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear accountability system",
    text: "You receive simple weekly priorities, progress tracking, and clear next-step actions.",
  },
];

function CoachCredibilitySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="credibility"
      eyebrow="Coach credibility"
      title="Why clients trust this coaching system"
      description="You get a clear training process, transparent communication, and coaching decisions grounded in data and 5 years of professional coaching experience."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div variants={fadeInUp} {...(prefersReducedMotion ? {} : revealInView)}>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
            <img
              src={selfPortrait}
              alt="Coach Tom Vo coaching profile"
              className="h-full min-h-[380px] w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...(prefersReducedMotion ? {} : revealInView)}
          className="flex flex-col gap-4"
        >
          {credibilityPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div key={point.title} variants={fadeInUp}>
                <Card>
                  <CardContent className="flex gap-4 pt-6">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{point.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default CoachCredibilitySection;

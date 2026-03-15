import { ArrowRight, BarChart3, CheckCircle2, Clock3, Dumbbell, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import selfPortrait from "assets/me.jpg";
import { heroReveal, heroStagger, fadeInUp } from "components/CoachRedesign/animations";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";

const trustSignals = [
  {
    icon: CheckCircle2,
    label: "NASM-certified private coach",
  },
  {
    icon: MapPin,
    label: "Serving Fremont and Newark",
  },
  {
    icon: BarChart3,
    label: "5 years of professional coaching experience",
  },
  {
    icon: Dumbbell,
    label: "Specialties: strength training, powerlifting, and mobility-focused coaching",
  },
];

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="px-6 pb-8 pt-10 md:px-10 md:pb-12 md:pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          variants={heroStagger}
          {...(prefersReducedMotion ? {} : heroReveal)}
          className="max-w-2xl"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="accent" className="mb-5">
              Private Strength Coaching
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Build measurable strength with coaching that fits real life.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-8 text-foreground/75"
          >
            Structured 1:1 training and clear progression for adults who want
            stronger lifts, better movement quality, and sustainable habits.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#consultation">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#packages">View Packages</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[13px] font-medium text-foreground/80"
          >
            <Clock3 className="h-3.5 w-3.5 text-accent" />
            <span>Typical consultation response within 24 hours</span>
          </motion.div>

          <motion.ul variants={fadeInUp} className="mt-8 space-y-3">
            {trustSignals.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-[15px] leading-7 text-foreground/75">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          {...(prefersReducedMotion ? {} : heroReveal)}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 hidden h-40 w-40 rounded-full bg-accent/10 blur-2xl md:block" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-soft">
            <img
              src={selfPortrait}
              alt="Coach Tom Vo"
              className="h-[420px] w-full rounded-xl object-cover object-center"
            />
            <div className="mt-4 rounded-xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Consultation focus
              </p>
              <p className="mt-2 text-sm text-foreground">
                Clarify goals, identify current bottlenecks, and map your first
                12 weeks of training.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

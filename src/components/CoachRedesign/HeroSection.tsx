import { ArrowRight, CheckCircle2, Clock3, Dumbbell, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import selfPortrait from "assets/me.jpg";
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
    icon: Dumbbell,
    label: "Strength, powerlifting, and mobility-focused coaching",
  },
];

const quickFacts = [
  {
    label: "Format",
    value: "In-person and online coaching",
  },
  {
    label: "Response time",
    value: "Usually within 24 hours",
  },
];

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const heroMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      };

  return (
    <section id="hero" className="px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
        <motion.div className="max-w-2xl" {...heroMotionProps}>
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build measurable strength with coaching that fits real life.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/78">
            Structured 1:1 training and clear progression for adults who want
            stronger lifts, better movement quality, and sustainable habits.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#consultation">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#packages">View Packages</a>
            </Button>
          </div>

          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Start with a free consultation to review goals, schedule, and the
            coaching format that fits best.
          </p>

          <div className="mt-7 grid gap-3 border border-[#cad2c7] bg-[#f7f8f4] p-4 sm:grid-cols-2">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3 text-[15px] leading-6 text-foreground/82">
                <Icon className="mt-1 h-4 w-4 shrink-0 text-[#1f4f45]" />
                <span>{label}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 text-[15px] leading-6 text-foreground/82">
              <Clock3 className="mt-1 h-4 w-4 shrink-0 text-[#1f4f45]" />
              <span>Typical consultation response within 24 hours.</span>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="border border-[#cad2c7] bg-[#f7f8f4] p-4 shadow-soft md:p-5"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.4,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1] as [
                    number,
                    number,
                    number,
                    number,
                  ],
                },
              })}
        >
          <img
            src={selfPortrait}
            alt="Coach Tom Vo"
            className="h-[440px] w-full object-cover object-center"
          />
          <div className="mt-4 grid gap-4 border-t border-[#d4d9d0] pt-4 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs font-medium tracking-wide text-muted">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default HeroSection;

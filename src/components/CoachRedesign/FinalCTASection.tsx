import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView } from "components/CoachRedesign/animations";
import { Button } from "components/ui/button";

function FinalCTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="final-cta" className="px-6 pb-24 pt-8 md:px-10">
      <motion.div
        variants={fadeInUp}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="mx-auto w-full max-w-6xl rounded-2xl border border-border bg-surface p-8 text-center shadow-soft md:p-12"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Start now
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Ready to train with a structured plan and measurable progress?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          Book a free consultation to map your goals and next training phase.
        </p>

        <div className="mt-8">
          <Button asChild className="mx-auto inline-flex w-auto px-5 text-sm md:h-12 md:px-6 md:text-base">
            <a href="#consultation">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default FinalCTASection;

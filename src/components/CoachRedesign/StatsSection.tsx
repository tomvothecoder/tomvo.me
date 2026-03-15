import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";

const stats = [
  {
    value: "1:1",
    label: "Private coaching format",
  },
  {
    value: "NASM",
    label: "Certified training standard",
  },
  {
    value: "3 Cities",
    label: "Fremont, Newark, Santa Clara",
  },
  {
    value: "Weekly",
    label: "Program adjustments and check-ins",
  },
];

function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="proof" className="px-6 py-8 md:px-10 md:py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          variants={staggerContainer}
          {...(prefersReducedMotion ? {} : revealInView)}
          className="contents"
        >
          {stats.map((item) => (
            <motion.article
              key={item.label}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface p-5 shadow-soft"
            >
              <p className="text-2xl font-semibold text-foreground">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;

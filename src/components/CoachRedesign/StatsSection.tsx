import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, staggerContainer } from "components/CoachRedesign/animations";

const stats = [
  {
    value: "5 Years",
    label: "Private coaching experience",
  },
  {
    value: "In-person + Online",
    label: "In-person + online coaching",
  },
  {
    value: "4 Cities",
    label: "Fremont, Newark, Milpitas, and Santa Clara",
  },
  {
    value: "Weekly",
    label: "Plan adjustments and check-ins",
  },
];

function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="proof" className="px-6 py-4 md:px-10 md:py-8">
      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion
          ? {}
          : {
              initial: "hidden",
              animate: "visible",
            })}
        className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
    </section>
  );
}

export default StatsSection;

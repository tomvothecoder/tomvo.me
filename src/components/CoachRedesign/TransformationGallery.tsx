import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Badge } from "components/ui/badge";
import { Card, CardContent } from "components/ui/card";

const transformations = [
  {
    label: "Strength progression",
    title: "Higher confidence under the bar",
    summary:
      "Clients follow repeatable progression systems for squat, bench, and deadlift improvements.",
    metric: "Structured block progression",
  },
  {
    label: "Body composition",
    title: "Sustainable fat-loss habits",
    summary:
      "Nutrition accountability and training consistency are paired to support long-term changes.",
    metric: "Habit-focused nutrition coaching",
  },
  {
    label: "Competition readiness",
    title: "Meet prep with clear execution",
    summary:
      "Peaking and attempt planning reduce uncertainty and improve meet-day decision quality.",
    metric: "Attempt strategy + taper planning",
  },
];

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
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
                <p className="mt-auto pt-5 text-sm font-medium text-foreground">{item.metric}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default TransformationGallery;

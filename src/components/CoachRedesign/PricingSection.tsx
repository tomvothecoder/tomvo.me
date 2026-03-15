import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";

const plans = [
  {
    name: "Starter",
    cadence: "4 sessions / month",
    focus: "Form, foundations, and consistency",
    features: [
      "Monthly programming",
      "Technique coaching",
      "Progress tracking",
    ],
    highlighted: false,
  },
  {
    name: "Performance",
    cadence: "8 sessions / month",
    focus: "Progressive overload and weekly oversight",
    features: [
      "Priority check-ins",
      "Program adjustments",
      "Nutrition accountability",
    ],
    highlighted: true,
  },
  {
    name: "Meet Prep",
    cadence: "12-week prep cycle",
    focus: "Competition peaking and attempt execution",
    features: ["Peaking structure", "Attempt strategy", "Meet-day planning"],
    highlighted: false,
  },
];

function PricingSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="packages"
      eyebrow="Packages"
      title="Simple coaching packages with clear progression"
      description="Choose the format that best fits your training frequency and performance goals."
    >
      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="grid gap-5 lg:grid-cols-3"
      >
        {plans.map((plan) => (
          <motion.div key={plan.name} variants={fadeInUp}>
            <Card
              className={plan.highlighted ? "border-accent/40 ring-1 ring-accent/30" : undefined}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.highlighted ? <Badge variant="accent">Most popular</Badge> : null}
                </div>
                <p className="text-sm font-medium text-foreground">{plan.cadence}</p>
                <p className="text-sm text-muted">{plan.focus}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant={plan.highlighted ? "default" : "outline"}>
                  <a href="#consultation">Book Free Consultation</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default PricingSection;

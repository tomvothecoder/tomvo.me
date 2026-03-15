import { BarChart3, Check, Dumbbell, Trophy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent, CardTitle } from "components/ui/card";
import { cn } from "lib/utils";

const plans = [
  {
    icon: Dumbbell,
    name: "Starter",
    cadence: "4 sessions monthly",
    focus: "Form, foundations, and consistency",
    features: [
      "Monthly programming",
      "Technique coaching",
      "Progress tracking",
    ],
    highlighted: false,
  },
  {
    icon: BarChart3,
    name: "Performance",
    cadence: "8 sessions monthly",
    focus: "Progressive overload and weekly oversight",
    features: [
      "Priority check-ins",
      "Program adjustments",
      "Nutrition accountability",
    ],
    highlighted: true,
  },
  {
    icon: Trophy,
    name: "Meet Prep",
    cadence: "12-week package",
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
      description="Choose the format that best fits your training frequency and performance goals. All packages support in-person or online coaching with flexibility based on individual cases."
      descriptionClassName="text-foreground/70"
    >
      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="grid gap-5 lg:grid-cols-3"
      >
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <motion.div key={plan.name} variants={fadeInUp} className="h-full">
              <Card
                className={cn(
                  "h-full",
                  plan.highlighted
                    ? "border-accent/40 ring-1 ring-accent/30"
                    : undefined,
                )}
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <CardTitle>{plan.name}</CardTitle>
                    </div>
                    {plan.highlighted ? (
                      <Badge variant="accent" className="shrink-0 whitespace-nowrap">
                        Most popular
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground whitespace-nowrap">
                    {plan.cadence}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {plan.focus}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm leading-relaxed text-foreground/70"
                      >
                        <Check className="h-4 w-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "w-full",
                        !plan.highlighted
                          ? "border-accent/30 bg-accent/5 text-accent hover:border-accent/40 hover:bg-accent/10"
                          : "",
                      )}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <a href="#consultation">Book Free Consultation</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/70">
        Plans are adapted to your goals, schedule, and preferred coaching format.
      </p>
    </SectionWrapper>
  );
}

export default PricingSection;

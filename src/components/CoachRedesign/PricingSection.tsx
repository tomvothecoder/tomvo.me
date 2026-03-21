import { BarChart3, Check, Dumbbell, Trophy } from "lucide-react";

import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Button } from "components/ui/button";
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
  return (
    <SectionWrapper
      id="packages"
      title="Simple coaching packages with clear progression"
      description="Choose the format that best fits your training frequency and performance goals. All packages support in-person or online coaching with flexibility based on individual cases."
      descriptionClassName="text-foreground/75"
      className="py-14 md:py-20"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <article
              key={plan.name}
              className={cn(
                "flex h-full flex-col border border-border bg-surface p-6 md:p-7",
                plan.highlighted
                  ? "border-foreground/30 bg-foreground/[0.02]"
                  : undefined,
              )}
            >
              <div className="flex min-w-0 items-center gap-3">
                <Icon className="h-4 w-4 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              </div>
              <p className="mt-3 text-[15px] font-medium leading-6 text-foreground">
                {plan.cadence}
              </p>
              {plan.highlighted ? (
                <p className="mt-2 text-sm leading-6 text-foreground/72">
                  Recommended for most clients who want steady oversight and
                  faster iteration.
                </p>
              ) : null}
              <p className="mt-3 text-[15px] leading-7 text-foreground/82 sm:text-base">
                {plan.focus}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-[15px] leading-7 text-foreground/82 sm:text-base"
                  >
                    <Check className="h-4 w-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a href="#consultation">Book Free Consultation</a>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-4 text-[15px] leading-7 text-foreground/82 sm:text-base">
        Plans are adapted to your goals, schedule, and preferred coaching format.
      </p>
    </SectionWrapper>
  );
}

export default PricingSection;

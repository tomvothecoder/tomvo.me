import { ArrowRight, BarChart3, Check, Dumbbell, Trophy } from "lucide-react";

import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { cn } from "lib/utils";

const packages = [
  {
    icon: Dumbbell,
    name: "Foundation",
    cadence: "Technique + consistency",
    focus:
      "For clients who want hands-on coaching, cleaner movement, and a repeatable training rhythm.",
    features: ["Initial assessment", "Private session structure", "Training notes"],
    highlighted: false,
  },
  {
    icon: BarChart3,
    name: "Performance",
    cadence: "Online or hybrid",
    focus:
      "For people who want programming, video feedback, and weekly adjustments tied to real recovery.",
    features: ["Custom training blocks", "Weekly check-ins", "Video review"],
    highlighted: true,
  },
  {
    icon: Trophy,
    name: "Meet Prep",
    cadence: "Powerlifting focus",
    focus:
      "For competitors who want peaking, attempt selection, and meet-week decisions discussed before meet day.",
    features: ["Peaking plan", "Attempt strategy", "Meet-day checklist"],
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <SectionWrapper
      id="packages"
      eyebrow="Start training"
      title="Find the coaching plan that fits your goals."
      description="Rates are based on coaching format, training goals, support needs, and whether we work in person or online. After I understand what you need, I will recommend the simplest coaching option and share pricing clearly before anything starts."
      descriptionClassName="text-[#2e4036]/75"
      className="bg-[#f7f4ed] py-16 md:py-24"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((plan) => {
          const Icon = plan.icon;

          return (
            <article
              key={plan.name}
              className={cn(
                "flex h-full flex-col rounded-[2rem] border p-6 shadow-soft md:p-7",
                plan.highlighted
                  ? "border-[#a33c22]/70 bg-[#1d2822] text-[#f7f4ed]"
                  : "border-[#cfc4b5] bg-[#fffaf1] text-[#141816]",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Icon
                  className={cn(
                    "h-5 w-5",
                    plan.highlighted ? "text-[#e08a63]" : "text-[#a33c22]",
                  )}
                />
                <p
                  className={cn(
                    "coach-mono text-xs font-semibold uppercase tracking-[0.2em]",
                    plan.highlighted ? "text-[#e08a63]" : "text-[#a33c22]",
                  )}
                >
                  {plan.cadence}
                </p>
              </div>
              <h3 className="mt-6 text-3xl font-bold tracking-tight">
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-4 text-[15px] leading-7",
                  plan.highlighted ? "text-[#f7f4ed]/75" : "text-[#4d574f]",
                )}
              >
                {plan.focus}
              </p>
              <ul
                className={cn(
                  "mt-6 space-y-3 border-t pt-5",
                  plan.highlighted ? "border-white/15" : "border-[#cfc4b5]",
                )}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[15px] leading-7"
                  >
                    <Check
                      className={cn(
                        "h-4 w-4",
                        plan.highlighted ? "text-[#e08a63]" : "text-[#a33c22]",
                      )}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className={cn(
                  "magnetic-button mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-[2rem] px-5 py-3.5 text-sm font-bold",
                  plan.highlighted
                    ? "coach-button-primary text-white"
                    : "border border-[#cfc4b5] bg-white text-[#141816]",
                )}
              >
                <span>Apply for Coaching</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default PricingSection;

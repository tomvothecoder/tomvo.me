import { ArrowRight, BarChart3, Check, Dumbbell, Trophy } from "lucide-react";

import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { cn } from "lib/utils";

const plans = [
  {
    icon: Dumbbell,
    name: "Technique",
    cadence: "Private sessions",
    focus: "Hands-on coaching for form, training consistency, and stronger movement patterns.",
    features: ["In-person coaching", "Technique review", "Session notes"],
    highlighted: false,
  },
  {
    icon: BarChart3,
    name: "Performance",
    cadence: "Online or hybrid",
    focus: "Programming, check-ins, and iterative adjustments for lifters chasing measurable progress.",
    features: ["Weekly programming", "Video feedback", "Recovery adjustments"],
    highlighted: true,
  },
  {
    icon: Trophy,
    name: "Meet Prep",
    cadence: "12-week prep",
    focus: "Peaking, attempt selection, and meet-week planning for powerlifting clients.",
    features: ["Peaking structure", "Attempt strategy", "Meet-day plan"],
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <SectionWrapper
      id="packages"
      eyebrow="Formats"
      title="Coaching formats are scoped after fit is clear."
      description="Pricing is confirmed after consultation so scope matches the work."
      className="bg-[#f7f4ed] py-16 md:py-24"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <article
              key={plan.name}
              className={cn(
                "flex h-full flex-col rounded-lg border p-6 md:p-7",
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
                  "mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold",
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

import { CalendarClock, Dumbbell, ShieldCheck, Trophy } from "lucide-react";

import SectionWrapper from "components/CoachRedesign/SectionWrapper";

const services = [
  {
    icon: Dumbbell,
    title: "1:1 Strength Training",
    description:
      "In-person sessions for technique refinement, strength progression, and accountability.",
    points: [
      "Hands-on form coaching",
      "Progressive strength blocks",
      "Session-by-session feedback",
    ],
  },
  {
    icon: CalendarClock,
    title: "Online Strength Coaching",
    description:
      "Structured programming with weekly adjustments based on your data and schedule.",
    points: ["Custom training plan", "Weekly check-ins", "Video review support"],
  },
  {
    icon: Trophy,
    title: "Powerlifting Meet Prep",
    description:
      "Peaking cycles and attempt strategy for lifters targeting a confident meet-day performance.",
    points: ["Peaking roadmap", "Attempt selection", "Meet-week readiness"],
  },
  {
    icon: ShieldCheck,
    title: "Mobility & Recovery Coaching",
    description:
      "Mobility-focused guidance to improve movement quality, support recovery, and keep training sustainable.",
    points: [
      "Mobility and movement prep",
      "Pain-aware training modifications",
      "Recovery and nutrition habits",
    ],
  },
];

function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      title="Coaching options built around your goals and training context"
      description="Choose the support level that matches your current training phase and schedule across strength training, powerlifting, and mobility-focused coaching."
      descriptionClassName="text-foreground/75"
      className="py-14 md:py-20"
    >
      <div className="divide-y divide-border border border-border bg-surface">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className={`grid gap-6 px-6 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] md:gap-10 md:px-7 md:py-7 ${
                index % 2 === 1 ? "bg-foreground/[0.015]" : ""
              }`}
            >
              <div className="md:border-r md:border-border md:pr-10">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-foreground/80">
                  {service.description}
                </p>
              </div>
              <ul className="text-[15px] leading-7 text-foreground/80 md:pl-1">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-b border-border/80 py-2.5 last:border-b-0 last:pb-0 first:pt-0"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default ServicesSection;

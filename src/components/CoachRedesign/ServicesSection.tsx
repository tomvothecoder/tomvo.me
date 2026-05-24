import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  ShieldCheck,
  Trophy,
  Video,
} from "lucide-react";

import SectionWrapper from "components/CoachRedesign/SectionWrapper";

const services = [
  {
    icon: Dumbbell,
    label: "Local",
    title: "Private strength coaching and personal training",
    bestFor: "Best for local clients who want hands-on technique work.",
    description:
      "In-person sessions in Fremont or Newark focused on strength, movement quality, accessories, and skillful execution.",
    details: [
      "Real-time form cues",
      "Progressive strength blocks",
      "Session notes and next steps",
    ],
  },
  {
    icon: Video,
    label: "Remote",
    title: "Online performance coaching",
    bestFor: "Best for people who want structure without commuting.",
    description:
      "Remote programming, video review, and weekly adjustments based on your training, recovery, and schedule.",
    details: ["Custom training plan", "Weekly check-ins", "Video feedback"],
  },
  {
    icon: Trophy,
    label: "Meet prep",
    title: "Powerlifting meet prep",
    bestFor: "Best for lifters preparing to compete with a tested total.",
    description:
      "Peaking, attempt selection, and meet-week planning so you know what to do before you step on the platform.",
    details: ["12-week prep options", "Attempt strategy", "Taper and meet-day plan"],
  },
  {
    icon: ShieldCheck,
    label: "Support",
    title: "Mobility and recovery support",
    bestFor: "Best for clients who need training to feel sustainable.",
    description:
      "Movement prep, pain-aware modifications, and recovery habits that support strength progress.",
    details: ["Warm-up structure", "Exercise substitutions", "Recovery routines"],
  },
];

function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      eyebrow="Coaching services"
      title="Strength coaching and personal training options matched to the support you need."
      description="I work with you to create a plan based on your goals, current baseline, equipment, training availability, and how much feedback feels useful each week."
      descriptionClassName="text-[#2e4036]/[0.78]"
      className="bg-[#efe8dc] py-16 md:py-24"
    >
      <div className="divide-y divide-[#cfc4b5] border-y border-[#cfc4b5]">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="grid gap-5 py-7 md:grid-cols-[10rem_1fr_15rem] md:items-start md:py-9"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1d2822] text-[#f7f4ed]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="coach-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a33c22]">
                  {service.label}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#141816]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#1d2822]">
                  {service.bestFor}
                </p>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#4d574f]">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2.5">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2.5 text-[15px] leading-6 text-[#39443e]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a33c22]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <a
        href="#apply"
        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1d2822] transition hover:text-[#a33c22]"
      >
        Ask which coaching format fits <ArrowRight className="h-4 w-4" />
      </a>
    </SectionWrapper>
  );
}

export default ServicesSection;

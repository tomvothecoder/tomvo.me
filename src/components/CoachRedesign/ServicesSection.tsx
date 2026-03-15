import {
  CalendarClock,
  Dumbbell,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Card, CardContent, CardDescription, CardTitle } from "components/ui/card";

const services = [
  {
    icon: Dumbbell,
    title: "1:1 Personal Training",
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
      "Structured programming with weekly adjustments based on your training data and schedule.",
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
    title: "Nutrition Accountability",
    description:
      "Habit-based guidance to support recovery, body composition, and consistent training energy.",
    points: ["Simple nutrition targets", "Behavior coaching", "Ongoing accountability"],
  },
];

function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="services"
      eyebrow="Services"
      title="Coaching options built around your goals and training context"
      description="Choose the support level that matches your current training phase and schedule."
      descriptionClassName="text-foreground/75"
    >
      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="grid gap-5 md:grid-cols-2"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="px-6 pb-6 pt-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="mt-3">{service.title}</CardTitle>
                  <CardDescription className="m-0 mt-2 text-[15px] leading-7 text-foreground/75">
                    {service.description}
                  </CardDescription>
                  <ul className="m-0 mt-4 space-y-2 text-[15px] leading-7 text-foreground/75">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

export default ServicesSection;

import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView, staggerContainer } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { Card, CardContent } from "components/ui/card";

const testimonials = [
  {
    quote:
      "Meet prep was clear week to week. I hit competition attempts with confidence and no guesswork.",
    byline: "Powerlifting client",
  },
  {
    quote:
      "The program adapted to my work schedule, and I stayed consistent without burning out.",
    byline: "Busy professional",
  },
  {
    quote:
      "Technique feedback made a huge difference. My lifts feel stronger and safer than before.",
    byline: "Private training client",
  },
];

function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Social proof"
      title="What clients value most about coaching"
      description="A structured system, clear communication, and accountability clients can execute every week."
    >
      <motion.div
        variants={staggerContainer}
        {...(prefersReducedMotion ? {} : revealInView)}
        className="grid gap-5 md:grid-cols-3"
      >
        {testimonials.map((item) => (
          <motion.div key={item.quote} variants={fadeInUp}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <Quote className="h-5 w-5 text-accent" />
                <p className="mt-4 text-base leading-relaxed text-foreground">{item.quote}</p>
                <p className="mt-5 text-sm font-medium text-muted">{item.byline}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export default TestimonialsSection;

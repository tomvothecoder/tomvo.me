import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";

const faqs = [
  {
    question: "Do you offer in-person, online, or both?",
    answer:
      "I coach both in-person and online. In-person coaching is available in Fremont and Newark, and online support is available for clients who prefer remote coaching.",
  },
  {
    question: "Do I need lifting experience before starting?",
    answer:
      "No. Programs are adapted to your current level, movement quality, and schedule. The first phase focuses on clear technique and sustainable progression.",
  },
  {
    question: "How often will my program change?",
    answer:
      "Programs are reviewed weekly. Adjustments are made based on performance trends, recovery, and adherence so your plan stays realistic and effective.",
  },
  {
    question: "Can you coach for a powerlifting meet?",
    answer:
      "Yes. Meet prep includes peaking strategy, attempt selection, and taper planning so you can execute confidently on competition day.",
  },
  {
    question: "Do you coach mobility or pain-aware training modifications?",
    answer:
      "Yes. Coaching includes mobility-focused work and pain-aware exercise modifications to improve movement quality while keeping strength progress on track.",
  },
  {
    question: "What happens after I submit a consultation request?",
    answer:
      "You will receive a follow-up message to review goals, training background, and package fit, then we schedule your onboarding call.",
  },
];

function FAQSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="faq"
      eyebrow="FAQ"
      title="Questions clients ask before starting"
      description="Everything you need to evaluate fit, format, and next steps."
      descriptionClassName="text-foreground/80"
      className="py-14 md:py-20"
    >
      <motion.div variants={fadeInUp} {...(prefersReducedMotion ? {} : revealInView)}>
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-surface px-4 shadow-soft sm:px-5">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={faq.question}>
              <AccordionTrigger className="text-[15px] leading-6 sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
}

export default FAQSection;

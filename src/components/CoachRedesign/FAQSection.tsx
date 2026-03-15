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
    question: "Do you train clients in Fremont, Newark, and Santa Clara?",
    answer:
      "Yes. Coaching is available for clients in Fremont, Newark, and Santa Clara, with options for in-person and online support depending on your schedule.",
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
    >
      <motion.div variants={fadeInUp} {...(prefersReducedMotion ? {} : revealInView)}>
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-surface px-5 shadow-soft">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
}

export default FAQSection;

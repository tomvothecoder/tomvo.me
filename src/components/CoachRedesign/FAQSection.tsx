import { motion, useReducedMotion } from "framer-motion";

import { fadeInUp, revealInView } from "components/CoachRedesign/animations";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";

const faqs = [
  {
    question: "Do you offer in-person, online, or both?",
    answer:
      "Both. In-person coaching is available in Fremont and Newark. Online coaching is available for remote lifters who can send training videos and check in consistently.",
  },
  {
    question: "Do I need powerlifting experience?",
    answer:
      "No. You need a serious training goal and willingness to follow structured work. I coach newer lifters, experienced recreational lifters, and first-time competitors.",
  },
  {
    question: "How often will my program change?",
    answer:
      "Programming is reviewed weekly. Not every week needs a full rewrite; the useful changes are based on performance, recovery, technique, and adherence.",
  },
  {
    question: "Can you coach for a powerlifting meet?",
    answer:
      "Yes. Meet prep includes peaking, attempt selection, taper planning, and meet-day execution.",
  },
  {
    question: "Do you coach mobility or pain-aware training?",
    answer:
      "Yes. Coaching can include mobility work, warm-up structure, and exercise modifications that keep training productive. This is not a substitute for medical care.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "I review your goals, training background, schedule, and coaching fit. If it looks aligned, we book a short consult and decide the simplest next step.",
  },
];

function FAQSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="faq"
      eyebrow="FAQ"
      title="Questions serious lifters ask before starting."
      description="Short answers up front so you can evaluate fit before applying."
      descriptionClassName="text-[#2e4036]/75"
      className="bg-[#f7f4ed] py-16 md:py-24"
    >
      <div className="divide-y divide-[#cfc4b5] border-y border-[#cfc4b5]">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group py-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold leading-7 text-[#141816]">
              {faq.question}
              <span className="text-2xl font-light text-[#a33c22] group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#4d574f]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FAQSection;

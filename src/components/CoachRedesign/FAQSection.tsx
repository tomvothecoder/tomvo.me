import SectionWrapper from "components/CoachRedesign/SectionWrapper";

const faqs = [
  {
    question: "What kind of lifter is this coaching for?",
    answer:
      "Coaching is for people who want clearer training, better movement, and support they can actually use. That can mean a newer lifter, a busy professional, a recreational lifter, or someone preparing for a powerlifting meet.",
  },
  {
    question: "How often will my program change?",
    answer:
      "Programming is reviewed weekly. Not every week needs a full rewrite; the useful changes are based on performance, recovery, technique, and adherence.",
  },
  {
    question: "Do you coach mobility or pain-aware training?",
    answer:
      "Yes. Coaching can include mobility work, warm-up structure, and exercise modifications that keep training productive. This is not a substitute for medical care.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "I review your goals, training background, schedule, and coaching fit. If it looks aligned, I book a short consult with you and recommend the simplest next step.",
  },
];

function FAQSection() {
  return (
    <SectionWrapper
      id="faq"
      eyebrow="FAQ"
      title="Client questions before starting."
      description="Short answers up front so you can evaluate fit before starting a coaching conversation."
      descriptionClassName="text-[#2e4036]/75"
      className="bg-[#f7f4ed] py-16 md:py-24"
    >
      <div className="divide-y divide-[#cfc4b5] border-y border-[#cfc4b5]">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="grid gap-3 py-5 md:grid-cols-[0.85fr_1.15fr] md:gap-8"
          >
            <h3 className="text-lg font-bold leading-7 text-[#141816]">
              {faq.question}
            </h3>
            <p className="max-w-3xl text-[15px] leading-7 text-[#4d574f]">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FAQSection;

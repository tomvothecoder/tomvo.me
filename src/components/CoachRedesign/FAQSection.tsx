const faqs = [
  {
    question: "What kind of lifter is this coaching for?",
    answer:
      "Coaching is for people who want clearer training, better movement, and support they can actually use. That can include newer lifters, busy professionals, recreational lifters, and powerlifters preparing for a meet.",
  },
  {
    question: "How often will my program change?",
    answer:
      "Programming is reviewed weekly. Some weeks need small adjustments; others may need a bigger change based on performance, recovery, technique, and consistency.",
  },
  {
    question: "Do you coach mobility or pain-aware training?",
    answer:
      "Yes. Coaching can include mobility work, warm-up structure, and exercise modifications that help you train productively. It is not a substitute for medical care.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "I review your goals, training background, schedule, and coaching fit. If it looks aligned, I will suggest the simplest next step.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="strength-faq" aria-labelledby="faq-title">
      <h2 id="faq-title">
        A few things <br />
        you might be wondering.
      </h2>
      <div>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>
              {faq.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;

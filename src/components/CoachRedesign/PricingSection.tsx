import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "First, we listen.",
    text: "Your goals, training history, schedule, and equipment. We find your starting point before writing the plan.",
  },
  {
    title: "Then, we build.",
    text: "A training block with clear targets, useful coaching notes, and enough room for the life you actually live.",
  },
  {
    title: "Keep paying attention.",
    text: "Check in, review your lifts, and adjust. Your performance and recovery guide the next step—not a rigid template.",
  },
];

function PricingSection() {
  return (
    <section
      id="packages"
      className="strength-process"
      aria-labelledby="process-title"
    >
      <div className="strength-process-intro">
        <p className="strength-entry">
          <span>02 /</span> How coaching works
        </p>
        <h2 id="process-title">
          A clear plan. <br />
          Room to adapt.
        </h2>
        <p>
          Exercise science informs the plan. Your training tells us how to
          refine it. We review performance, technique, and recovery—not just the
          weight on the bar.
        </p>
        <a href="#apply" className="strength-text-link">
          Let’s talk training <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="strength-log-number" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default PricingSection;

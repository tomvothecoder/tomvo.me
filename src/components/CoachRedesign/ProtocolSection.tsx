const principles = [
  {
    number: "01",
    title: "Train the skill before chasing load.",
    description:
      "Heavy training works better when positions, bracing, bar path, and intent are repeatable.",
  },
  {
    number: "02",
    title: "Progression is planned, not random.",
    description:
      "Volume and intensity move with your goal, training age, schedule, and recovery signals.",
  },
  {
    number: "03",
    title: "Recovery is part of performance.",
    description:
      "Mobility, warm-ups, deloads, and exercise substitutions keep useful work productive.",
  },
  {
    number: "04",
    title: "Feedback closes the loop.",
    description:
      "Video, check-ins, and training data guide what changes next so progress stays concrete.",
  },
];

function ProtocolSection() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-40 bg-[#141816] px-6 py-16 text-[#f7f4ed] md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <p className="coach-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#e08a63]">
              Training philosophy
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Stronger lifting comes from better decisions repeated.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#d9d0c2]">
            Training should be direct enough to execute and specific enough to
            matter. Every block has a reason, every adjustment has context.
          </p>
        </div>

        <div className="grid border-t border-[#4d574f] md:grid-cols-2">
          {principles.map((step) => (
            <article
              key={step.number}
              className="border-b border-[#4d574f] py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
            >
              <span className="coach-mono text-xs font-bold text-[#e08a63]">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-[#d9d0c2]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProtocolSection;

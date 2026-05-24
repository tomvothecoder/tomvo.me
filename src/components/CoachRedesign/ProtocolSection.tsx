const methodSteps = [
  {
    number: "01",
    title: "Listen",
    description:
      "I talk through goals, training history, movement, schedule, equipment, and recovery constraints with you before choosing the first step.",
    visual: "cycle",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Your block gets clear lift targets, accessory work, mobility priorities, and progression rules you can follow week to week.",
    visual: "scan",
  },
  {
    number: "03",
    title: "Adjust",
    description:
      "Check-ins, video feedback, and recovery signals guide the next adjustment so training stays specific.",
    visual: "wave",
  },
];

function MethodVisual({ visual }: { visual: string }) {
  if (visual === "cycle") {
    return (
      <div className="relative h-36 overflow-hidden rounded-[2rem] bg-[#f7f4ed]/[0.08]">
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-[rotate-slow_12s_linear_infinite] rounded-full border border-[#e08a63]/60">
          <span className="absolute -left-2 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#e08a63]" />
          <span className="absolute -right-2 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#f7f4ed]" />
          <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
        </div>
      </div>
    );
  }

  if (visual === "scan") {
    return (
      <div className="relative h-36 overflow-hidden rounded-[2rem] bg-[#f7f4ed]/[0.08] p-4">
        <div className="grid h-full grid-cols-5 gap-2">
          {Array.from({ length: 15 }).map((_, index) => (
            <span
              key={index}
              className="rounded-md border border-white/10 bg-white/[0.07]"
            />
          ))}
        </div>
        <span className="absolute left-0 right-0 top-0 h-12 animate-[scan-line_3.2s_ease-in-out_infinite] bg-gradient-to-b from-[#e08a63]/0 via-[#e08a63]/45 to-[#e08a63]/0" />
      </div>
    );
  }

  return (
    <div className="h-36 overflow-hidden rounded-[2rem] bg-[#f7f4ed]/[0.08] p-4">
      <svg
        viewBox="0 0 320 120"
        className="h-full w-full"
        role="img"
        aria-label="Progress waveform"
      >
        <path
          d="M0 72 C35 28 62 28 96 72 S158 116 192 72 254 28 320 72"
          fill="none"
          stroke="#e08a63"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="520"
          className="animate-[waveform_3.4s_ease-in-out_infinite]"
        />
        <path
          d="M0 72 C35 28 62 28 96 72 S158 116 192 72 254 28 320 72"
          fill="none"
          stroke="rgba(247,244,237,0.22)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function ProtocolSection() {
  return (
    <section
      id="method"
      className="scroll-mt-40 bg-[#141816] px-6 py-16 text-[#f7f4ed] md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <p className="coach-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#e08a63]">
              Method
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Listen. Build. Adjust.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#d9d0c2]">
            Good coaching starts with understanding what you need, then making
            the next useful decision clear before intensity goes up.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {methodSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-cinematic md:p-6"
            >
              <span className="coach-mono text-xs font-bold text-[#e08a63]">
                {step.number}
              </span>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 min-h-24 text-[15px] leading-7 text-[#d9d0c2]">
                {step.description}
              </p>
              <MethodVisual visual={step.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProtocolSection;

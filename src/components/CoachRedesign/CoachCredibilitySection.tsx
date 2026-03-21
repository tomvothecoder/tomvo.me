import { ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

import selfPortrait from "assets/me.jpg";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";

const credibilityPoints = [
  {
    icon: ClipboardCheck,
    title: "5 years of professional coaching experience",
    text: "Experience across private coaching, meet prep, and sustainable habit-building for adult clients.",
  },
  {
    icon: ShieldCheck,
    title: "NASM-certified coaching foundation",
    text: "Programming decisions are built on safe progressions and repeatable training principles.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-driven process",
    text: "As a software engineer, I coach with measurable inputs, frequent feedback loops, and iterative adjustments.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear accountability system",
    text: "You receive simple weekly priorities, progress tracking, and clear next-step actions.",
  },
];

function CoachCredibilitySection() {
  return (
    <SectionWrapper
      id="credibility"
      title="Why clients trust this coaching system"
      description="You get a clear training process, transparent communication, and coaching decisions grounded in data and 5 years of professional coaching experience."
    >
      <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
        <div className="overflow-hidden border border-border bg-surface p-3">
          <img
            src={selfPortrait}
            alt="Coach Tom Vo coaching profile"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <div className="divide-y divide-border border border-border bg-surface">
          {credibilityPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article key={point.title} className="flex gap-4 px-6 py-6 md:px-7">
                <span className="mt-1 shrink-0 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-semibold leading-6 text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {point.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default CoachCredibilitySection;

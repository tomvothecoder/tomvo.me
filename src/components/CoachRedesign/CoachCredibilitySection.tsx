import { ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

import selfPortrait from "assets/me.jpg";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { cn } from "lib/utils";

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
        <div className="overflow-hidden border border-[#cad2c7] bg-[#f7f8f4] p-3 shadow-soft">
          <img
            src={selfPortrait}
            alt="Coach Tom Vo coaching profile"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {credibilityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className={cn(
                  "flex gap-4 border p-6 shadow-soft md:px-7",
                  index % 2 === 0
                    ? "border-[#c7d0c5] bg-[#fcfcf8]"
                    : "border-[#b7cabb] bg-[#e5ebe3]",
                )}
              >
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#1f4f45]">
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

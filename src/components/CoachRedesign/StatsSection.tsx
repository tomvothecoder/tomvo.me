import { useEffect, useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  MousePointer2,
} from "lucide-react";

const assessmentLabels = [
  "Movement screen",
  "Goal profile",
  "Training history",
];

const coachNotes = [
  "Squat depth is consistent. Keep the same stance next week.",
  "Bench volume stays steady. Recovery score says no extra pressing today.",
  "Two deadlift top sets moved clean. Add five pounds only if warm-ups match.",
];

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

const pillars = [
  {
    eyebrow: "Assessment",
    title: "Start from your current baseline.",
    description:
      "Goals, training age, movement, schedule, equipment, and constraints shape the first block.",
  },
  {
    eyebrow: "Feedback",
    title: "Coaching notes shaped by what you share.",
    description:
      "Video review and check-ins turn training and recovery feedback into useful next steps.",
  },
  {
    eyebrow: "Execution",
    title: "A week you can actually live with.",
    description:
      "Training days, recovery work, and check-ins fit around real life without losing intent.",
  },
];

function AssessmentStack() {
  const [topIndex, setTopIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTopIndex((current) => (current + 1) % assessmentLabels.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40 overflow-hidden rounded-[2rem] bg-[#1d2822] p-4">
      {assessmentLabels.map((label, index) => {
        const position =
          (index - topIndex + assessmentLabels.length) % assessmentLabels.length;

        return (
          <div
            key={label}
            className="absolute left-4 right-4 flex items-center justify-between rounded-[1.45rem] border border-white/10 bg-[#f7f4ed] px-4 py-3 text-[#141816] shadow-cinematic transition-all duration-500"
            style={{
              top: 18 + position * 34,
              transform: `scale(${1 - position * 0.045})`,
              opacity: 1 - position * 0.18,
              zIndex: assessmentLabels.length - position,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <span className="text-sm font-bold">{label}</span>
            <CheckCircle2 className="h-4 w-4 text-[#a33c22]" />
          </div>
        );
      })}
    </div>
  );
}

function CoachNoteTypewriter() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const message = coachNotes[messageIndex];

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (visibleChars < message.length) {
        setVisibleChars((count) => count + 1);
        return;
      }

      setVisibleChars(0);
      setMessageIndex((index) => (index + 1) % coachNotes.length);
    }, visibleChars < message.length ? 34 : 850);

    return () => window.clearTimeout(timeout);
  }, [message.length, visibleChars]);

  return (
    <div className="rounded-[2rem] bg-[#141816] p-4 text-[#f7f4ed]">
      <div className="mb-4 flex items-center justify-between">
        <span className="coach-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e08a63]">
          Coach Notes
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-[#51d88a] shadow-[0_0_0_6px_rgba(81,216,138,0.16)]" />
      </div>
      <p className="coach-mono min-h-24 text-sm leading-7 text-[#f7f4ed]/85">
        {message.slice(0, visibleChars)}
        <span className="ml-0.5 inline-block h-5 w-2 translate-y-1 animate-pulse bg-[#e08a63]" />
      </p>
    </div>
  );
}

function TrainingWeekScheduler() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#1d2822] p-4 text-[#f7f4ed]">
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className={[
              "flex aspect-square items-center justify-center rounded-full bg-white/[0.08] text-xs font-bold text-white/60",
              index === 3 ? "animate-[day-pulse_4s_ease-in-out_infinite]" : "",
            ].join(" ")}
          >
            {day}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-5 min-h-11 w-full rounded-[2rem] border border-white/15 bg-white/[0.08] text-sm font-bold text-white"
      >
        Confirm Week
      </button>
      <MousePointer2 className="absolute left-5 top-5 h-6 w-6 animate-[cursor-protocol_4s_ease-in-out_infinite] text-[#e08a63]" />
    </div>
  );
}

function StatsSection() {
  const artifacts = [
    <AssessmentStack />,
    <CoachNoteTypewriter />,
    <TrainingWeekScheduler />,
  ];
  const icons = [ClipboardList, MessageSquareText, CalendarCheck];

  return (
    <section
      id="fit"
      className="scroll-mt-40 bg-[#f7f4ed] px-6 py-16 text-[#141816] md:px-10 md:py-24"
    >
      <div id="coaching" className="mx-auto w-full max-w-6xl scroll-mt-40">
        <div className="max-w-3xl">
          <p className="coach-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#a33c22]">
            Coaching fit
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-[#141816] md:text-5xl">
            Coaching for lifters who want the next training step to make sense.
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-[#4d574f]">
            You do not need to be a competitive lifter. You need a goal, honest
            feedback, and a schedule I can build around with you.
          </p>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#1d2822]">
            Process stays simple: listen first, build the block, adjust from
            real feedback.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];

            return (
              <article
                key={pillar.title}
                className="flex min-h-full flex-col rounded-[2rem] border border-[#cfc4b5] bg-[#fffaf1] p-5 shadow-soft md:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="coach-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a33c22]">
                    {pillar.eyebrow}
                  </span>
                  <Icon className="h-5 w-5 text-[#a33c22]" />
                </div>
                {artifacts[index]}
                <h3 className="mt-6 text-2xl font-bold leading-tight text-[#141816]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#4d574f]">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

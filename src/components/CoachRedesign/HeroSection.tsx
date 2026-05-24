import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  Trophy,
} from "lucide-react";

import coachPrimaryLogo from "assets/coach-logos/TomVoStrength_Primary_Horizontal_Color.png";
import selfPortrait from "assets/me.jpg";

const trustSignals = [
  {
    icon: CheckCircle2,
    label: "NASM-certified coach",
  },
  {
    icon: MapPin,
    label: "Fremont and Newark",
  },
  {
    icon: Trophy,
    label: "Technique and meet prep",
  },
];

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] overflow-hidden bg-[#141816] px-5 pb-8 pt-24 text-[#f7f4ed] sm:px-8 md:px-12"
    >
      <img
        src={selfPortrait}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[58%_22%] opacity-55 saturate-[0.86] sm:object-[62%_18%] lg:object-[72%_18%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141816] via-[#141816]/80 to-[#141816]/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(224,138,99,0.22),transparent_28%),linear-gradient(90deg,rgba(20,24,22,0.94),rgba(20,24,22,0.62)_48%,rgba(20,24,22,0.15))]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-end">
        <div className="max-w-4xl pb-6 md:pb-10">
          <p className="coach-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#e08a63]">
            Tom Vo Strength | NASM CPT | Fremont, Newark, online
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(3.25rem,15vw,9.5rem)] font-extrabold leading-[0.82] text-white">
            Build{" "}
            <span className="coach-serif block text-[clamp(4.25rem,18vw,12rem)] font-semibold italic leading-[0.78] text-[#e08a63]">
              Strength That Fits Your Life.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#f7f4ed]/[0.82] sm:text-xl sm:leading-8">
            Strength coaching and personal training built around your goals,
            schedule, movement quality, and recovery so cleaner movement and
            steady progress can fit the life you actually live.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#apply"
              className="coach-button-primary magnetic-button inline-flex min-h-12 items-center justify-center gap-2 rounded-[2rem] px-6 py-4 text-sm font-bold"
            >
              <span>Apply for Coaching</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#fit"
              className="magnetic-button inline-flex min-h-12 items-center justify-center rounded-[2rem] border border-[#f7f4ed]/40 bg-[#f7f4ed]/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md"
            >
              <span>See If It Fits</span>
            </a>
          </div>

          <ul className="mt-7 grid gap-3 border-t border-white/20 pt-5 sm:grid-cols-3">
            {trustSignals.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-semibold text-[#f7f4ed]/80"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#e08a63]" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3 border-t border-white/20 py-5 text-sm text-[#f7f4ed]/75 md:grid-cols-3">
          <p>
            <strong className="mb-1 flex items-center gap-2 text-base text-white">
              <Trophy className="h-4 w-4 text-[#e08a63]" />
              Strength and movement quality.
            </strong>
            Better technique, steady progress, and performance goals drive the
            plan.
          </p>
          <p>
            <strong className="mb-1 flex items-center gap-2 text-base text-white">
              <CheckCircle2 className="h-4 w-4 text-[#e08a63]" />
              Evidence-informed.
            </strong>
            Volume, intensity, and recovery adjust from real feedback.
          </p>
          <p>
            <strong className="mb-1 flex items-center gap-2 text-base text-white">
              <CalendarCheck className="h-4 w-4 text-[#e08a63]" />
              Simple to execute.
            </strong>
            Clear weekly targets, useful coaching notes, and room to adjust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

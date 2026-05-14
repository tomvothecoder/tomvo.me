import { ArrowRight, CheckCircle2, MapPin, Trophy } from "lucide-react";

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
    label: "Powerlifting meet prep",
  },
];

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f7f4ed] px-5 pb-12 pt-28 text-[#141816] sm:px-8 md:px-12 md:pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.03fr_0.72fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="coach-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#a33c22]">
            NASM CPT | Strength, powerlifting, recovery, mobility
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-[clamp(3.5rem,8.5vw,8.25rem)] font-extrabold leading-[0.86] tracking-tight text-[#141816]">
            Tom Vo Strength Coaching
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#39443e] sm:text-xl">
            Direct coaching for lifters who want stronger numbers, cleaner
            movement, and a plan that adapts to recovery instead of guessing
            from template to template.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="coach-button-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-bold"
            >
              <span>Apply for Coaching</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#fit"
              className="inline-flex items-center justify-center rounded-lg border border-[#b8b0a2] px-5 py-4 text-sm font-bold text-[#1d2822] transition hover:border-[#1d2822] hover:bg-[#ede7dc]"
            >
              See If It Fits
            </a>
          </div>

          <ul className="mt-9 grid gap-3 border-t border-[#d4cabc] pt-6 sm:grid-cols-3">
            {trustSignals.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-semibold text-[#39443e]"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#a33c22]" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:pb-2">
          <figure>
            <img
              src={selfPortrait}
              alt="Coach Tom Vo"
              className="aspect-[4/5] w-full rounded-lg object-cover object-center"
            />
            <figcaption className="mt-4 border-l-2 border-[#a33c22] pl-4 text-sm leading-6 text-[#4d574f]">
              Part-time private coaching in Fremont and Newark, with online
              support for lifters who train remotely.
            </figcaption>
          </figure>
        </aside>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-[#d4cabc] pt-6">
        <div className="grid gap-5 text-sm text-[#4d574f] md:grid-cols-3">
          <p>
            <strong className="block text-base text-[#141816]">
              Performance first.
            </strong>
            Strength, meet prep, and movement quality drive the plan.
          </p>
          <p>
            <strong className="block text-base text-[#141816]">
              Evidence-informed.
            </strong>
            Training volume, intensity, and recovery get adjusted from real
            feedback.
          </p>
          <p>
            <strong className="block text-base text-[#141816]">
              Simple to follow.
            </strong>
            Clear weekly targets, direct coaching notes, no filler.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

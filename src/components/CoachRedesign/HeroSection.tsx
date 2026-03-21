import { ArrowRight, CheckCircle2, Clock3, Dumbbell, MapPin } from "lucide-react";

import selfPortrait from "assets/me.jpg";
import { Button } from "components/ui/button";

const trustSignals = [
  {
    icon: CheckCircle2,
    label: "NASM-certified private coach",
  },
  {
    icon: MapPin,
    label: "Serving Fremont and Newark",
  },
  {
    icon: Dumbbell,
    label: "Strength, powerlifting, and mobility-focused coaching",
  },
];

const quickFacts = [
  {
    label: "Format",
    value: "In-person and online coaching",
  },
  {
    label: "Response time",
    value: "Usually within 24 hours",
  },
];

function HeroSection() {
  return (
    <section id="hero" className="px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build measurable strength with coaching that fits real life.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/75">
            Structured 1:1 training and clear progression for adults who want
            stronger lifts, better movement quality, and sustainable habits.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#consultation">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#packages">View Packages</a>
            </Button>
          </div>

          <p className="mt-3 text-sm leading-6 text-muted">
            Start with a free consultation to review goals, schedule, and the
            coaching format that fits best.
          </p>

          <div className="mt-8 grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3 text-[15px] leading-6 text-foreground/78">
                <Icon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{label}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 text-[15px] leading-6 text-foreground/78">
              <Clock3 className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span>Typical consultation response within 24 hours.</span>
            </div>
          </div>
        </div>

        <aside className="border border-border bg-surface p-4 md:p-5">
          <img
            src={selfPortrait}
            alt="Coach Tom Vo"
            className="h-[440px] w-full object-cover object-center"
          />
          <div className="mt-4 grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs font-medium tracking-wide text-muted">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;

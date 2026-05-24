import { ClipboardCheck, MapPin, ShieldCheck } from "lucide-react";

import selfPortrait from "assets/me.jpg";
import SectionWrapper from "components/CoachRedesign/SectionWrapper";

const coachFacts = [
  {
    icon: ClipboardCheck,
    title: "Client-first",
    text: "The needs of my clients come first, guiding every decision and adjustment in their training.",
  },
  {
    icon: ShieldCheck,
    title: "NASM-certified",
    text: "Programming respects movement quality, recovery, and sustainable progression.",
  },
  {
    icon: MapPin,
    title: "Local and remote",
    text: "In-person coaching in Fremont and Newark with online programming support available.",
  },
];

function CoachCredibilitySection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About me"
      title="Direct coaching from the person writing the plan."
      description="I coach strength because I care about the repeatable work behind better lifts: clear technique, useful programming, and decisions that match the athlete in front of me."
      descriptionClassName="text-[#2e4036]/75"
      className="bg-[#efe8dc] py-16 md:py-24"
    >
      <div className="grid gap-10 xl:grid-cols-[0.66fr_1.34fr] xl:items-center">
        <div>
          <img
            src={selfPortrait}
            alt="Coach Tom Vo coaching profile"
            className="aspect-[4/5] w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <p className="max-w-3xl text-2xl font-semibold leading-snug text-[#141816] md:text-4xl">
            My job is to make the next training decision obvious: what to lift,
            how hard to push, what to adjust, and how to keep moving when life
            gets busy.
          </p>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#39443e]">
            The tone is direct because training should be clear. You will know
            the goal of each block, how success is measured, and what feedback I
            need to coach you well.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {coachFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <article
                  key={fact.title}
                  className="rounded-lg border border-[#cfc4b5] bg-[#f7f4ed] p-5"
                >
                  <Icon className="h-5 w-5 text-[#a33c22]" />
                  <h3 className="mt-4 text-base font-bold leading-6 text-[#17231d]">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4d574f]">
                    {fact.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default CoachCredibilitySection;

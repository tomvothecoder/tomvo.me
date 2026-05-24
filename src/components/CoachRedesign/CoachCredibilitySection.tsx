import SectionWrapper from "components/CoachRedesign/SectionWrapper";

function CoachCredibilitySection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About me"
      title="Coaching shaped by lived training experience."
      className="bg-[#efe8dc] py-16 md:py-24"
    >
      <div className="grid gap-10 xl:grid-cols-[0.66fr_1.34fr] xl:items-center">
        <div>
          <video
            className="aspect-[4/5] w-full rounded-lg object-cover"
            width="576"
            height="768"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/IMG_3290.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <p className="max-w-3xl text-2xl font-semibold leading-snug text-[#141816] md:text-4xl">
            Lifting gave me a place to practice patience, problem solving, and
            showing up.
          </p>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#39443e]">
            I got into lifting because progress felt honest: learn the
            movement, make small adjustments, repeat. Over time, powerlifting
            became a way to build confidence and community, not just stronger
            lifts.
          </p>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#39443e]">
            That is how I coach. I want lifters to feel seen, supported, and
            clear on why the plan looks the way it does. The training matters,
            but the relationship behind it matters too.
          </p>
          <p className="mt-8 max-w-2xl border-l-2 border-[#a33c22] pl-5 text-lg font-medium leading-8 text-[#1d2822]">
            The goal is better training and a coaching relationship that helps
            you feel understood, supported, and more connected to the work.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default CoachCredibilitySection;

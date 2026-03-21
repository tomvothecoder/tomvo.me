import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { cn } from "lib/utils";

interface ProofLinksProps {
  profileUrl: string;
  meetUrl: string;
  className?: string;
}

const generalOutcomes = [
  {
    label: "Body composition (Remote)",
    title: "Sustainable weight-loss with structure",
    summary:
      "Remote coaching from Jan to Mar 2023 combined resistance training, cardio, and calorie targets for consistent adherence.",
    metric: "~210 lb -> 190 lb in ~3 months",
  },
  {
    label: "Beginner strength development",
    title: "First-time lifter built lean mass and confidence",
    summary:
      "From Dec 2024 to Jun 2025, a rec-league athlete with no gym background improved movement quality and built strength pain-free.",
    metric: "107 lb -> 115 lb bodyweight, 115 lb squat",
  },
];

const powerliftingOutcomes = [
  {
    label: "Advanced meet prep (Remote)",
    title: "1st place in 181 lb class",
    summary:
      "Remote meet prep from Jun to Jul 2023 with structured attempt selection, competition-week execution, and a +55.1 lb total increase from June to July.",
    metric: "1416.4 lb total, 8/9 attempts",
    lifts: [
      { label: "Squat", value: "512.5 lb" },
      { label: "Bench", value: "330.7 lb" },
      { label: "Deadlift", value: "573.2 lb" },
    ],
    profileUrl: "https://www.openpowerlifting.org/u/jordanang",
    meetUrl: "https://www.openpowerlifting.org/m/usapl/CA-2023-19#jordanang",
  },
  {
    label: "Competitive meet prep (Remote)",
    title: "1st place in 198 lb class",
    summary:
      "Remote coaching for an Aug 2023 meet supported first place in his class with structured prep.",
    metric: "1460.6 lb total, 9/9 attempts",
    lifts: [
      { label: "Squat", value: "529.1 lb" },
      { label: "Bench", value: "303.1 lb" },
      { label: "Deadlift", value: "628.3 lb" },
    ],
    profileUrl: "https://www.openpowerlifting.org/u/alvinpov",
    meetUrl: "https://www.openpowerlifting.org/m/uspa/2957#alvinpov",
  },
  {
    label: "Novice meet prep (In-person)",
    title: "First-time lifter became meet-ready",
    summary:
      "In-person meet prep from May to Nov 2024 for a first-time powerlifting athlete with minimal gym experience.",
    metric: "898.3 lb total, 8/9 attempts",
    lifts: [
      { label: "Squat", value: "297.6 lb" },
      { label: "Bench", value: "198.4 lb" },
      { label: "Deadlift", value: "402.3 lb" },
    ],
    profileUrl: "https://www.openpowerlifting.org/u/christophercruz2",
    meetUrl:
      "https://www.openpowerlifting.org/m/usapl/CA-2024-39#christophercruz2",
  },
];

function ProofLinks({ profileUrl, meetUrl, className }: ProofLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-foreground/70",
        className,
      )}
    >
      <span>OpenPowerlifting:</span>
      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-accent hover:underline"
      >
        Profile
      </a>
      <span>|</span>
      <a
        href={meetUrl}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-accent hover:underline"
      >
        Meet
      </a>
    </div>
  );
}

function TransformationGallery() {
  return (
    <SectionWrapper
      id="transformations"
      title="Transformation stories built on structure, not shortcuts"
      description="The process emphasizes clear milestones, measurable outcomes, and consistent execution."
      className="py-14 md:py-20"
    >
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">General outcomes</h3>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {generalOutcomes.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col border border-border bg-surface p-6 md:p-7"
          >
            <p className="text-sm leading-6 text-foreground/68">{item.label}</p>
            <h4 className="mt-3 text-[1.35rem] font-semibold leading-tight text-foreground">
              {item.title}
            </h4>
            <p className="mt-3 text-[15px] leading-7 text-foreground/82">
              {item.summary}
            </p>
            <p className="mt-auto border-t border-border pt-4 text-sm leading-6 text-foreground/72">
              <span className="font-semibold text-foreground">Result:</span>{" "}
              {item.metric}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-end justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">
          Powerlifting outcomes
        </h3>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {powerliftingOutcomes.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col border border-border bg-surface p-6 md:p-7"
          >
            <p className="text-sm leading-6 text-foreground/68">
              {item.label}
            </p>
            <h4 className="mt-3 text-[1.35rem] font-semibold leading-tight text-foreground xl:min-h-[4.5rem]">
              {item.title}
            </h4>
            <p className="mt-3 text-[15px] leading-7 text-foreground/82 xl:min-h-[8rem]">
              {item.summary}
            </p>
            <div className="mt-auto border-t border-border pt-4 text-sm leading-6 text-foreground/72">
              <p className="font-semibold text-foreground">Outcome</p>
              <p className="mt-1">{item.metric}</p>
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm font-semibold leading-6 text-foreground">
                Best lifts
              </p>
              <div className="mt-2 grid grid-cols-3 divide-x divide-border border border-border bg-background">
                {item.lifts.map((lift) => (
                  <div key={lift.label} className="px-2.5 py-2.5">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-foreground/55">
                      {lift.label}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-5 text-foreground">
                      {lift.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <ProofLinks
              profileUrl={item.profileUrl}
              meetUrl={item.meetUrl}
              className="mt-4 border-t border-border pt-4"
            />
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default TransformationGallery;

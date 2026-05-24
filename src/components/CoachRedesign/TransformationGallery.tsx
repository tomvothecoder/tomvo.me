import SectionWrapper from "components/CoachRedesign/SectionWrapper";
import { cn } from "lib/utils";
import { ExternalLink } from "lucide-react";

interface ProofLinksProps {
  profileUrl: string;
  meetUrl: string;
  className?: string;
}

const powerliftingOutcomes = [
  {
    label: "Advanced meet prep (Remote)",
    title: "1st place in 181 lb class",
    metric: "1416.4 lb total, 8/9 attempts",
    context: "+55.1 lb total increase from June to July meets.",
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
    metric: "1460.6 lb total, 9/9 attempts",
    context: "Remote prep with a clean meet-day execution.",
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
    metric: "898.3 lb total, 8/9 attempts",
    context: "In-person prep from minimal gym experience to platform-ready.",
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

const resultPrinciples = [
  "Measured against the client goal, training context, and timeline.",
  "Tracked with training context: bodyweight, experience level, timeline, and meet execution.",
  "Shared with care as approved testimonials and case studies are collected.",
];

function ProofLinks({ profileUrl, meetUrl, className }: ProofLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 text-xs leading-5",
        className,
      )}
    >
      <span className="text-[#4d574f]">OpenPowerlifting:</span>

      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-[#a33c22]/35 bg-[#fffaf1] px-3 py-1.5 font-semibold text-[#a33c22] transition hover:border-[#a33c22] hover:bg-[#efe8dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a33c22]"
        aria-label="View OpenPowerlifting profile"
      >
        Profile
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>

      <a
        href={meetUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-[#a33c22]/35 bg-[#fffaf1] px-3 py-1.5 font-semibold text-[#a33c22] transition hover:border-[#a33c22] hover:bg-[#efe8dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a33c22]"
        aria-label="View OpenPowerlifting meet result"
      >
        Meet
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function TransformationGallery() {
  return (
  <SectionWrapper
    id="results"
    eyebrow="Results and proof"
    title="Results make more sense with context."
    description="Strong coaching is more than numbers on a page. It is clearer execution, better decisions, and measurable progress over enough weeks to matter."
    descriptionClassName="text-[#2e4036]/75"
    className="bg-[#f7f4ed] py-16 md:py-24"
  >
    <div className="divide-y divide-[#cfc4b5] border-y border-[#cfc4b5]">
      {powerliftingOutcomes.map((item) => (
        <article key={item.title} className="py-6 md:py-8">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
          <div className="min-w-0">
            <p className="coach-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a33c22]">
              {item.label}
            </p>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#141816] md:text-4xl">
              {item.metric}
            </h3>

            <p className="mt-3 text-lg font-semibold leading-6 text-[#141816]">
              {item.title}
            </p>

            <p className="mt-2 max-w-3xl text-[15px] leading-7 text-[#4d574f]">
              {item.context}
            </p>

            <ProofLinks
              profileUrl={item.profileUrl}
              meetUrl={item.meetUrl}
              className="mt-4"
            />
          </div>

          <div className="grid grid-cols-3 divide-x divide-[#cfc4b5] rounded-lg border border-[#cfc4b5] bg-[#fffaf1] xl:mt-1">
            {item.lifts.map((lift) => (
              <div key={lift.label} className="px-4 py-3">
                <p className="coach-mono text-[10px] font-semibold uppercase tracking-wide text-[#4d574f]">
                  {lift.label}
                </p>
                <p className="mt-1 whitespace-nowrap text-sm font-bold leading-5 text-[#141816]">
                  {lift.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
      ))}
    </div>

    <div className="mt-6 grid gap-4 rounded-lg border border-[#cfc4b5] bg-[#efe8dc] p-5 text-[14px] leading-7 text-[#39443e] md:grid-cols-[1fr_auto] md:items-center">
      <p>
        Results are shown with training context when available: client goal,
        bodyweight, experience level, timeline, meet execution, and verified
        OpenPowerlifting results.
      </p>

      <p className="coach-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#a33c22]">
        Case studies coming soon
      </p>
    </div>
  </SectionWrapper>
);
}

export default TransformationGallery;

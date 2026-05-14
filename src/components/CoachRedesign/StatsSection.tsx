const stats = [
  {
    value: "5 Years",
    label: "Private coaching experience",
  },
  {
    value: "In-person + Online",
    label: "Flexible coaching formats",
  },
  {
    value: "2 Cities",
    label: "Fremont and Newark coverage",
  },
  {
    value: "Weekly",
    label: "Plan reviews and check-ins",
  },
];

const audiences = [
  {
    title: "General gym clients",
    description:
      "Build consistency, learn better technique, and make training feel structured without turning your life into a prep cycle.",
  },
  {
    title: "Strength-focused lifters",
    description:
      "Improve your squat, bench, deadlift, accessories, mobility, and recovery with a plan that progresses on purpose.",
  },
  {
    title: "Powerlifting clients",
    description:
      "Prepare for a meet with peaking, attempt strategy, and feedback that keeps execution clear.",
  },
];

function StatsSection() {
  return (
    <section
      id="fit"
      className="scroll-mt-40 bg-[#f7f4ed] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="coach-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#a33c22]">
            Who this is for
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#141816] md:text-5xl">
            Coaching for gym clients who want better training.
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-[#4d574f]">
            You do not need to be a competitive lifter. You do need a goal, a
            schedule we can work with, and interest in training with more
            purpose.
          </p>
        </div>

        <div className="mt-9 grid overflow-hidden rounded-lg border border-[#cfc4b5] bg-[#fffaf1] sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className={[
                "p-5 md:p-6",
                index < stats.length - 1
                  ? "border-b border-[#cfc4b5] xl:border-b-0 xl:border-r"
                  : "",
                index === 1 || index === 3
                  ? "sm:border-l sm:border-[#cfc4b5] xl:border-l-0"
                  : "",
              ].join(" ")}
            >
              <p className="text-xl font-bold tracking-tight text-[#141816] md:text-2xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[#4d574f]">
                {item.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="border-t border-[#cfc4b5] pt-5"
            >
              <h3 className="text-lg font-bold text-[#141816]">
                {audience.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4d574f]">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

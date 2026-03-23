const stats = [
  {
    value: "5 Years",
    label: "Private coaching experience",
  },
  {
    value: "In-person + Online",
    label: "Coaching formats available",
  },
  {
    value: "2 Cities",
    label: "Fremont and Newark coverage",
  },
  {
    value: "Weekly",
    label: "Plan adjustments and check-ins",
  },
];

function StatsSection() {
  return (
    <section id="proof" className="px-6 py-4 md:px-10 md:py-8">
      <div className="mx-auto grid w-full max-w-6xl border border-[#cad2c7] bg-[#dde5dc] sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <article
            key={item.label}
            className={[
              "p-5 md:p-6",
              index < stats.length - 1 ? "border-b border-[#cad2c7] xl:border-b-0" : "",
              index % 2 === 0 ? "xl:border-r xl:border-[#cad2c7]" : "",
              index === 1 ? "sm:border-l sm:border-[#cad2c7] xl:border-l-0" : "",
              index === 3 ? "sm:border-l sm:border-[#cad2c7] xl:border-l-0" : "",
            ].join(" ")}
          >
            <p className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {item.value}
            </p>
            <p className="mt-1.5 text-sm leading-6 text-foreground/68">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;

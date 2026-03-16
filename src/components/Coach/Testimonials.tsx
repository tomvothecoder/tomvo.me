import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Coached USPA/USAPL lifters to top-three placements with structured peaking and meet-day planning.",
      byline: "Powerlifting coaching outcomes",
    },
    {
      quote:
        "Helped clients reach weight-loss goals using habit-based nutrition and training consistency.",
      byline: "Lifestyle and body composition outcomes",
    },
    {
      quote:
        "All-time gym PRs include 375 lb squat, 230 lb bench, and 500 lb deadlift.",
      byline: "Coach lifting credentials",
    },
  ];

  return (
    <section>
      <div className="columns is-centered is-multiline">
        {testimonials.map((item) => (
          <div key={item.quote} className="column is-4">
            <article className="card coach-surface-card coach-testimonial-card">
              <div className="card-content has-text-left">
                <p className="coach-testimonial-quote">“{item.quote}”</p>
                <p className="coach-testimonial-byline">{item.byline}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

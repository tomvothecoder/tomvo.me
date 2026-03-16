import React from "react";

const ServicesList: React.FC = () => {
  const services = [
    {
      title: "1:1 Personal Training",
      description:
        "In-person coaching focused on strength, movement quality, and accountability.",
      forWho:
        "Best for: Lifters who want hands-on instruction and live form coaching.",
      includes: [
        "Technique coaching",
        "Progressive training blocks",
        "Session-by-session feedback",
      ],
    },
    {
      title: "Online Strength Coaching",
      description:
        "Custom programming with weekly guidance and adjustments based on your performance.",
      forWho:
        "Best for: Busy lifters who train independently but want expert oversight.",
      includes: [
        "Individualized plan",
        "Weekly check-ins",
        "Video form review",
      ],
    },
    {
      title: "Powerlifting Meet Prep",
      description:
        "Peaking cycles and attempt selection strategy to help you perform on meet day.",
      forWho:
        "Best for: Powerlifters preparing for their first meet or next PR total.",
      includes: [
        "Peaking structure",
        "Attempt strategy",
        "Competition readiness",
      ],
    },
    {
      title: "Nutrition & Accountability",
      description:
        "Habit-based nutrition coaching built for consistency, recovery, and body composition goals.",
      forWho:
        "Best for: Clients wanting sustainable nutrition without rigid meal plans.",
      includes: [
        "Habit coaching",
        "Simple nutrition targets",
        "Ongoing accountability",
      ],
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="columns is-multiline is-centered">
          {services.map((service) => (
            <div key={service.title} className="column is-5">
              <article className="card coach-surface-card coach-service-card">
                <div className="card-content has-text-left">
                  <h2 className="coach-card-title">{service.title}</h2>
                  <p className="coach-card-description">
                    {service.description}
                  </p>
                  <p className="coach-service-fit">{service.forWho}</p>
                  <ul className="coach-service-list">
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "In person.",
    format: "Fremont & Newark",
    description:
      "Hands-on strength coaching, real-time technique cues, and a training rhythm you can repeat. Build confidence under the bar, one session at a time.",
  },
  {
    number: "02",
    title: "Online.",
    format: "Your gym. My guidance.",
    description:
      "Custom training blocks, video feedback, and weekly check-ins. A clear plan that adapts to your progress, recovery, and schedule—not the other way around.",
  },
  {
    number: "03",
    title: "On the platform.",
    format: "Powerlifting meet prep",
    description:
      "Peaking, attempt selection, and a meet-day plan. From your first competition to your next total, know what you’re working toward and how to get there.",
  },
];

function ServicesSection() {
  return (
    <section
      id="coaching"
      className="strength-services"
      aria-labelledby="services-title"
    >
      <div id="services" className="strength-services-body">
        <header className="strength-section-heading">
          <p className="strength-entry">
            <span>03 /</span> The coaching
          </p>
          <h2 id="services-title">
            Personal coaching. <br />
            In your corner.
          </h2>
          <p>Different starting points. The same attention to detail.</p>
        </header>
        <div className="strength-service-list">
          {services.map((service) => (
            <article className="strength-service" key={service.number}>
              <span className="strength-log-number" aria-hidden="true">
                {service.number}
              </span>
              <div>
                <h3>{service.title}</h3>
                <p className="strength-service-format">{service.format}</p>
              </div>
              <p>{service.description}</p>
            </article>
          ))}
          <div className="strength-service-note">
            <p>
              Movement prep, mobility, and recovery support are part of the
              work—not an afterthought.
            </p>
            <p>
              Rates depend on the coaching format and support you need. We’ll
              discuss the simplest option and clear pricing before anything
              starts.
            </p>
            <a className="strength-text-link" href="#apply">
              Find your coaching fit <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

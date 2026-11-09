import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "In person",
    format: "Fremont & Newark",
    description:
      "Hands-on coaching with real-time technique cues. Build confidence under the bar, one session at a time.",
  },
  {
    title: "Online",
    format: "Your gym, my guidance",
    description:
      "Custom training blocks, video feedback, and weekly check-ins. The plan adapts to your progress, recovery, and schedule.",
  },
  {
    title: "Meet prep",
    format: "Powerlifting",
    description:
      "Peaking, attempt selection, and a meet-day plan, from your first competition to your next total.",
  },
];

function ServicesSection() {
  return (
    <section
      id="coaching"
      className="strength-services"
      aria-labelledby="services-title"
    >
      <div id="services" className="strength-services-intro">
        <h2 id="services-title">Strength starts where you are.</h2>
        <p>
          New to lifting, training for everyday life, or building on years of
          experience? You don’t need to be a competitive lifter. You need a
          goal, honest feedback, and a plan that makes sense for your life.
        </p>
      </div>
      <ul className="strength-service-list">
        {services.map((service) => (
          <li key={service.title}>
            <h3>{service.title}</h3>
            <p className="strength-service-format">{service.format}</p>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <p className="strength-service-note">
        Rates depend on the format and support you need. We’ll agree on the
        simplest option and clear pricing before anything starts.{" "}
        <a className="strength-inline-link" href="#apply">
          Find your coaching fit
        </a>
      </p>
    </section>
  );
}

export default ServicesSection;

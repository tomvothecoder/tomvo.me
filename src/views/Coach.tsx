import { CSSinJS } from "common/types";
import Banner from "components/Coach/Banner";
import ContactForm from "components/Coach/ContactForm";
import CoreValues from "components/Coach/CoreValues";
import Facts from "components/Coach/Facts";
import Hero from "components/Coach/Hero";
import ServicesList from "components/Coach/Services/ServicesList";
import System from "components/Coach/Services/System";
import Testimonials from "components/Coach/Testimonials";
import "views/Coach.css";

const Coach: React.FC = () => {
  const styles: CSSinJS = {
    coachingSystem: { backgroundColor: "#253D5B", color: "#fff" },
  };

  return (
    <div id="coach">
      <Hero />
      <Banner />

      <section className="section" id="who-i-work-with">
        <div className="container has-text-centered">
          <h2 className="coach-section-title">Who I work with</h2>
          <CoreValues />
        </div>
      </section>

      <section
        className="section"
        id="services-list"
        style={styles["coachingSystem"]}
      >
        <div className="container has-text-centered">
          <h2 className="coach-section-title coach-section-title--light">
            Coaching offers
          </h2>
          <ServicesList />
        </div>
      </section>

      <section className="section" id="coaching-system">
        <div className="container has-text-centered">
          <h2 className="coach-section-title">How coaching works</h2>
          <System />
        </div>
      </section>

      <section className="section" id="results">
        <div className="container has-text-centered">
          <h2 className="coach-section-title">Results and proof</h2>
          <Testimonials />
        </div>
      </section>

      <section className="section" id="about-coach">
        <div className="container has-text-centered">
          <h2 className="coach-section-title">Why clients trust me</h2>
          <Facts />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Coach;

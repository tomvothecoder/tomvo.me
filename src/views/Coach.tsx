import About from "components/Coach/About";
import ContactForm from "components/Coach/ContactForm";
import CoreValues from "components/Coach/CoreValues";
import Facts from "components/Coach/Facts";
import Hero from "components/Coach/Hero";
import Services from "components/Coach/Services/Services";

const Coach: React.FC = () => {
  return (
    <div id="coach">
      <Hero />
      <section className="section" id="about">
        <div className="container">
          <h1 className="section-title has-text-centered">
            — Why Did I Become CPT? —
          </h1>
          <About />
        </div>
      </section>

      <section className="section" id="values">
        <div className="container has-text-centered">
          <h1 className="section-title">— Quick Facts About Me —</h1>
          <Facts />
        </div>
      </section>

      <section className="section" id="values">
        <div className="container has-text-centered">
          <h1 className="section-title">— My Core Values —</h1>
          <CoreValues />
        </div>
      </section>

      <section className="section" id="services">
        <div className="container has-text-centered">
          <h1 className="section-title">— Services I Offer —</h1>
          <Services />
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

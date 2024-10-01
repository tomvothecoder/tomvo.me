import { CSSinJS } from "common/types";
import Banner from "components/Coach/Banner";
import ContactForm from "components/Coach/ContactForm";
import CoreValues from "components/Coach/CoreValues";
import Facts from "components/Coach/Facts";
import Hero from "components/Coach/Hero";
import ServicesList from "components/Coach/Services/ServicesList";
import System from "components/Coach/Services/System";
import "views/Coach.css";

const Coach: React.FC = () => {
  const styles: CSSinJS = {
    coachingSystem: { backgroundColor: "#253D5B", color: "#fff" },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: 500,
      color: "black",
      marginBottom: "2%",
    },
    whiteSectionTitle: {
      fontSize: "24px",
      fontWeight: 500,
      color: "white",
      marginBottom: "2%",
    },
  };

  return (
    <div id="coach">
      <Hero />
      <Banner />

      <section className="section" id="values">
        <div className="container has-text-centered">
          <h1 style={styles["sectionTitle"]}>— My Core Values —</h1>
          <CoreValues />
        </div>
      </section>

      <section
        className="section"
        id="services-list"
        style={styles["coachingSystem"]}
      >
        <div className="container has-text-centered">
          <h1 style={styles["whiteSectionTitle"]}>— Services I Offer —</h1>
          <ServicesList />
        </div>
      </section>

      <section className="section" id="coaching-system">
        <div className="container has-text-centered">
          <h1 style={styles["sectionTitle"]}>— My Coaching System —</h1>
          <System />
        </div>
      </section>

      <section className="section" id="values">
        <div className="container has-text-centered">
          <h1 style={styles["sectionTitle"]}>— Get to Know Me —</h1>
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

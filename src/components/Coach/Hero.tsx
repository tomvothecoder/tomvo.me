import selfPortrait from "assets/me.jpg";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { CSSinJS } from "common/types";
import Banner from "components/Coach/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "components/Career/Hero.css";

function Hero() {
  const styles: CSSinJS = {
    selfie: { justifyContent: "center" },
    igHandle: { fontSize: "24px", marginLeft: "5px" },
  };

  return (
    <section className="section container" id="the-hero">
      <Banner />

      <div className="hero is-small">
        <div className="hero-body">
          <div className="columns is-9 is-centered is-vcentered">
            <div
              className="column is-4"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <figure
                style={styles["selfie"]}
                className="image is-inline-block"
              >
                <img src={selfPortrait} alt="me" />
              </figure>
            </div>

            <div
              className="column is-5 has-text-left"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h3 id="hero-welcome">Hey There!</h3>
              <h1 id="hero-title">I'm Tom Vo,</h1>
              <p id="hero-description">
                <span className="has-text-weight-bold">
                  a NASM Certified Personal Trainer and Powerlifting Coach with
                  over a decade of lifting experience.
                </span>{" "}
                I specialize in powerlifting, strength and conditioning,
                hypertrophy, and weight-loss. I have coached numerous
                powerlifting athletes, including those who placed top three in
                their division and others winning best overall lifter. I've also
                helped clients reached their weight-loss goals through
                habit-based nutrition and exercise programs.
              </p>
              <p id="hero-description">
                <span className="has-text-weight-bold">
                  My coaching philosophy focuses on applying science-based
                  practices with a deep understanding of each client's unique
                  goals and life circumstances.
                </span>{" "}
                I'm a continuous learner and I love sharing my passion in health
                and fitness with everyone. Enough about me, let's link up and
                train together! 💪🙌
              </p>
              <div className="hero-icon">
                <div style={styles["socialMedia"]}>
                  <p className="bd-notification is-primary">
                    <a
                      href="https://www.instagram.com/coachtomvo/"
                      id="instagram-icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="3x" />
                      <span style={styles["igHandle"]}>@coachtomvo</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

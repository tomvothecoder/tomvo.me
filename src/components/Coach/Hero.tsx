import selfPortrait from "assets/me.jpg";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { CSSinJS } from "common/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  const styles: CSSinJS = {
    selfie: { justifyContent: "center" },
    igHandle: { fontSize: "18px", marginLeft: "8px" },
  };

  return (
    <section className="section container" id="coach-hero">
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
                <img
                  src={selfPortrait}
                  alt="Coach Tom Vo"
                  className="coach-hero-image"
                />
              </figure>
            </div>

            <div
              className="column is-5 has-text-left"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <p className="coach-kicker">NASM-Certified Personal Trainer</p>
              <h1 className="coach-hero-title">
                Strength coaching for lifters and athletes who want structured,
                measurable progress.
              </h1>
              <p className="coach-hero-subtitle">
                Individualized programming, powerlifting meet prep, and
                habit-based nutrition coaching designed around your goals and
                schedule.
              </p>

              <div className="coach-hero-cta">
                <a className="button is-link is-medium" href="#contact">
                  Start Coaching
                </a>
                <a
                  className="button is-outlined is-medium coach-cta-secondary"
                  href="#services-list"
                >
                  View Services
                </a>
              </div>

              <p className="coach-hero-social">
                <a
                  href="https://www.instagram.com/coachtomvo/"
                  id="instagram-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <span style={styles["igHandle"]}>@coachtomvo</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

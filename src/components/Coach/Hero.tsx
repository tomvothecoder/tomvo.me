import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import selfPortrait from "assets/me.jpg";
import { CSSinJS } from "common/types";
import "components/Career/Hero.css";

function Hero() {
  const styles: CSSinJS = { selfie: { justifyContent: "center" } };

  return (
    <section className="section container" id="the-hero">
      <div className="hero is-small">
        <div className="hero-body">
          <div className="columns is-9 is-centered is-vcentered">
            <div
              className="column is-4"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <figure style={styles["selfie"]} className="image">
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
                a NASM Certified Personal Trainer and Powerlifting Coach. I
                pride myself on deeply understanding each of my clients' goals
                and aspirations. I provide truly individualized services using a
                feedback-driven training and nutritional coaching system.
              </p>
              <p id="hero-description">
                I am driven to grow my knowledge and share my passion in
                exercise with my clients. Enough said, let's link up and make
                some gains together! 💪🙌
              </p>
              <div className="hero-icon">
                <a
                  href="https://www.instagram.com/coachtomvo/"
                  id="instagram-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

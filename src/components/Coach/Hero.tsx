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
          <div className="columns is-8 is-centered is-vcentered">
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
              className="column is-4 has-text-left"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h1 id="hero-welcome">Hey There!</h1>
              <h1 id="hero-title">
                I'm <span className="hero-name">Tom Vo.</span>
              </h1>
              <p id="hero-description">
                NASM CPT and Powerlifting Coach.
                <span className="blinking-cursor">|</span>
              </p>
              <a
                href="https://www.instagram.com/coachtomvo/"
                id="linkedin-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

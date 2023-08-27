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
              <h3 id="hero-welcome">Hey There!</h3>
              <h1 id="hero-title">I'm Tom Vo,</h1>
              <p id="hero-description">
                a NASM Certified Personal Trainer and Powerlifting Coach. My
                core philosophy is to focus on the individual needs of each of
                my client because we are all different. Over the years I
                developed science-based and feedback-driven system
              </p>
              <p id="hero-description">
                My services are custom tailored to my clients' goals,
                aspirations, and experience level. I am driven to help everybody
                and anybody, whether you're training for a sport or general
                health and wellbeing!
              </p>

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
    </section>
  );
}

export default Hero;

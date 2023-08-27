import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
                a Software Engineer in Climate Science. I’m currently working on
                open-source scientific software for climate science modeling and
                data analysis!
              </p>
              <p id="hero-description">
                As a software engineer, I enjoy the process involved in the
                entire lifecycle of ideas. From prototyping to the
                implementation phase, I strive to follow a pragmatic approach by
                using effective methodologies to build robust tools. A wise
                programmer once said, "don't forget to test your code!"
                <span className="blinking-cursor">|</span>
              </p>
              <div className="hero-icon">
                <a
                  href="https://github.com/tomvothecoder"
                  id="github-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/votom/"
                  id="linkedin-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
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

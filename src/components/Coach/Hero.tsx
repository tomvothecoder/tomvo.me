import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSinJS } from "common/types";
import "components/Career/Hero.css";
import ReactPlayer from "react-player";

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
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player fixed-bottom"
                    url="videos/IMG_3290.mp4"
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    muted={true}
                  />
                </div>
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
                <strong>
                  a NASM Certified Personal Trainer and Powerlifting Coach with
                  over a decade of lifting experience.
                </strong>{" "}
                I've coached numerous powerlifting athletes over the years,
                including those who placed top three in their division, with
                some winning best overall lifter. I've also helped clients
                reached their weight-loss goals through habit-based nutrition
                and exercise programs.
              </p>
              <p id="hero-description">
                <strong>
                  My coaching philosophy focuses on deeply understanding
                  each of my client's goals and life circumstances to provide
                  individualized services.
                </strong>{" "}
                I'm a life-long continuous learner who loves to share my passion
                in health and fitness with everyone. Enough said, let's link up
                and make some gains together! 💪🙌
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

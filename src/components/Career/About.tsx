import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import selfPortrait from "assets/me.jpg";
import { CSSinJS } from "common/types";
type Props = {};

const About: React.FC<Props> = () => {
  const styles: CSSinJS = {
    "letsConnect": {
      marginTop: "1rem",
      fontWeight: "600",
    },
  };

  return (
    <div id="about">
      <div
        className="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="125"
      >
        <div className="column is-three-quarters">
          <div className="card">
            <div className="card-content">
              <div className="columns">
                <div className="column is-one-quarter">
                  <figure className="image">
                    <img src={selfPortrait} alt="me" id="me" />
                  </figure>
                </div>
                <div className="column is-three-quarters">
                  <p className="job-desc">
                    As a software engineer, I enjoy the thought process involved
                    in the entire lifecycle of ideas. From prototyping to the
                    implementation phase, I strive to follow a pragamatic
                    approach and use effective metholodogies to build robust
                    tools. A wise programmer once said, "don't forget to test
                    your code!"
                  </p>
                  <p className="job-desc">
                    Aside from programming, my passions include powerlifting,
                    running, hiking, watching MMA, and eating the best burrito
                    that a town has to offer. Catch me around the California bay
                    area!
                  </p>

                  <div className="container has-text-centered">
                    <h2 style={styles.letsConnect}>
                      Let's get in touch. LinkedIn or email works best.
                    </h2>
                    <h1 className="has-text-weight-bold	">
                      Email: tomvothecoder@gmail.com
                    </h1>
                    <div className="columns is-mobile is-multiline is-centered">
                      <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                          <a
                            href="https://www.linkedin.com/in/votom/"
                            id="linkedin-icon"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faLinkedin} size="5x"/>
                          </a>
                        </p>
                      </div>
                      <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                          <a
                            href="https://github.com/tomvothecoder"
                            id="github-icon"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faGithub} size="5x"/>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

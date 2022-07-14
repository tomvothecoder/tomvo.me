import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import me from '../assets/me.jpg';

const styles = {
  letsConnect: {
    marginTop: '4%',
    fontWeight: 600,
  },
};

function About() {
  return (
    <div id="about">
      <div
        className="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="75"
      >
        <div className="column is-three-quarters">
          <div className="columns">
            <div className="column is-one-quarter">
              <figure className="image">
                <img src={me} alt="me" id="me" />
              </figure>
            </div>
            <div className="column is-three-quarters">
              <p className="job-desc">
                As a software engineer, I enjoy the thought process involved in
                planning and executing new ideas. Aside from programming, I
                enjoy living a fitness lifestyle, hiking, photography, and
                eating the best Mexican food that any town has to offer. Catch
                me around the California bay area!
              </p>

              <div className="container has-text-centered">
                <h1 className="has-text-weight-bold	" style={styles.letsConnect}>
                  Let&apos;s get in touch.
                </h1>
                <h1 className="has-text-weight-bold	">
                  Email: tomvothecoder@gmail.com
                </h1>
                <div className="columns is-mobile is-multiline is-centered">
                  <div className="column is-narrow">
                    <p className="bd-notification is-primary">
                      <a
                        href="https://www.linkedin.com/in/tomvo16/"
                        id="linkedin-icon"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="5x" />
                      </a>
                    </p>
                  </div>
                  <div className="column is-narrow">
                    <p className="bd-notification is-primary">
                      <a
                        href="https://github.com/tomvothecoder"
                        id="github-icon"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faGithub} size="5x" />
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
  );
}

export default About;

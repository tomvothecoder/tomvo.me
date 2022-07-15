import "components/Career/Hero.css";

function Hero() {
  return (
    <section className="section" id="the-hero">
      <div className="hero is-large is-center">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 id="hero-welcome">Hi, I'm</h1>
            <h1 id="hero-title">Tom Vo</h1>
            <h2 id="hero-description">
              I'm a Software Engineer in Climate Science.
              <span className="blinking-cursor">|</span>
            </h2>
          </div>
          <div className="container has-text-centered">
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-narrow">
                <p className="bd-notification is-primary">
                  <a
                    href="https://www.linkedin.com/in/votom/"
                    id="linkedin-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin fa-3x"></i>
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
                    <i className="fab fa-github fa-3x"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

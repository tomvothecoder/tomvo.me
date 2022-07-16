import About from "components/Career/About";
import Experience from "components/Career/Experience/Experience";
import Hero from "components/Career/Hero";
import Portfolio from "components/Career/Portfolio/Portfolio";
import Skills from "components/Career/Skills/Skills";
import "views/Career.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="section" id="experience">
        <div className="container">
          <h1 className="section-title has-text-centered">
            — Where I've been —
          </h1>
          <Experience />
        </div>
      </section>

      <section className="section" id="skills">
      <div className="container has-text-centered">
        <h1 className="section-title">— Things I've Learned —</h1>
        <Skills/>
      </div>
    </section>

      <section className="section" id="portfolio">
        <div className="container has-text-centered">
          <h1 className="section-title">— Some of my work —</h1>
          <Portfolio />
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h1 className="section-title has-text-centered">
            — A little about me —
          </h1>
          <About />
        </div>
      </section>
    </div>
  );
}

export default Home;

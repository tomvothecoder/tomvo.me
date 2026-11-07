import portrait from "assets/me-1200.jpg";
import portraitSmall from "assets/me-768.jpg";

function CoachCredibilitySection() {
  return (
    <section
      id="about"
      className="strength-about"
      aria-labelledby="about-title"
    >
      <figure>
        <img
          src={portrait}
          srcSet={`${portraitSmall} 576w, ${portrait} 900w`}
          sizes="(min-width: 760px) 40vw, 100vw"
          alt="Tom Vo smiling outside a café, away from the training floor"
          width="900"
          height="1200"
          loading="lazy"
        />
        <figcaption>Tom Vo / Coach, lifter, person first.</figcaption>
      </figure>
      <div className="strength-about-copy">
        <p className="strength-entry">
          <span>04 /</span> Your coach
        </p>
        <h2 id="about-title">
          A lifter. <br />
          Not a fitness <br />
          <em>persona.</em>
        </h2>
        <p className="strength-about-lead">
          Lifting gave me a place to practice patience, problem solving, and
          showing up.
        </p>
        <p>
          I got into lifting because progress felt honest: learn the movement,
          make small adjustments, repeat. Over time, powerlifting became a way
          to build confidence and community, not just stronger lifts.
        </p>
        <p>
          That’s how I coach. I want you to feel seen, supported, and clear on
          why the plan looks the way it does. The training matters. The
          relationship behind it matters too.
        </p>
        <div className="strength-about-signoff">
          <span>Tom Vo</span>
          <p>
            NASM-certified personal trainer <br />
            Fremont & Newark, California
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoachCredibilitySection;

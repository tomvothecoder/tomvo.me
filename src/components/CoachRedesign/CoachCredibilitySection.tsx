import portrait from "assets/me-1200.jpg";
import portraitSmall from "assets/me-768.jpg";
import PhotoSlot from "components/CoachRedesign/PhotoSlot";
import { photos } from "components/CoachRedesign/photos";

const portraitSizes =
  "(min-width: 1264px) 380px, (min-width: 768px) 32vw, calc(100vw - 40px)";

function CoachCredibilitySection() {
  return (
    <section
      id="about"
      className="strength-about"
      aria-labelledby="about-title"
    >
      <div className="strength-about-copy">
        <h2 id="about-title">A coach who cares about the person, too.</h2>
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
        <p>
          I’m also a Research Software Engineer. That analytical mindset shapes
          my coaching: question assumptions, track outcomes, and refine the plan
          to fit the individual.
        </p>
        <p className="strength-about-credential">
          Tom Vo, NASM-certified personal trainer
        </p>
      </div>
      <PhotoSlot
        photo={photos.about}
        className="strength-about-photo"
        sizes={portraitSizes}
        fallback={
          <img
            className="strength-about-photo"
            src={portrait}
            srcSet={`${portraitSmall} 576w, ${portrait} 900w`}
            sizes={portraitSizes}
            alt="Tom Vo smiling outside a café, away from the training floor"
            width="900"
            height="1200"
            loading="lazy"
          />
        }
      />
    </section>
  );
}

export default CoachCredibilitySection;

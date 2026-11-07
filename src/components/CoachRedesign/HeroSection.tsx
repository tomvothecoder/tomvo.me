import { ArrowDown, ArrowUpRight } from "lucide-react";
import trainingPhoto from "assets/training-deadlift.jpg";
import trainingPhotoSmall from "assets/training-deadlift-600.jpg";

function HeroSection() {
  return (
    <section id="hero" className="strength-hero" aria-labelledby="hero-title">
      <div className="strength-hero-copy">
        <p className="strength-location">
          Independent strength coaching
          <br />
          Fremont, Newark & online
        </p>
        <h1 id="hero-title">
          Strength. <br />
          For real <br />
          <span>life.</span>
        </h1>
        <div className="strength-hero-intro">
          <p>
            Train with purpose. Get stronger. Still have a life outside the gym.
            Personal coaching with Tom Vo, built around you.
          </p>
          <a href="#apply" className="strength-button">
            Apply for coaching <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="strength-hero-foot">
          <span>NASM-certified personal trainer</span>
          <a href="#fit" aria-label="Explore the coaching approach">
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="strength-hero-photo">
        <img
          src={trainingPhoto}
          srcSet={`${trainingPhotoSmall} 600w, ${trainingPhoto} 960w`}
          sizes="(min-width: 760px) 48vw, 100vw"
          alt="Tom training the deadlift, holding a loaded barbell at lockout"
          width="960"
          height="1706"
          fetchPriority="high"
          loading="eager"
        />
        <figcaption>
          <span>Tom Vo / In training</span>
          <span>Built rep by rep.</span>
        </figcaption>
      </figure>
    </section>
  );
}

export default HeroSection;

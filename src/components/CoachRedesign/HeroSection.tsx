import { ArrowDown, ArrowUpRight } from "lucide-react";
import trainingPhoto from "assets/training-deadlift.jpg";
import trainingPhotoSmall from "assets/training-deadlift-600.jpg";

function HeroSection() {
  return (
    <section id="hero" className="strength-hero" aria-labelledby="hero-title">
      <div className="strength-hero-copy">
        <p className="strength-entry">Individualized strength coaching</p>
        <h1 id="hero-title">
          Get stronger. <br />
          Train with purpose.
        </h1>
        <div className="strength-hero-intro">
          <p>
            Personal resistance training informed by exercise science. Built
            around your goals, your experience, and your life outside the gym.
          </p>
          <a href="#apply" className="strength-button">
            Apply for coaching <ArrowUpRight aria-hidden="true" />
          </a>
          <p className="strength-location">
            With Tom Vo · Fremont, Newark & online
          </p>
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
          sizes="(min-width: 1264px) 467px, (min-width: 1024px) 38vw, (min-width: 768px) 36vw, (min-width: 488px) 448px, calc(100vw - 40px)"
          alt="Tom training the deadlift, holding a loaded barbell at lockout"
          width="960"
          height="1706"
          fetchPriority="high"
          loading="eager"
        />
        <figcaption>
          <span>Tom Vo / In training</span>
          <span>01 / Deadlift</span>
        </figcaption>
      </figure>
    </section>
  );
}

export default HeroSection;

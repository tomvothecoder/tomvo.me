import { ArrowUpRight } from "lucide-react";
import trainingPhoto from "assets/training-deadlift.jpg";
import trainingPhotoSmall from "assets/training-deadlift-600.jpg";

function HeroSection() {
  return (
    <section id="hero" className="strength-hero" aria-labelledby="hero-title">
      <div className="strength-hero-copy">
        <h1 id="hero-title">
          Get stronger. <br />
          Train with purpose.
        </h1>
        <p>
          Individualized strength coaching, built around your goals, your
          experience, and your life outside the gym. In person in Fremont and
          Newark, or online.
        </p>
        <a href="#apply" className="strength-button">
          Apply for coaching <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <img
        className="strength-hero-photo"
        src={trainingPhoto}
        srcSet={`${trainingPhotoSmall} 600w, ${trainingPhoto} 960w`}
        sizes="(min-width: 1264px) 584px, (min-width: 768px) 46vw, calc(100vw - 40px)"
        alt="Tom Vo training the deadlift, holding a loaded barbell at lockout"
        width="960"
        height="1706"
        fetchPriority="high"
        loading="eager"
      />
    </section>
  );
}

export default HeroSection;

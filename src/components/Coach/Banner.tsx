import "components/Career/Hero.css";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="container columns is-9 is-centered is-vcentered">
      <div
        className="column is-9 has-text-centered"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <h1 id="hero-quote">"Science-based, performance driven training"</h1>
      </div>
    </div>
  );
};

export default Banner;

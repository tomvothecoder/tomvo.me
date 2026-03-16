import React from "react";

const Banner: React.FC = () => {
  const trustPoints = [
    "NASM Certified",
    "Powerlifting Coaching",
    "Science-Based Programming",
    "Individualized Plans",
    "Meet Prep Experience",
  ];

  return (
    <section className="section pt-2" id="trust-signals">
      <div className="container">
        <div className="coach-trust-bar">
          {trustPoints.map((point) => (
            <span key={point} className="coach-trust-chip">
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;

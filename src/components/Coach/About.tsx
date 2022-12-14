import selfPortrait from "assets/me.jpg";
import { CSSinJS } from "common/types";
import React from "react";

const About: React.FC = () => {
  const styles: CSSinJS = { selfie: { justifyContent: "center" } };

  return (
    <section id="cpt">
      <div className="columns is-10 is-centered">
        <div className="column is-3" data-aos="fade-up" data-aos-delay="100">
          <figure style={styles["selfie"]} className="image">
            <img src={selfPortrait} alt="me" />
          </figure>
        </div>
        <div className="column is-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <div className="card-content">
              <p>
                When I was fourteen my brother introduced me to exercise as
                summertime hobby. I admit, logging off of Maplestory took some
                convincing. I went from slaying monsters to slaying weights.
                <b>
                  {" "}
                  Physical training has been an integral part of my life for
                  over a decade.
                </b>
                <br />
                <br />
                <b>
                  Throughtout the years I dedicated hundreds of hours researching exercise
                  science, kinesiology, and program development.{" "}
                </b>
                I coached friends and family members in their own exercise
                journeys, which ranged from general health and fitness to
                powerlifting. I find immense joy in helping people develop tangible
                goals and achieving them one step at a time.{" "}
                <br />
                <br />
                <b>
                  As a NASM Certified Personal Trainer, I practice an
                  empathetic, science-based approach to guide my clients in
                  their pursuit of self-development.{" "}
                </b>
                I am driven to learn, ask questions, and share my knowledge with
                others. Whether you're new to exercise or have prior experience,
                I would love to learn about your aspirations in exercise. Enough
                said, let's make some gains together! 💪🙌
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

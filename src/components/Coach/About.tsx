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
                When I was fourteen years old, my brother introduced me to home
                workouts as a summertime hobby. I admit, logging off of
                Maplestory to lift took some convincing. From slaying bosses to
                slaying weights,
                <b> physical training became an integral part of my life.</b>
                <br />
                <br />
                <b>
                  Over the years, I invested hundreds of hours researching
                  exercise science, kinesiology, and program development.{" "}
                </b>
                I coached friends and family members in their own exercise
                journeys, refining my skills in the process. I am driven to
                learn, ask questions, and share my knowledge with others.{" "}
                <b>
                  It is an absolute joy helping people develop tangible goals
                  and witnessing them incrementally achieve their milestones.{" "}
                </b>
                <br />
                <br />
                <b>
                  As a NASM Certified Personal Trainer, I practice an
                  empathetic, science-based approach to guide my clients in
                  their pursuit of self-development.
                </b>{" "}
                Whether you're new to exercise or have prior experience, I would
                love to learn about your aspirations in exercise. Enough said,
                let's make some gains together! 💪🙌
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

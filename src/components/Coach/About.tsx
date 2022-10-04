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
                When I was fourteen years old, my brother introduced me to
                resistance training as a summertime hobby. I was initially
                "resistant" to the idea of getting off Maplestory to lift, but I
                finally came around. From slaying bosses to slaying weights,
                <b> training became an integral part of my life.</b>
                <br />
                <br />{" "}
                <b>
                  I am driven to ask questions, learn, and share my knowledge
                  with others.{" "}
                </b>{" "}
                Over the years, I invested hundreds of hours researching
                exercise science and kinesiology. I coached friends and family
                members in their own exercise journeys, refining my knowledge in
                the process.{" "}
                <b>
                  {" "}
                  It is an absolute joy helping folks develop sustainable goals
                  and witnessing them progressively achieve their milestones.{" "}
                </b>
                <br />
                <br />
                <b>
                  As a NASM Certified Personal Trainer, I focus on an
                  empathetic, evidence-based approach to help you in your
                  pursuit of self-development.
                </b>{" "}
                Whether you're new to exercise or have prior experience, I would
                love to meet you and learn about your aspirations. Enough said,
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

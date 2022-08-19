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
                <b>Exercise has been an integral part of my life</b> starting
                from the age of 14 when my brother introduced me to bodyweight
                resistance training at home.
                <br />
                <br />
                Over the years, I{" "}
                <b>
                  cultivated a strong passion for exercise science, kinesiology,
                  and nutrition.
                </b>{" "}
                I invested hundreds of hours researching ways to improve my
                training, whether to increase my powerlifting total or to simply
                gain more muscle.
                <br />
                <br /> As I my knowledge in this field evolved, friends and
                family members reached out for support in their own exercise
                journies. I became{" "}
                <b>
                  driven to help others identify and develop sustainable goals
                </b>{" "}
                with a process that is both enjoyable and rewarding.
                <br /> I love seeing others make progress and the look on their
                face when they see tangible results.
                <br />
                Thank you for your time, I truly appreciate it.{" "}
                <b>
                  Now keep on scrolling to find out about my values and services
                  as a NASM CPT!
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

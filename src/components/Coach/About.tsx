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
                <b>Exercise has been an integral part of my life,</b> starting
                from the age of 14 when my brother introduced me to bodyweight
                resistance training at home.
                <br />
                <br />
                Over the years, I{" "}
                <b>
                  cultivated a strong passion for exercise science, kinesiology,
                  and nutrition.
                </b>{" "}
                I have dedicated hundreds of hours researching ways to improve
                my training while centered on specific goals, such as improving
                my total in powerlifting or to simply gain more muscle.
                <br />
                <br /> As I my knowledge in this field evolved, friends and
                family members took notice and reached out for guidance in their
                own exercise journies. I became{" "}
                <b>
                  driven to help others identify and develop sustainable goals
                </b>{" "}
                with a process that is both enjoyable and rewarding.
                <br />
                <br />
                Thank you for taking to time to get to know a little about me.{" "}
                <b>
                  Keep on scrolling to find out about my core values and the
                  services I offer as a NASM CPT!
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

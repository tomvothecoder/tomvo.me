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
                "resistant" to the idea of getting off the computer and lifting,
                but I finally came around. I am glad I made that decision
                because now <b> training is an integral part of my life.</b>
                <br />
                <br />
                My natural tendency to learn the how things work lead me to
                invest{" "}
                <b>
                  hundreds of hours researching exercise science, kinesiology,
                  and nutrition.{" "}
                </b>{" "}
                Over the years, I supported many of my friends and family
                members in their own exercise journeys. I am{" "}
                <b>driven to help others develop realistic sustainable goals</b>{" "}
                while{" "}
                <b>achieving them with an effective and enjoyable process.</b>{" "}
                <br />
                <br />
                Whether you're new to exercise or have prior experience, I would
                love to meet you and learn about your exercise aspirations.{" "}
                <b>Let's connect!</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

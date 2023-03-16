import { CSSinJS } from "common/types";
import React from "react";

const styles: CSSinJS = {
  card: {
    flexWrap: "wrap",
    alignItems: "stretch",
  },
};

const ServicesList: React.FC = () => {
  const services = [
    "Custom-tailored training programs",
    "Habit-based nutritonal coaching",
    "Progress review over email/text",
    "Virtual check-in",
    "24-hr access for questions, form-checks, etc.",
  ];

  return (
    <section>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6" data-aos="zoom-in">
            <div>
              <div
                className="box has-background-white has-text-left"
                style={styles["card"]}
              >
                <p className="has-text-grey-dark is-size-5 mt-2">
                  My services are centered around <b>building a unique online coaching experience
                  based on your goals and experience level</b>. I offer{" "}
                  <b>month-to-month</b> and <b>fixed-length rates</b> (<em>for example, a 6
                  week for powerlifting competition prep</em>). Whatever you need, I gotchu
                  fam!
                </p>
              </div>
              <div
                className="box has-background-white has-text-centered"
                style={styles["card"]}
              >
                <p className="has-text-grey-dark is-size-6 mt-2 is-italic">
                  Choose your services below. Mix and match to your desire.
                </p>
                <ul className="has-text-grey-dark is-size-6 mt-3 mb-5">
                  {services.map((service: string) => (
                    <li
                      key={service}
                      className="mb-3 is-flex is-align-items-center"
                    >
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        stroke="currentColor"
                        fill="#10b981"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                      <p className="is-size-6">{service}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

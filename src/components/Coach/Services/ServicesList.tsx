import { CSSinJS } from "common/types";
import React from "react";

const styles: CSSinJS = {
  service: {
    fontSize: "18px",
    fontWeight: 600,
  },
};

const ServicesList: React.FC = () => {
  const services = [
    "Powerlifting meet prep",
    "Individualized training programs",
    "Habit-based nutrition coaching",
    "Active check-ins and calls",
    "24-hour access for questions",
  ];

  return (
    <section>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5" data-aos="zoom-in">
            <div>
              <div className="box has-background-white">
                <ul className="has-text-left has-text-grey-dark">
                  {services.map((service: string) => (
                    <li
                      key={service}
                      className="mb-3 is-flex is-align-items-center"
                    >
                      <svg
                        className="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        stroke="currentColor"
                        fill="#10b981"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                      <h2 style={styles["service"]}>{service}</h2>
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

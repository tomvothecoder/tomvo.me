import { CSSinJS } from "common/types";
import React from "react";

type Props = {
  tier: number;
  targetClient: string;
  services: Array<string>;
  nonServices: Array<string>;
};

const styles: CSSinJS = {
  card: {
    flexWrap: "wrap",
    alignItems: "stretch",
  },
};

const Tier: React.FC<Props> = ({
  tier,
  targetClient,
  services,
  nonServices,
}: Props) => {
  return (
    <div className="column is-one-third" data-aos="zoom-in">
      <div>
        <div className="box has-background-white has-text-centered" style={styles["card"]}>
          <p className="has-text-grey-dark is-size-4 font-medium mb-2">
            Package {tier}
          </p>

          <p className="has-text-grey-dark is-size-7 mt-2">{targetClient}</p>
          <ul className="has-text-grey-dark is-size-6 mt-3 mb-5">
            {services.map((service: string) => (
              <li key={service} className="mb-3 is-flex is-align-items-center">
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
            {nonServices.map((nonService: string) => (
              <li key={nonService} className="mb-3 is-flex is-align-items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="h-6 w-6 mr-2"
                  fill="red"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                <p className="is-size-6">{nonService}</p>
              </li>
            ))}
          </ul>
          <p className="has-text-grey-dark is-size-7 has-text-right">
            * Pricing and services are subject to change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tier;

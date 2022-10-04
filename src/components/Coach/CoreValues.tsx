import barChart from "assets/values/bar-chart.png";
import science from "assets/values/data-science.png";
import teamWork from "assets/values/teamwork.png";
import "components/Coach/CoreValues.css";

const CoreValues: React.FC = () => {
  return (
    <section id="core-values">
      <div className="container">
        <div className="columns is-centered">
          <div
            className="column is-one-third has-text-centered"
            data-aos="zoom-in"
          >
            <figure className="image is-128x128 is-horizontal-center">
              <img src={teamWork} alt="database" />
            </figure>
            {/* Source: <a href="https://www.flaticon.com/free-icons/person" title="person icons">Person icons created by Freepik - Flaticon</a> */}
            <h2 className="default-font value-caption">
              Client first, period.
            </h2>
            <p className="secondary-font value-subcaption">
              I will always demonstrate my integrity as a CPT and never cut
              corners just to make a dime.
            </p>
          </div>
          <div
            className="column is-one-third has-text-centered"
            data-aos="zoom-in"
          >
            <figure className="image is-128x128 is-horizontal-center">
              <img src={science} alt="yoga" />
            </figure>
            {/* Source: <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by vectorsmarket15 - Flaticon</a> */}
            <h2 className="default-font value-caption">
              A simple, science-based approach.
            </h2>
            <p className="secondary-font value-subcaption">
              Bro-science is a thing of the past!
            </p>
          </div>
          <div
            className="column is-one-third has-text-centered"
            data-aos="zoom-in"
          >
            <figure className="image is-128x128 is-horizontal-center">
              <img src={barChart} alt="bar-chart" />
            </figure>
            <h2 className="default-font value-caption">
              Individualized and flexible programming.
            </h2>
            <p className="secondary-font value-subcaption">
            Programs are tailored to your specific goals, experience level, and life circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

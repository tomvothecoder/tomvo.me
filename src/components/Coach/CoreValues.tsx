import barChart from "assets/values/bar-chart.png";
import science from "assets/values/data-science.png";
import client from "assets/values/handshake.png";
import { CSSinJS } from "common/types";

const CoreValues: React.FC = () => {
  const styles: CSSinJS = {
    figure: { marginLeft: "auto", marginRight: "auto" },
    valueCaption: { fontSize: "18px", fontWeight: 500, marginTop: "5%" },
    valueSubCaption: { fontSize: "16px", marginTop: "1%" },
  };
  return (
    <section id="core-values">
      <div className="columns is-9 is-centered">
        <div className="column is-3 has-text-centered">
          <div className="card" data-aos="zoom-in">
            <div className="card-content">
              <figure className="image is-96x96" style={styles["figure"]}>
                <img src={client} alt="client" />
              </figure>
              {/* <a href="https://www.flaticon.com/free-icons/client" title="client icons">Client icons created by Freepik - Flaticon</a> */}
              <h2 style={styles["valueCaption"]}>Client first, period.</h2>
              <p style={styles["valueSubCaption"]}>
                I will always uphold my integrity as a coach and never cut
                corners.
              </p>
            </div>
          </div>
        </div>
        <div className="column is-3 has-text-centered">
          <div className="card" data-aos="zoom-in">
            <div className="card-content">
              <figure className="image is-96x96" style={styles["figure"]}>
                <img src={science} alt="science" />
              </figure>
              {/* Source: <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by vectorsmarket15 - Flaticon</a> */}
              <h2 style={styles["valueCaption"]}>Science-based</h2>
              <p style={styles["valueSubCaption"]}>
                I truly value exercise science as the foundation of my work.
              </p>
            </div>
          </div>
        </div>
        <div className="column is-3 has-text-centered">
          <div className="card" data-aos="zoom-in">
            <div className="card-content">
              <figure className="image is-96x96" style={styles["figure"]}>
                <img src={barChart} alt="bar-chart" />
              </figure>
              <h2 style={styles["valueCaption"]}>Individualized</h2>
              <p style={styles["valueSubCaption"]}>
                Services tailored to your goals, experience, and life
                circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

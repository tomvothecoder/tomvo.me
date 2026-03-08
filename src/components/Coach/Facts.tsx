import { CSSinJS } from "common/types";

const Facts: React.FC = () => {
  const styles: CSSinJS = {
    text: { fontWeight: 500 },
  };

  return (
    <section id="cpt" className="container">
      <div className="columns is-centered">
        <div className="column is-7" data-aos="fade-up" data-aos-delay="100">
          <div className="card coach-surface-card">
            <div className="card-content has-text-left" style={styles["text"]}>
              <p>
                I am a Research Software Engineer by day, and
                that analytical mindset shapes how I coach: test assumptions,
                track outcomes, and refine the plan to fit the individual.
                Combined with my NASM certification, meet experience, and
                hands-on athlete coaching, you get a structured process that is
                evidence-based and built around your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

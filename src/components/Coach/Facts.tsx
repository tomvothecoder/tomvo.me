import { CSSinJS } from "common/types";

const Facts: React.FC = () => {
  const styles: CSSinJS = {
    text: { fontWeight: 500 },
  };
  const facts = [
    "I enjoy cooking, food photography, hiking, martial arts, and PC gaming!",
    "Coached USPA/USAPL powerlifting athletes placing top-3 ",
    "Won 1st and 2nd place in the 165lbs division of two USPA meets",
    "All-time gym PRs: 375 lb Squat, 230 lb bench, and 470 lb deadlift",
  ];

  return (
    <section id="cpt" className="container">
      <div className="columns is-centered">
        <div className="column is-7" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <div className="card-content has-text-left" style={styles["text"]}>
              <p>
                I'm a Climate Research Software Engineer at a national
                laboratory on the weekdays (check out my{" "}
                <a href="https://tomvo.me/career"> career website</a>). Besides
                coaching and powerlifting, I enjoy cooking, reading, and nature!
                I've competed in a few powerlifting meets. My all-time gym PRs
                are 375 lb squat, 230 lb bench, and 500 lb deadlift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

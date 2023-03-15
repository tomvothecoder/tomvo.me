const Facts: React.FC = () => {
  const credentials = [
    "NASM Certified Personal Trainer since October 2021",
    "Coached powerlifting athletes who placed top-3 in USPA meets",
    "Specialization in strength, hypertrophy, and powerlifting meet preparation",
    "An advocate for prehabilitation, rehabilitation, and recovery work",
  ];

  const facts = [
    "Won 1st and 2nd place in the 165lbs division of two USPA meets",
    "All-time gym PRs: 375 lb Squat, 230 lb bench, and 470 lb deadlift",
    "I enjoy cooking, food photography, hiking, martial arts, and PC gaming",
  ];

  return (
    <section id="cpt" className="container">
      <div className="columns">
        <div
          className="column is-half is-offset-one-quarter"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="card">
            <div className="card-content">
              <p className="has-text-center is-italic">Credentials</p>
              <ul className="has-text-left">
                {credentials.map((credential) => (
                  <li key={credential}>&bull; {credential}</li>
                ))}
              </ul>
              <br />
              <p className="has-text-center is-italic">Facts</p>
              <ul className="has-text-left">
                {facts.map((fact) => (
                  <li key={fact}>&bull; {fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

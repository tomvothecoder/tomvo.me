const Facts: React.FC = () => {
  const facts = [
    "NASM Certified Personal Trainer since October 2021",
    "Coached powerlifting athletes who placed top-3 at multiple meets",
    "Specialization in strength training and cardiovascular training",
    "Emphasis on prehabilitation and rehabilitation (corrective exercises and mobility) ",
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
              <ul className="has-text-left">
                <ul className="has-text-left">
                  {facts.map((fact) => (
                    <li key={fact}>&bull; {fact}</li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

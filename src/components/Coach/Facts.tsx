const Facts: React.FC = () => {
  const facts = [
    "NASM Certified Personal Trainer since October 2021",
    "Climate Research Software Engineer at Lawrence Livermore National Lab",
    "Enjoys cooking, food photography, hiking, watching MMA, and PC gaming",
    "Won 1st and 2nd place in the 165lbs division of two USPA meets",
    "Coached multiple powerlifting athletes who placed top-3 in their USPA divisions",
    "All-time gym PRs are a 375 lb Squat, 230 lb bench, and 470 lb deadlift",
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

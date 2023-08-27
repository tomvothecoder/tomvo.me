const Facts: React.FC = () => {
  const facts = [
    "I enjoy cooking, food photography, hiking, martial arts, and PC gaming!",
    "Coached USPA/USAPL powerlifting athletes placing top-3 ",
    "Won 1st and 2nd place in the 165lbs division of two USPA meets",
    "All-time gym PRs: 375 lb Squat, 230 lb bench, and 470 lb deadlift",
  ];

  return (
    <section id="cpt" className="container">
      <div className="columns is-centered">
        <div className="column is-8" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <div className="card-content has-text-left">
              I enjoy cooking, food photography, hiking, martial arts, and PC
              gaming! I have coached numerous USPA and USAPL athletes who placed
              top-3 (and a few best male lifters). I also competed in a few
              meets and will be making a return to the platform soon. My
              all-time gym PRs are 375/230/470.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

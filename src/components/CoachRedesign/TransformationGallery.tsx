import { ArrowUpRight } from "lucide-react";

const results = [
  {
    name: "Alvin Pov",
    attempts: "9/9",
    total: "1,460.6",
    category: "1st place / 198 lb class",
    context:
      "Remote meet prep. A clean sweep of competition attempts, from the opening squat to the final deadlift.",
    lifts: "Squat 529.1 / Bench 303.1 / Deadlift 628.3 lb",
    profile: "alvinpov",
    meet: "uspa/2957#alvinpov",
  },
  {
    name: "Jordan Ang",
    attempts: "8/9",
    total: "1,416.4",
    category: "1st place / 181 lb class",
    context:
      "Advanced remote prep. A 55.1 lb total increase between June and July meets.",
    lifts: "Squat 512.5 / Bench 330.7 / Deadlift 573.2 lb",
    profile: "jordanang",
    meet: "usapl/CA-2023-19#jordanang",
  },
  {
    name: "Christopher Cruz",
    attempts: "8/9",
    total: "898.3",
    category: "First meet / In-person prep",
    context:
      "From minimal gym experience to platform-ready. A first competition built on technique, practice, and consistency.",
    lifts: "Squat 297.6 / Bench 198.4 / Deadlift 402.3 lb",
    profile: "christophercruz2",
    meet: "usapl/CA-2024-39#christophercruz2",
  },
];

function TransformationGallery() {
  return (
    <section
      id="results"
      className="strength-results"
      aria-labelledby="results-title"
    >
      <header className="strength-results-heading">
        <p className="strength-entry">
          <span>04 /</span> On the record
        </p>
        <h2 id="results-title">
          Real training. <br />
          Recorded results.
        </h2>
        <p>
          Real lifters. Recorded results. <br />
          Every total has a training story behind it.
        </p>
      </header>
      <div className="strength-results-list">
        {results.map((result) => (
          <article className="strength-result" key={result.name}>
            <div className="strength-result-attempts">
              <span>{result.attempts}</span>
              <p>successful attempts</p>
            </div>
            <div className="strength-result-story">
              <p className="strength-result-category">{result.category}</p>
              <h3>{result.name}</h3>
              <p>{result.context}</p>
              <div className="strength-proof-links">
                <a
                  href={`https://www.openpowerlifting.org/u/${result.profile}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${result.name}: OpenPowerlifting profile`}
                >
                  Profile <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={`https://www.openpowerlifting.org/m/${result.meet}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${result.name}: verified meet result`}
                >
                  Meet result <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="strength-result-total">
              <p>
                <strong>{result.total}</strong> lb total
              </p>
              <p>{result.lifts}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="strength-results-note">
        Meet results verified through OpenPowerlifting. Individual outcomes
        reflect each lifter’s experience, preparation, and circumstances—not a
        promise of a particular result.
      </p>
    </section>
  );
}

export default TransformationGallery;

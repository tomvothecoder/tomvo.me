import { ArrowUpRight } from "lucide-react";

const results = [
  {
    name: "Alvin Pov",
    outcome: "Won the 198 lb class.",
    context: "Remote meet prep. 9 of 9 attempts made.",
    total: "1,460.6",
    lifts: "Squat 529.1 · Bench 303.1 · Deadlift 628.3",
    meet: "uspa/2957#alvinpov",
  },
  {
    name: "Jordan Ang",
    outcome:
      "Won the 181 lb class, with a total 55.1 lb higher than at a June meet.",
    context: "Advanced remote meet prep. 8 of 9 attempts made.",
    total: "1,416.4",
    lifts: "Squat 512.5 · Bench 330.7 · Deadlift 573.2",
    meet: "usapl/CA-2023-19#jordanang",
  },
  {
    name: "Christopher Cruz",
    outcome: "Went from minimal gym experience to a first competition.",
    context: "In-person meet prep. 8 of 9 attempts made.",
    total: "898.3",
    lifts: "Squat 297.6 · Bench 198.4 · Deadlift 402.3",
    meet: "usapl/CA-2024-39#christophercruz2",
  },
];

function ResultsSection() {
  return (
    <section
      id="results"
      className="strength-results"
      aria-labelledby="results-title"
    >
      <header className="strength-results-heading">
        <h2 id="results-title">Recorded on the platform.</h2>
        <p>
          At a powerlifting meet, each lifter gets three attempts at the squat,
          bench press, and deadlift. The total adds the best of each.
        </p>
      </header>
      <ul className="strength-results-list">
        {results.map((result) => (
          <li className="strength-result" key={result.name}>
            <div className="strength-result-story">
              <h3>{result.name}</h3>
              <p>{result.outcome}</p>
              <p className="strength-result-context">{result.context}</p>
            </div>
            <div className="strength-result-total">
              <p>
                <strong>{result.total}</strong> lb total
              </p>
              <p>{result.lifts} lb</p>
              <a
                href={`https://www.openpowerlifting.org/m/${result.meet}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`${result.name}: verified meet result`}
              >
                Meet record <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="strength-results-note">
        Results are public meet records on OpenPowerlifting. Each reflects that
        lifter’s experience, preparation, and circumstances, not a promised
        outcome.
      </p>
    </section>
  );
}

export default ResultsSection;

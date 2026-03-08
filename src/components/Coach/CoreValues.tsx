import {
  faChartLine,
  faDumbbell,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Audience = {
  icon: IconDefinition;
  iconClassName: string;
  title: string;
  description: string;
};

const CoreValues: React.FC = () => {
  const audiences: Audience[] = [
    {
      icon: faUserGroup,
      iconClassName: "coach-icon-badge coach-icon-badge--a",
      title: "Beginner to Intermediate Lifters",
      description:
        "You want a clear plan, reliable form feedback, and confidence in the gym.",
    },
    {
      icon: faChartLine,
      iconClassName: "coach-icon-badge coach-icon-badge--b",
      title: "Powerlifters Chasing PRs",
      description:
        "You need structured off-season programming and meet prep with smart attempt strategy.",
    },
    {
      icon: faDumbbell,
      iconClassName: "coach-icon-badge coach-icon-badge--c",
      title: "Busy Adults & Athletes",
      description:
        "You want efficient training and sustainable nutrition habits that fit real life.",
    },
  ];

  return (
    <section id="core-values">
      <div className="columns is-9 is-centered">
        {audiences.map((audience) => (
          <div key={audience.title} className="column is-3 has-text-centered">
            <div className="card coach-surface-card" data-aos="zoom-in">
              <div className="card-content">
                <figure className="coach-icon-figure image is-96x96">
                  <div className={audience.iconClassName} aria-hidden="true">
                    <FontAwesomeIcon icon={audience.icon} size="2x" />
                  </div>
                </figure>
                <h2 className="coach-card-title">{audience.title}</h2>
                <p className="coach-card-description">{audience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;

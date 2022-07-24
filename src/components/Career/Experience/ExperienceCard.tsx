import "./ExperienceCard.css";

export type Props = {
  company: string;
  title: string;
  length: string;
  location: string;
  imgSrc: string;
  link: string;
  description: string;
};

const ExperienceCard: React.FC<Props> = ({
  company,
  title,
  length,
  location,
  imgSrc,
  link,
  description,
}) => {

  return (
    <div className="card" id="experience-card">
      <div className="card-content">
        <div className="columns">
          <div className="column is-one-quarter" id="logo-column">
            <figure className="image is-3by3">
              <img src={imgSrc} alt="logo" />
            </figure>
          </div>
          <div className="column is-three-quarters">
            <p>
              <a
                href={link}
                className="company"
                target="_blank"
                rel="noreferrer"
              >
                {company}
              </a>
              <span className="length">{length}</span>
            </p>
            <p className="job-title">{title}</p>
            <p className="job-location has-text-weight-bold">{location}</p>
            <p className="job-desc">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

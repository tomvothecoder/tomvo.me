import PropTypes from "prop-types";

const styles = {
  card: {
    borderRadius: 25,
  },
  company: {
    fontWeight: 500,
    fontSize: "1.25rem",
  },
  jobTitle: {
    fontWeight: 600,
    color: "#5e9516",
  },
};

function Card({ imgSrc, href, length, company, jobTitle, location, children }) {
  Card.propTypes = {
    imgSrc: PropTypes.elementType.isRequired,
    href: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="card" style={styles.card}>
      <div className="card-content">
        <div className="columns">
          <div className="column is-one-quarter">
            <figure className="image is-3by3">
              <img src={imgSrc} alt={company} />
            </figure>
          </div>
          <div className="column is-three-quarters">
            <a
              href={href}
              style={styles.company}
              rel="noopener noreferrer"
              target="_blank"
            >
              {company}
            </a>
            <p style={styles.jobTitle}>
              {jobTitle}, <span className="is-italic">{length}</span>
            </p>
            <p className="job-location has-text-weight-bold">{location}</p>
            <p className="job-desc">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

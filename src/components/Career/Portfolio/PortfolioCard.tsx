import React from "react";

import "components/Career/Portfolio/PortfolioCard.css";

type Props = {
  name: string;
  description: string;
  link: string;
  imageSrc: string;
};

const PortfolioCard: React.FC<Props> = ({
  name,
  description,
  link,
  imageSrc,
}) => {
  return (
    <a href={link} target="_blank" id="portfolio-card" rel="noreferrer">
      <figure
        data-aos="fade"
        data-aos-delay="100"
        className="image project-img"
      >
        <img src={imageSrc} alt={name} />
        <div className="overlay">
          <h1 className="text">
            {name}
            <br />
            {description}
          </h1>
        </div>
      </figure>
    </a>
  );
};

export default PortfolioCard;

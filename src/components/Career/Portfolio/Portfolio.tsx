import metagrid from "assets/projects/metagrid.png";
import myliftingpal from "assets/projects/myliftingpal.png";
import PortfolioCard from "components/Career/Portfolio/PortfolioCard";
import React from "react";

type Props = {};

const Portfolio: React.FC<Props> = () => {
  const projects = [
    {
      name: "MetaGrid",
      description: "The next-gen Earth System Grid Federation search portal",
      link: "https://github.com/aims-group/metagrid",
      imageSrc: metagrid,
    },
    {
      name: "MyLiftingPal",
      description: "A web app designed for fitness enthusiasts",
      link: "https://github.com/tomvothecoder/myliftingpal",
      imageSrc: myliftingpal
    },
  ];

  return (
    <div id="portfolio">
      <div className="portfolio">
        <div className="columns">
          {projects.map((project) => (
            <div
              key={project.name}
              className="column is-half"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <PortfolioCard
                name={project.name}
                description={project.description}
                link={project.link}
                imageSrc={project.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

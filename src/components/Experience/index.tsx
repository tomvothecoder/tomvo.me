import React from 'react';

import Card from './Card';

import energeiaLogo from '../../assets/energeia.png';
import intelLogo from '../../assets/intel.png';
import llnlLogo from '../../assets/llnl.png';
import uopTower from '../../assets/uop_tower.jpg';

function Experience() {
  return (
    <div id="experience">
      <div
        className="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="75"
      >
        <div className="column is-three-quarters">
          <Card
            imgSrc={llnlLogo}
            href="https://www.llnl.gov/"
            jobTitle="Software Developer"
            company="Lawrence Livermore National Lab"
            length="2020 - Present"
            location="Livermore, CA"
          >
            I recently became a member of the Analytics, Informatics, and
            Management Systems Team.
          </Card>
        </div>
      </div>
      <div
        className="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="75"
      >
        <div className="column is-three-quarters">
          <Card
            imgSrc={energeiaLogo}
            href="http://energeia-usa.com"
            jobTitle="Software Engineer"
            company="Energeia USA"
            length="2018 - 2020"
            location="Davis, CA"
          >
            At Energeia, I was a lead software engineer for uSim, an advanced
            Python energy simulation software based on machine learning. I also
            performed data analytics on modeling data sets to develop
            dashboards, which aided the work of the consulting team. It was an
            awesome being apart a face-paced start-up environment performing
            cutting-edge research for the energy industry.
          </Card>
        </div>
      </div>
      <div
        className="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="75"
      >
        <div className="column is-three-quarters">
          <Card
            imgSrc={intelLogo}
            href="https://intel.com"
            jobTitle="Technical Marketing Engineering Intern"
            company="Intel"
            length="2017 - 2018"
            location="Folsom, CA"
          >
            Interning at Intel was an amazing experience where I flexed my
            engineering muscles within the business world. I aided internal
            research on market segments by implenting Python scripts to automate
            the flow of data collection. My research lead to key decisions in
            product roadmap planning for Embedded SSDs. In the process, I
            learned foundational skills such managing projects and understanding
            the role of stakeholders in within those projects.
          </Card>
        </div>
      </div>
      <div
        className="columns is-centered"
        data-aos="fade-up"
        data-aos-delay="75"
      >
        <div className="column is-three-quarters">
          <Card
            imgSrc={uopTower}
            href="https://pacific.edu"
            jobTitle="Bachelor of Science, Computer Science"
            company="University of the Pacific"
            length="2014-2018"
            location="Stockton, CA"
          >
            UOP&apos;s computer science program helped me build the fundamentals
            in becoming an engineer. Faculty push students to seek real world
            experience through co-op, which I was forunate enough to partake in
            with Intel. I was deeply engaged in community service through Alpha
            Phi Omega, an international service organization. My experience at
            UOP helped shape critical life skills, including empathy,
            understanding, communication, and leadership.
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Experience;

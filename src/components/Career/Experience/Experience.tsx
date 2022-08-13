import ExperienceCard from "components/Career/Experience/ExperienceCard";

import { getImagePath } from "assets/utils";
import "components/Career/Experience/Experience.css";

type Props = {};

const Experience: React.FC<Props> = () => {
  const jobs = [
    {
      company: "Lawrence Livermore National Lab",
      title: "Software Engineer",
      length: "2020 - Present",
      location: "Livermore, CA",
      link: "https://llnl.gov/",
      src: getImagePath("logos", "llnl.jpg"),
      description: `I am a software engineer in the Analytics, Informatics,
          and Management Systems (AIMS) group. I was the leader developer of
          MetaGrid, the next-gen Earth System Grid Federation (ESGF) climate
          modeling search portal. I am now a major contributor to multiple E3SM (Energy
          Exascale Earth System Model) post-processing and analytics tools.`,
    },
    {
      company: "Energeia USA",
      title: "Software Engineer",
      length: "2018 - 2020",
      location: "Davis, CA",
      src: getImagePath("logos", "energeia.png"),
      link: "https://energeia-usa.com/",
      description: `I was the lead software engineer for uSim, Energeia's
            SaaS Python energy simulation platform. I was tasked with refactoring
            and optimizing uSim's codebase, while also integrating new features. I also
            performed data analytics with Pandas and developed visualization dashboards
            using Plotly, which aided the work of the consulting team. It was a
            rewarding experience developing cutting edge tools for the energy
            industry.`,
    },
    {
      company: "Intel Corporation",
      title: "Technical Marketing Engineer Intern",
      length: "2017 - 2018",
      location: "Folsom, CA",
      src: getImagePath("logos", "intel.svg"),
      link: "https://intel.com",
      description: `At Intel, I was able to apply my engineering skills directly in
            the context of marketing and business. I aided internal research on
            market segments by implementing Python scripts to automate the flow
            of data collection. My research lead to key decisions in product
            roadmap planning for Embedded SSDs. In the process, I learned
            foundational skills such managing projects and understanding the
            role of stakeholders in within those projects.`,
    },
    {
      company: "University of the Pacific",
      title: "Bachelor of Science, Computer Science",
      length: "2014 - 2018",
      location: "Stockton, CA",
      src: getImagePath("logos", "uop_tower.jpg"),
      link: "https://pacific.edu",
      description: `UOP's computer science program built the groundwork
            for me to become a software engineer. The co-op internship curriculum
            pushes students to seek professional working experience while earning
            course units. Through the program, I was fortunate enough to intern
            at Intel. I was deeply engaged in community service as a member of
            Alpha Phi Omega, an international service organization. My
            experience at UOP helped shape critical life skills, including
            empathy, communication, and leadership.`,
    },
  ];

  return (
    <div id="experience">
      {jobs.map((item) => (
        <div
          key={item.company}
          className="columns is-centered"
          data-aos="fade-up"
          data-aos-delay="125"
        >
          <div className="column is-three-quarters">
            <ExperienceCard
              company={item.company}
              title={item.title}
              length={item.length}
              location={item.location}
              imgSrc={item.src}
              link={item.link}
              description={item.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

import "components/Career/Skills/Skill.css";
import React from "react";

type Props = { name: string; source: string };

const Skill: React.FC<Props> = ({ name, source }) => (
  <div id="skill" data-aos="zoom-in" data-aos-delay="100">
    <div className="is-flex logo">
      <div className="logo">
        <figure className="image is-64x64">
          <img src={source} alt={name} />
        </figure>
      </div>
    </div>
    <h1 className="label" id={name}>
      {name}
    </h1>
  </div>
);

export default Skill;

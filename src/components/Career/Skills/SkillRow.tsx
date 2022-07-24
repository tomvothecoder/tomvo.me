import { getImagePath } from "assets/utils";
import Skill from "components/Career/Skills/Skill";
import React from "react";

type Props = { skills: string[][] };

const SkillRow: React.FC<Props> = ({ skills }) => {

  return (
    <div className="columns is-centered" id="skill-rows">
      {skills.map((skill) => (
        <div key={skill[0]} className="column is-2">
          <Skill name={skill[0]} source={getImagePath("skills", skill[1])}></Skill>
        </div>
      ))}
    </div>
  );
};

export default SkillRow;

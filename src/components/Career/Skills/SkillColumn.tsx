import { getImagePath } from "assets/utils";
import React from "react";
import Skill from "./Skill";

type Props = {
  name: string;
  skills: string[][];
};

const SkillColumn: React.FC<Props> = ({ name, skills }) => {
  const itemsPerRow = 2;

  const rowCount = Array.from(
    new Array(Math.ceil(skills.length / itemsPerRow)),
    (x, i) => i + 1
  );

  const itemCountInRow = (index: number) => {
    return skills.slice((index - 1) * itemsPerRow, index * itemsPerRow);
  };

  return (
    <div className="column" id="skills-column">
      <h1 className="skills-header">{name}</h1>
      {rowCount.map((index: number) => (
        <div key={index} className="columns is-centered">
          {itemCountInRow(index).map((skill) => (
            <div
              key={skill[0]}
              className="column is-one-third-desktop is-one-half-tablet is-one-half-mobile"
            >
              <Skill
                name={skill[0]}
                source={getImagePath("skills", skill[1])}
              ></Skill>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SkillColumn;

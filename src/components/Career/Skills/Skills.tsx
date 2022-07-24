import SkillColumn from "components/Career/Skills/SkillColumn";
import SkillRow from "components/Career/Skills/SkillRow";
import "components/Career/Skills/Skills.css";
import React from "react";

type Props = {};

const Skills: React.FC<Props> = () => {
  const skillsByCategory = {
    languages: [
      ["Python", "python.svg"],
      ["JavaScript", "javascript.svg"],
      ["TypeScript", "typescript-icon.svg"],
    ],
    backend: [
      ["Django", "django.svg"],
      ["Node.js", "nodejs-icon.svg"],
      ["Postgres", "postgresql.svg"],
      ["MySQL", "mysql.svg"],
    ],
    frontend: [
      ["React", "react.svg"],
      ["Vue", "vue.svg"],
      ["Ant Design", "ant-design.svg"],
      ["Bootstrap 4", "bootstrap.svg"],
      ["HTML", "html5.svg"],
      ["CSS", "css3.svg"],
    ],
    devOps: [
      ["Docker", "docker.svg"],
      ["Docker-Compose", "docker-compose.svg"],
      ["Jest", "jest.svg"],
      ["React Testing Library", "rtl.svg"],
      ["Pytest", "pytest.svg"],
      ["Traefik", "traefik.svg"],
    ],
    tools: [
      ["GitHub", "github-icon.svg"],
      ["Bitbucket", "bitbucket.svg"],
      ["Jira", "jira.svg"],
      ["Confluence", "confluence.svg"],
      ["AWS", "aws.svg"],
      ["Heroku", "heroku.svg"],
    ],
  };

  return (
    <div id="skills">
      <SkillRow skills={skillsByCategory["languages"]} />
      <div className="columns">
        <SkillColumn name="Frontend" skills={skillsByCategory["frontend"]} />
        <SkillColumn name="Backend" skills={skillsByCategory["backend"]} />
        <SkillColumn name="DevOps" skills={skillsByCategory["devOps"]} />
        <SkillColumn name="Tools" skills={skillsByCategory["tools"]} />
      </div>
    </div>
  );
};

export default Skills;

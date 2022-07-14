import React from 'react';
import Project from './Project';

import './Projects.css';
import myliftingpal from '../../assets/proj1.png';
import theGrove from '../../assets/proj2_edit.png';

function Projects() {
  return (
    <div className="columns">
      <div className="column is-half">
        <Project
          href="https://github.com/tomvothecoder/graditude"
          src={myliftingpal}
          title="MyLiftingPal"
          description="A web app designed for fitness enthusiasts"
        />
      </div>
      <div className="column is-half">
        <Project
          href="https://github.com/tomvothecoder/the-grove"
          src={theGrove}
          title="The Grove"
          description="A web app for UOP's on-campus convenience store"
        />
      </div>
    </div>
  );
}

export default Projects;

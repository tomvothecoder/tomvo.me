import React from 'react';

import Skill from './Skill';

import './Skills.css';
import python from '../../assets/svgs/colored/python.svg';
import django from '../../assets/svgs/colored/django.svg';
import cplusplus from '../../assets/svgs/colored/c++.svg';
import c from '../../assets/svgs/colored/c.svg';
import node from '../../assets/svgs/colored/nodejs.svg';
import mysql from '../../assets/svgs/colored/mysql.svg';
import postgresql from '../../assets/svgs/colored/postgresql.svg';

import css3 from '../../assets/svgs/css3.svg';
import html5 from '../../assets/svgs/html5.svg';
import vue from '../../assets/svgs/colored/vue.svg';
import reactjs from '../../assets/svgs/colored/reactjs.svg';
import bootstrap from '../../assets/svgs/colored/bootstrap.svg';
import bulma from '../../assets/svgs/colored/bulma.svg';

import github from '../../assets/svgs/colored/github-icon.svg';
import bitbucket from '../../assets/svgs/colored/bitbucket.svg';
import aws from '../../assets/svgs/colored/aws.svg';
import heroku from '../../assets/svgs/heroku.svg';
import confluence from '../../assets/svgs/colored/confluence.svg';
import jira from '../../assets/svgs/colored/jira.svg';

function Skills() {
  return (
    <div id="skills">
      <div className="columns is-mobile is-centered">
        <Skill
          imgSrc={python}
          skill="Python"
          colSize="is-1-desktop is-one-third-mobile"
        />
        <Skill
          imgSrc={c}
          skill="C"
          colSize="is-1-desktop is-one-third-mobile"
        />
        <Skill
          imgSrc={cplusplus}
          skill="C++"
          colSize="is-1-desktop is-one-third-mobile"
        />
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="skills-header">Back-End</h1>
          <div className="columns is-centered">
            <Skill imgSrc={django} skill="Django" colSize="is-one-third" />
            <Skill imgSrc={node} skill="Node" colSize="is-one-third" />
          </div>
          <div className="columns is-centered">
            <Skill imgSrc={mysql} skill="MySQL" colSize="is-one-third" />
            <Skill
              imgSrc={postgresql}
              skill="PostgreSQL"
              colSize="is-one-third"
            />
          </div>
        </div>

        <div className="column">
          <h1 className="skills-header">Front-End</h1>
          <div className="columns is-centered">
            <Skill imgSrc={reactjs} skill="React" colSize="is-one-third" />
            <Skill imgSrc={vue} skill="Vue" colSize="is-one-third" />
          </div>
          <div className="columns is-centered">
            <Skill
              imgSrc={bootstrap}
              skill="Bootstrap 4"
              colSize="is-one-third"
            />
            <Skill imgSrc={bulma} skill="Bulma" colSize="is-one-third" />
          </div>
          <div className="columns is-centered">
            <Skill imgSrc={html5} skill="HTML" colSize="is-one-third" />
            <Skill imgSrc={css3} skill="CSS" colSize="is-one-third" />
          </div>
        </div>

        <div className="column">
          <h1 className="skills-header">Tools</h1>
          <div className="columns is-centered">
            <Skill imgSrc={github} skill="GitHub" colSize="is-one-third" />
            <Skill
              imgSrc={bitbucket}
              skill="Bitbucket"
              colSize="is-one-third"
            />
          </div>
          <div className="columns is-centered">
            <Skill imgSrc={aws} skill="AWS" colSize="is-one-third" />
            <Skill imgSrc={heroku} skill="heroku" colSize="is-one-third" />
          </div>
          <div className="columns is-centered">
            <Skill
              imgSrc={confluence}
              skill="Confluence"
              colSize="is-one-third"
            />
            <Skill imgSrc={jira} skill="Jira" colSize="is-one-third" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

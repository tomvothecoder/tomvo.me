import React from 'react';
import PropTypes from 'prop-types';

function Skill({ imgSrc, skill, colSize }) {
  Skill.propTypes = {
    imgSrc: PropTypes.elementType.isRequired,
    skill: PropTypes.string.isRequired,
    colSize: PropTypes.string.isRequired,
  };
  return (
    <div className={`column ${colSize}`} data-aos="zoom-in">
      <div className="is-flex logo">
        <figure className="image is-64x64 logo">
          <img src={imgSrc} alt={skill} />
        </figure>
      </div>
      <h1 className="skill" id={skill.toLowerCase()}>
        {skill}
      </h1>
    </div>
  );
}

export default Skill;

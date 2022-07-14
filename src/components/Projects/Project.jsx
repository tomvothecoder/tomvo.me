import React from 'react';
import PropTypes from 'prop-types';

function Project({ href, src, title, description }) {
  Project.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <figure data-aos="fade" className="image project-img">
          <img className="proj-img" src={src} alt={title}></img>
          <div className="overlay">
            <h1 className="text">
              {title}
              <br />
              {description}
            </h1>
          </div>
        </figure>
      </a>
    </>
  );
}

export default Project;

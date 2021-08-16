import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  title,
  date,
  description,
  text,
}) => {
  // Declare a new state variable, which we'll call "count"
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mountedStyle = { opacity: 1, transition: 'opacity 1000ms ease-in' };
  const unmountedStyle = { opacity: 0, transition: 'opacity 1000ms ease-in' };

  function toggleExpanded() {
    if (!expanded) setExpanded(true);
    else setExpanded(false);
  }

  useEffect(() => {
    setMounted(true);
  });

  return (
    <div className="card" style={mounted ? mountedStyle : unmountedStyle}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-subtitle mb-3">
          { date ? `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}` : null}
        </h5>
        <h4 className="card-title mb-3">{title}</h4>
        { expanded ? <p className="card-text mb-3">{text}</p> : <p className="card-text mb-3">{description}</p> }
        <button type="button" className="btn btn-outline-light text-uppercase align-self-end mt-auto" onClick={toggleExpanded}>
          Read
          { expanded ? ' Less' : ' More' }
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string,
  text: PropTypes.string,
};
Card.defaultProps = {
  title: '',
  description: '',
  text: '',
};

export default Card;

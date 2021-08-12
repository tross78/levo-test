import React, { useState } from 'react';
import './Card.scss';

const Card = ({
  title,
  date,
  description,
  text,
  colorName,
}) => {
  // Declare a new state variable, which we'll call "count"
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    if (!expanded) setExpanded(true);
    else setExpanded(false);
  }

  return (
    <div className={`card bg-${colorName}`}>
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
  title: String,
  date: Date,
  description: String,
  text: String,
  colorName: String,
};
Card.defaultProps = {
  title: '',
  date: null,
  description: '',
  text: '',
  colorName: '',
};

export default Card;

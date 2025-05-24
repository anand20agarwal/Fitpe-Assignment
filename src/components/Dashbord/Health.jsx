import React from 'react';
import '../Style/Health.css';

function Health(props) {
  return (
    <div className="health-card">
      <div className="health-card-line">
        <img src={props.images} alt="health-related" />
        <h2>{props.parth}</h2>
      </div>
      <h5>Date: {props.date}</h5>

      {/* Percentage Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${props.percentage}%` }}>
          <span className="progress-label">{props.percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default Health;

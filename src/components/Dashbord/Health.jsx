import React from 'react';
import '../Style/Health.css';

function Health(props) {
  const isHealthy = props.percentage >= 70;
  const barColor = isHealthy ? '#16a34a' : '#dc2626'; 

  return (
    <div className="health-card">
      <div className="health-card-line">
        <img src={props.images} alt="health-related" />
        <h2>{props.parth}</h2>
      </div>
      <h5>Date: {props.date}</h5>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${props.percentage}%`, backgroundColor: barColor }}
        >
          <span className="progress-label">{props.percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default Health;
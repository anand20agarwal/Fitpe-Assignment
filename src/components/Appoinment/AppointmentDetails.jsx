import React, { useState } from 'react';
import appointmentData from '../data/appointmentData';
import '../Style/AppointmentDetails.css';

function AppointmentDetails() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="appointment-container">
      {appointmentData.map((item, index) => (
        <div
          key={index}
          className={`appointment-card ${selectedIndex === index ? 'selected' : ''} ${index === 0 ? 'first-card' : ''}`}
          onClick={() => setSelectedIndex(index)}
        >
          <div className="text-content">
            <p className="type">{item.type}</p>
            <p className="time">{item.time}</p>
            <p className="doctor">{item.doctor}</p>
          </div>
          <img src={item.image} alt={item.type} className="appointment-img" />
        </div>
      ))}
    </div>
  );
}

export default AppointmentDetails;

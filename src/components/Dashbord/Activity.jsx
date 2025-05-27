import React from 'react';
import '../Style/ActivityChart.css';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', activity: 30 },
  { name: 'Tue', activity: 20 },
  { name: 'Wed', activity: 27 },
  { name: 'Thu', activity: 25 },
  { name: 'Fri', activity: 35 },
  { name: 'Sat', activity: 40 },
  { name: 'Sun', activity: 28 },
];

const Activity = () => {
  return (
    <div className="activity-chart-container">
      <div className='first-line'>
      <h4>Actvity</h4>
      <p className='p-appoinment'>3 Appoinment in this week</p></div>
      <ResponsiveContainer width={500} height={100}>
        <BarChart data={data} margin={{ top: 25, right: 0, left: 20, bottom: 0 }}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="activity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;

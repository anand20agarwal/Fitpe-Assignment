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

const ActivityChart = () => {
  return (
    <div className="activity-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="activity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;

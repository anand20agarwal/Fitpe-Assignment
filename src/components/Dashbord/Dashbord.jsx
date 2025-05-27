import React from 'react';
import '../Style/Dashbord.css';
import { FiSearch, FiBell } from 'react-icons/fi'; 
import Body from '../Images/Body.svg';
import Health from './Health';
import Activity from './Activity';
import { healthIndicators } from '../data/healthData'; // ✅ Import mock data


function Dashbord() {

  const data = [
  { day: 'Mon', appointments: 3 },
  { day: 'Tues', appointments: 5 },
  { day: 'Wed', appointments: 4 },
  { day: 'Thurs', appointments: 6 },
  { day: 'Fri', appointments: 2 },
  { day: 'Sat', appointments: 3 },
  { day: 'Sun', appointments: 1 },
];

  return (
    <div className="dashboard-container">
      {/* Search Bar */}
      <div className="search-bar-container">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="input-field" />
        <FiBell className="bell-icon" />
      </div>

      {/* Dashboard Heading */}
      <div className="dashbord-name">
        <span>Dashboard</span>
        <select id="Date" className="date">
          <option value="apple">This Week</option>
          <option value="banana">This Month</option>
          <option value="mango">This Year</option>
        </select>
      </div>

      {/* Body Panel */}
      <div className="body-pannel">
        <img src={Body} alt="Body Overview" className="images" />
      </div>

      {/* Health Cards */}
      <div className="health-cards-container">
        {healthIndicators.map(item => (
          <div className={`card${item.id}`} key={item.id}>
            <Health
              images={item.images}
              parth={item.parth}
              date={item.date}
              percentage={item.percentage}
            />
            <h2 className='Healthy Hearth'>Healthy Hearth</h2>
          </div>
        ))}
      </div>

      {/* Activity Chart Section */}
  <Activity/>
    </div>
  );
}


export default Dashbord;
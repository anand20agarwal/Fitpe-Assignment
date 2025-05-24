import React from 'react';
import '../Style/Dashbord.css';
import { FiSearch, FiBell } from 'react-icons/fi'; 
import Body from '../Images/Body.svg';
import lung from '../Images/lung.svg';
import teeth from '../Images/teeth.svg';
import bone from '../Images/bone.png';
import Health from './Health';

function Dashbord() {
  return (
    <div>
    <div className="search-bar-container">
      <FiSearch className="search-icon" />
      <input type="text" placeholder="Search..." className='input-field'/>
      <FiBell className="bell-icon" />
       </div>
      <div className='dashbord-name'>
        <span>Dashboard</span>
         <select id="Date"  className='date'>
        <option value="apple">This Week</option>
        <option value="banana">This Month</option>
        <option value="mango">This Year</option>
      </select>
      </div>
      <div className='body-pannel'>
        <img src={Body} alt="" className='images'></img>
      </div>
      <div className='card1'>
   <Health
  images={lung}
  parth="Lungs"
  date="24 Oct 2021"
  percentage={70}
/>
</div>
<div className='card2'>
   <Health
  images={teeth}
  parth="Teeth"
  date="24 Oct 2021"
  percentage={50}
/>
</div>
<div className='card3'>
   <Health
  images={bone}
  parth="Bone"
  date="24 Oct 2021"
  percentage={80}
/>
</div>
<div className='details'>
    <h5>Deatils</h5>
</div>
    </div>
  )
}

export default Dashbord;

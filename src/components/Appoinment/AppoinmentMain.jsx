import React from 'react'
import '../Style/AppoinmentMain.css';
import Emoji from '../Images/Emoji.png'
import Schedule from './Schedule';
import AppointmentDetails from './AppointmentDetails';
import AppointmentCard from './AppointmentCard';
import injection from '../Images/injection.png';
import eye from '../Images/eye.jpg';
import heart from '../Images/heart.png';
import doctor from '../Images/doctor.jpg';

function AppoinmentMain() {
  return (
    <div className='card'>
      <div className='card-person-details'>
        <button className='person-details'>
  <img src={Emoji} alt="emoji" style={{ width: '21px', height: '21px' }} />
</button>
        <button className='plus-symbol'>+</button>
      </div>
      <h2 className='year-month'>October 2021</h2>
      <Schedule/>

      <AppointmentDetails/>

      <div className='Upcoming-details'>
        <h3 className='Upcoming-details-header'>The Upcoming Schedule</h3>
        <h3 className='Upcoming-details-header-day1'>On Thursday</h3>
        <div className='thursday-data'>
        <AppointmentCard title="Health Checkup Completed" img={injection} time="11:00 AM"/>
          <AppointmentCard title="ophthalmologist" img={eye} time="14:00 AM"/>
           </div>
        <h3 className='Upcoming-details-header-day2'>On 
          
          
          
          
          Saturday</h3>
         <div className='thursday-data'>
        <AppointmentCard title="cardiologist" img={heart} time="12:00 AM"/>
          <AppointmentCard title="neurologist" img={doctor} time="16:00 AM"/>
           </div>
      </div>
    </div>
  )
}

export default AppoinmentMain
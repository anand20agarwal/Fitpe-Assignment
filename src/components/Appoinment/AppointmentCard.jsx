import React from 'react'
import '../Style/AppointmentCard.css';

function AppointmentCard(props) {
  return (
    <div className='container'>
        <div className='container-line'>
      <h5 className='container-title'> {props.title}</h5>
      <img src={props.img} alt='' className='container-img'/>
      </div>
      <h5 className='container-app-time'>{props.time}</h5>
    </div>
  )
}

export default AppointmentCard

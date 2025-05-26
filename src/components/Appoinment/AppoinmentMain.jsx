import React from 'react'
import '../Style/AppoinmentMain.css';
import Emoji from '../Images/Emoji.png'

function AppoinmentMain() {
  return (
    <div className='card'>
      <div className='card-person-details'>
        <button className='person-details'>
  <img src={Emoji} alt="emoji" style={{ width: '21px', height: '21px' }} />
</button>
        <button className='plus-symbol'>+</button>
      </div>
    </div>
  )
}

export default AppoinmentMain

import React from 'react';
import '../Style/Schedule.css';

function Schedule() {
  return (
    <div>
      <table className="tables">
        <thead>
          <tr>
            <td>Mon</td>
            <td>Tues</td>
            <td>Wed</td>
            <td>Thur</td>
            <td>Fri</td>
            <td>Sat</td>
            <td>Sun</td>
          </tr>
        </thead>
        <tbody>
          <tr className='dates'>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>09:00</td>
            <td>12:00</td>
            <td>10:00</td>
            <td>------</td>
            <td>12:00</td>
            <td>09:00</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td className='dark'>09:00</td>
            <td>------</td>
            <td>11:00</td>
            <td>14:00</td>
            <td>14:00</td>
            <td>10:00</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>10:00</td>
            <td>13:00</td>
            <td>------</td>
            <td>16:00</td>
            <td>15:00</td>
            <td>11:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;

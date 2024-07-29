import React from 'react';
import style from './Sidebar.module.css';

const Sidebar = ({ setSelectedSection }) => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <li onClick={() => setSelectedSection('Dashboard')}>Dashboard</li>
        <li>
          Bookings
          <ul>
            <li onClick={()=>setSelectedSection('NewBookings')}>New Bookings</li>
           
            <li onClick={()=>setSelectedSection('RefundBookings')}>Refund Bookings</li>
            <li onClick={()=>setSelectedSection('Booking')}>Booking Records</li>
          </ul>
        </li>
        <li onClick={()=>setSelectedSection('Users')}>Users</li>
        <li onClick={()=>setSelectedSection('UserQueries')}>User Queries</li>
        <li onClick={() => setSelectedSection('Rooms')}>Rooms</li>
        <li onClick={()=> setSelectedSection('Meetings')}>Meetings</li>
        <li onClick={()=> setSelectedSection('Facilities')}>Features & Facilities</li>
        <li onClick={()=> setSelectedSection('Gallery')}>Gallery</li>
        <li  onClick={() => setSelectedSection('Settings')}>Settings</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
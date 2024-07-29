import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Room from '../Room/Room'
import style from './AdminLayout.module.css'
import { useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Users from '../Users/Users'
import UserQueries from '../UserQueries/UserQueries'
import Settings from '../Settings/Settings'

import NewBookings from '../NewBookings/NewBookings'
import FacilitiesTable from '../Facilities/Facilities'
import Gallery from '../Gallery/Gallery'
import Meetings from '../Meetings/Meetings'
import RefundBookings from '../RefundBookings/RefundBookings'
import Booking from '../Booking/Booking'


const AdminLayout = () => {
  const [selectedSection, setSelectedSection] = useState('Dashboard');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Booking':
        return <Booking />;

      case 'NewBookings':
         return <NewBookings/>
      case 'RefundBookings':
         return <RefundBookings/>
      case 'Users':
        return <Users />;
      case 'UserQueries':
        return <UserQueries />;
      case 'Rooms':
        return <Room />;
      case 'Meetings':
        return <Meetings />;
      case 'Facilities':
        return <FacilitiesTable />;
      case 'Gallery':
        return <Gallery  />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className={style.layout}>
      <Header/>
      <div className={style.mainContent}>
      <Sidebar setSelectedSection={setSelectedSection} />
        <div className={style.content}>
        {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
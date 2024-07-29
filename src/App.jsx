import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Layout from './pages/layout/layout';

import Payment from './pages/PaymentForm/Payment';
import Mangalam from './pages/Mangalam/Mangalam';
import SignatureSuit from './pages/SignatureSuit/SignatureSuit';
import ReservationForm from './pages/ReservationForm/ReservationForm';
import Gallery from './pages/Gallery/Gallery';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import EditRoom from './Admin/EditRoom/EditRoom';
import RoomDetails from './pages/SignatureSuit/SignatureSuit';
import MeetingDetails from './pages/Mangalam/Mangalam';
import ProfileForm from './pages/Profile/Profile';
import ProfileChangesForm from './pages/ProfileChanges/ProfileChanges';
import AvailableRoom from './pages/AvailableRoom/AvailableRoom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Mail from './pages/Email/Email';
import Password from './pages/Password/Password';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/profile" element = {<ProfileForm/>}/>
        <Route path="/payment" element={<Payment />} />
        <Route path='/Mangalam' element={<Mangalam/>}/>
        <Route path='/rooms/roomDetails' element={<SignatureSuit/>}/>
        <Route path='reservation' element={<ReservationForm/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='editRoom' element={<EditRoom/>}/>
        <Route path="/rooms/details/:roomType" element={<RoomDetails/>} />
        <Route path="/" element={<Layout />} />
        <Route path="admin" element={<AdminLayout/>} />
        <Route path="/meetings/:venue" element={<MeetingDetails/>} />
        <Route path='/profile' element={<ProfileForm/>}/>
        <Route path='/profileChanges' element={<ProfileChangesForm/>}/>
        <Route path='availability' element={<AvailableRoom/>}/>
        <Route path='password' element = {<ForgotPassword/>}/>
        <Route path = '/email' element={<Mail/>}/>
        <Route path = '/savePassword' element={<Password/>}/>
      </Routes>
    </Router>
  );
}

export default App;

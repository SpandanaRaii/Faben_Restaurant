import React from 'react';
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUS/AboutUs';
import LandingPage from '../landingPage/LandingPage';
import Room from '../Room/Room';
import ContactUs from '../Contact/Contact';
import Meetings from '../Meetings/Meetings';
import Gallery from '../Gallery/Gallery';

const Layout = () => {
  return (
    <div>
      <Menubar />
      <div id="home" className='section'>
        <LandingPage />
      </div>
      <div id="aboutUs" className='section'>
        <AboutUs />
      </div>
      <div id="room" className='section'>
        <Room />
      </div>
      <div id="meetings" className='section'>
        <Meetings/>
      </div>
      <div id="gallery" className='section'>
        <Gallery />
      </div>
      <div id="contact" className='section'>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

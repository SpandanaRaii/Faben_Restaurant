import React, { useState } from 'react';
import { Link } from 'react-scroll';
import style from './Menubar.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';


const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const profileClick =() => {
    navigate('/profile')
  }

  const bookBtn = () => {
    navigate('/reservation')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
     
      setIsLoggedIn(false);
      window.location.href = '/login'; 
    } else {
      window.location.href = '/login'; 
    }
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="Restaurant Logo" />
      </div>
      <div className={style.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>
      <nav className={`${style.nav} ${isMenuOpen ? style.open : ''}`}>
        <ul>
          <li>
            <Link to="aboutUs" spy={true} smooth={true} duration={200} className={style.link}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="room" spy={true} smooth={true} duration={200} className={style.link}>
              Stay
            </Link>
          </li>
          <li>
            <Link to="meetings" spy={true} smooth={true} duration={200} className={style.link}>
              Meetings and Events
            </Link>
          </li>
          <li>
            <Link to="gallery" spy={true} smooth={true} duration={200} className={style.link}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={200} className={style.link}>
              Contact
            </Link>
          </li>
        </ul>
        <button className={style.bookBtn} onClick={bookBtn}>Book Now</button>
        {isLoggedIn ? (
          <div className={style.profileSection}>
          
          <button className={style.authBtn} onClick={handleAuthButtonClick}>
            Sign out
          </button>
          <i className="fas fa-user-circle" style={{ fontSize: '35px', marginRight: '50px' }} onClick={profileClick}></i>
        </div>
        
          ) : (
          <button className={style.authBtn} onClick={handleAuthButtonClick}>
            Sign in
          </button>
        )}  
      </nav>
    </header>
  );
};

export default Menubar;

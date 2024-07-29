import React from 'react';
import style from './Meetings.module.css';
import Mangalam from '../../assets/Mangalam.jpg';
import Megha from '../../assets/Megha.jpg';
import Sagarmatha from '../../assets/Sagarmatha.jpg';
import PT from '../../assets/Halls.jpg'
import { Link } from 'react-router-dom';

const Meetings = () => {
  const images = [
    {
      src: Mangalam,
      title: 'Mangalam',
      link: '/meetings/Mangalam', 
    },
    {
      src: Megha,
      title: 'Megha',
      link: '/meetings/Megha', 
    },
    {
      src: Sagarmatha,
      title: 'Sagarmatha',
      link: '/meetings/Sagarmatha', 
    },
    {
      src: PT,
      title: 'Kanchanjunga',
      link: '/meetings/Kanchanjunga', 
    },
  ];
  return (

    <div className={style.meetings}>
      <h1> Meetings <span className={style.orange}>& </span>Events </h1>
      <div className={style.imagegallery}>
        
        {images.map((image, index) => (
          <div className={style.imagecard} key={index}>
            <img src={image.src} alt={image.title} className={style.image} />
            <div className={style.overlay}>
              <h3>{image.title}</h3>
              <Link to={image.link} className={style.seemore}>See More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetings;

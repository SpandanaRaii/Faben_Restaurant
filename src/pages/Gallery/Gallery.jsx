import React, { useState } from 'react';
import style from './Gallery.module.css';
import login from '../../assets/login.jpg';
import cafe1 from '../../assets/cafe1.jpeg';
import cafe2 from '../../assets/cafe2.jpeg';
import cafe3 from '../../assets/cafe3.jpeg';
import cafe4 from '../../assets/cafe4.jpeg';
import cafe5 from '../../assets/cafe5.jpeg';
import cafe6 from '../../assets/cafe6.jpeg';
import seminar1 from '../../assets/seminar1.jpeg'; 
import seminar2 from '../../assets/seminar2.jpeg';
import seminar3 from '../../assets/seminar3.jpeg';
import seminar4 from '../../assets/seminar4.jpeg';
import seminar5 from '../../assets/seminar5.jpeg';
import seminar6 from '../../assets/seminar6.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setActiveCategory(category);
  };

  const renderGalleryImages = () => {
    if (activeCategory === 'All') {
      return (
        <>
          <div className={style.galleryItem}>
            <img src={cafe1} alt="Image 1" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar1} alt="Image 2" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe2} alt="Image 3" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar2} alt="Image 4" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe3} alt="Image 5" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar3} alt="Image 6" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe4} alt="Image 6" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar4} alt="Image 6" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe5} alt="Image 6" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar5} alt="Image 6" />
          </div>
        </>
      );
    } else if (activeCategory === 'Cafe') {
      return (
        <>
          <div className={style.galleryItem}>
            <img src={cafe1} alt="Cafe Image 1" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe2} alt="Cafe Image 2" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe3} alt="Cafe Image 3" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe4} alt="Cafe Image 4" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe5} alt="Cafe Image 5" />
          </div>
          <div className={style.galleryItem}>
            <img src={cafe6} alt="Cafe Image 6" />
          </div>
        </>
      );
    } else if (activeCategory === 'Seminar Halls') {
      return (
        <>
          <div className={style.galleryItem}>
            <img src={seminar1} alt="Seminar Hall Image 1" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar2} alt="Seminar Hall Image 2" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar3} alt="Seminar Hall Image 3" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar4} alt="Seminar Hall Image 4" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar5} alt="Seminar Hall Image 5" />
          </div>
          <div className={style.galleryItem}>
            <img src={seminar6} alt="Seminar Hall Image 6" />
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <div className={style.galleryContainer}>
        <h1><span className={style.orange}>Our</span> Gallery</h1>
        <div className={style.galleryNav}>
          <a href="#" className={`${style.navLink} ${activeCategory === 'All' ? style.active : ''}`} onClick={(e) => handleCategoryClick('All', e)}>All</a>
          <a href="#" className={`${style.navLink} ${activeCategory === 'Cafe' ? style.active : ''}`} onClick={(e) => handleCategoryClick('Cafe', e)}>Cafe</a>
          <a href="#" className={`${style.navLink} ${activeCategory === 'Seminar Halls' ? style.active : ''}`} onClick={(e) => handleCategoryClick('Seminar Halls', e)}>Seminar Halls</a>
        </div>
        <div className={style.galleryImages}>
          {renderGalleryImages()}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

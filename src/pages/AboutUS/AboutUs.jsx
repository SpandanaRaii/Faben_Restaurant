import style from './aboutUS.module.css';
import AU1 from '../../assets/A1.jpg';

import { useState } from 'react';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  const content = {
    welcome: [
      "Our cozy and inviting atmosphere is perfect for any occasion, from romantic dinners to family gatherings. With a focus on exceptional service, we ensure every visit is memorable."
    ],
    additional: [
      "Join us at our restaurant for an unforgettable dining experience where great food meets great company. We look forward to welcoming you!",
      "Our menu features a diverse range of dishes, from classic favorites to innovative new creations, all made with the freshest ingredients.",
      "Whether you're celebrating a special occasion or just looking for a great meal, we strive to make every visit special."
    ]
  };

  return (
    <div className={style.container}>
      <div className={style.gridItem}>
        <img src={AU1} alt="Burger" />
      </div>
      <div className={style.contentWrapper}>
        <div className={style.contentLeft}>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <h3>WELCOME TO <br/><span style={{fontSize:'3rem', color:'black', fontWeight:'550', marginTop:'50px', fontFamily:'Playfair Display, serif'}}>Hotel Faben inn & Lodge</span></h3>
          {content.welcome.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={style.contentRight}>
          <br />
          <p>{content.additional[0]}</p>
          {showMore && (
            <div className={style.additionalContent}>
              {content.additional.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
          <br />
          <button className={style.readMore} onClick={toggleShowMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

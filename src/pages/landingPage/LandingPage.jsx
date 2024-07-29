import React from 'react';
import video from '../../assets/video.mp4';
import styles from './LandingPage.module.css'; 
import AboutUs from '../AboutUS/AboutUs';

const LandingPage = () => {
  return (
    <div className={styles.hero}>
      <video className={styles.video} src={video} autoPlay loop muted />
      <div className={styles.heroContent}>
        <p>Simple - Unique - Friendly</p>
        <h3>Make Yourself At Home <br/> In Our Hotel</h3>
       
      </div>
    </div>
   
  );
}

export default LandingPage;



  // const navigate = useNavigate();

  // const handleOrderClick = () => {
  //   navigate('/menu');
  // };

  // const handleReservatioClick = () => {
  //   navigate('/acc');
  // };
//   <div className={style.container}>
  //   <div className={style.search}>
  //     <input type="text" placeholder="Search here ..." />
  //     <button className={style.searchBtn} ></button>
  //   </div>
  //   <main>
  //     <section className={style.content}>
  //       <h1>Provide the best <br />food for you.</h1><br></br>
  //       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
  //       <br />
  //       <div className={style.buttons}>
  //         <button className={style.orderBtn} onClick={handleOrderClick}>Order Now</button>
  //         <button className={style.reservationBtn} onClick={handleReservatioClick}>Reservation</button>
  //       </div>
        
  //     </section>
  //     <section className={style.image}>
  //     <img src={LpImage}  style={{ width: '700px', height: '500px' }} />
  //     <div className={style.arrow}>
  //       <button className={style.prev} >‹</button>
  //       <button className={style.next}>›</button>
  //     </div>
  //   </section>
  //   </main>
  
   
    
  // </div>
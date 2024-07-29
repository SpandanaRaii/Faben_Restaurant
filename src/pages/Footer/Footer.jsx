import style from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className={style.footerContainer}>
      <section className={style.restaurant}>
        <h2>Restaurant</h2>
        <p>The Restaurant section of our establishment offers a wide variety of delectable dishes prepared with the freshest ingredients.
            Our menu features both classic and innovative culinary creations, catering to diverse tastes and preferences. Come and enjoy the
            vibrant atmosphere and exemplary service that our Restaurant provides.</p>
        </section>
        <section className={style.contact}>
          <h2>Contact Us</h2>
          <p >000-000-000 Example@Email.Com</p>
          <div className={style.socialIcons}>
            <a href="#" className={style.iconLink}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className={style.iconLink}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className={style.iconLink}><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </section>
        <section className={style.about}>
          <h2>About Us</h2>
          <p >Itahari Chowk,  Opposite of Department</p>
        </section>
      </div>
    </footer>
   
  )
}

export default Footer

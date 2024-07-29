import React, { useState } from 'react';
import style from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={style.getintouch}>
      
      <div className={style.form}>
        
      <div className={style.contactContainer}>
       
        <div className={style.contactItem} >
          <h2>Contact</h2>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          <p style={{textAlign:'center'}}>restaurant@gmail.com <br/>025-5678912</p>
          
        </div>
        <div className={style.contactItem} style={{marginLeft:'-20px'}} >
          <h2>Opening Hour</h2>
          <FontAwesomeIcon icon={faClock} className={style.icon} />
          <p style={{textAlign:'center', }}>Opening Hours: 8 AM - 10 PM</p>
        </div>
        <div className={style.contactItem}>
          <h2>Location</h2>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={style.icon} />
          <p style={{textAlign:'center'}}>Itahari Chowk, Sunsari <br/>Opposite of Department</p>
        </div>
        </div>
      
        <div className={style.contactFormContainer}>
          <h3>Leave Us A Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required  />
            <input type="text"  name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message"  placeholder="Write Message Here" value={formData.message} onChange={handleChange} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
        </div>
      
        {/* <div className={style.contactLocation}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0496480137536!2d85.3239608150603!3d27.717245882788448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1906b9b0d933%3A0x2d0bfb3b0e14b6d!2sItahari%2C%20Nepal!5e0!3m2!1sen!2sus!4v1636587354727!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
    </section>
  );
};

export default ContactUs;

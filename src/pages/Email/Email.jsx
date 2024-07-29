import React from 'react'
import Email from '../../assets/Email.jpg';
import style from './Mail.module.css';
import { useNavigate } from 'react-router-dom';


const Mail = () => {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate('/savePassword')
  }

  const backBtn = () => {
    navigate('/forgot')
  }
  return (
    <div className={style.emailverification}>
      <h2>Email Verification</h2>
      <div className={style.emailicon}>
        <img src={Email} alt={style.EmailIcon} />
      </div>
      <p>We will send a one time code to your Email</p>
      <input type="email" placeholder="abc*@gmail.com" className={style.emailinput} readOnly />
      <div className={style.codeinput}>
        <input type="text" placeholder="Verification Code" className={style.code} />
        <button className={style.sendbutton}>Send</button>
      </div>
      <button className={style.verifybutton} onClick={buttonClick}>Verify code</button>
      <a href="#" className={style.goback} onClick={backBtn}>Go back</a>
    </div>
  )
}

export default Mail
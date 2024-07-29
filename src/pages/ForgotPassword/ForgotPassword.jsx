import React from 'react'
import { useState } from 'react';
import style from './ForgotPassword.module.css'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = event.target.elements['user-info'].value;
        console.log('User Info:', userInfo);
        
      };

      const navigate = useNavigate();
      const continueClick = () => {
        navigate('/email')
      }

      const backClick = () => {
        navigate('/login')
      }

    return (
        <div className={style.container}>
          <h4>Forgot your password?</h4>
          <form onSubmit={handleSubmit}>
            <div className={style.formGroup}>
              <label htmlFor="style.userinfo">Please enter the account you want to reset the password.</label>
              <input
                type="text"
                id="style.userinfo"
                name="style.userinfo"
                placeholder="Please enter your Phone Number or Email"
                required
              />
            </div>
            <button type={style.submit} className={style.btn} onClick={continueClick}>Continue</button>
          </form>
          <a href="#" className={style.goback} onClick={backClick}>Go back</a>
        </div>

    )
    }


export default ForgotPassword
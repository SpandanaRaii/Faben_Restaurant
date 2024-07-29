import React, { useState } from 'react';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/register')
  }

  const submitButton = () => {
    navigate('/')
  }

  const passwordBtn = () => {
    navigate('/password')
  }


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
      </div>
      <div className={style.formContainer}>
        <h2 className={style.title}>Welcome Back</h2>
        <p>Enter your details to sign in</p>
        <form onSubmit={handleSubmit} className={style.form}>
          <label>
            Email 
            <input
              type="email"
              name="email"
              placeholder="Enter your mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Enter your Password 
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <div className={style.formFooter}>
            
            <a href="#" className={style.forgotPassword} onClick={passwordBtn}>Forgot Password?</a>
          </div>

          <button type="submit" className={style.submitButton} onClick={submitButton}> Submit</button>
        </form>
        <div className={style.signUp}>
        <p>Don't have an account? <a href="#" onClick={handleLoginClick}>Sign Up</a></p>
        </div>
        <div className={style.footerLinks}>
          <a href="#">FAQ</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <p className={style.copyright}>&copy;2024 The Feben Inn. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Login;

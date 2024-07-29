import React from 'react';
import style from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login')
  }

  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name:'',
    dob:'',
    number:'',
    rememberMe: false,
  });

  
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
    <div className={style.regContainer}>
      <div className={style.imageContainer}>
      </div>
      <div className={style.formContainer}>
        <h2 className={style.title}>Welcome Back</h2>
        <p>Enter your details to sign in</p>
        <form onSubmit={handleSubmit} className={style.form}>
        <label>
            Full Name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

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
            Date Of Birth
            <input
              type="date"
              name="date"
              placeholder="Enter your date of birth"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mobile Number 
            <input
              type="tel"
              name="number"
              placeholder="Enter your mobile number"
              value={formData.number}
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


          <button type="submit" className={style.submitButton} onClick={handleLoginClick}>Submit</button>
        </form>
        <div className={style.signUp}>
          <p>Already have an account? <a href="#" onClick={handleLoginClick}>Log In</a></p>
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

export default Register


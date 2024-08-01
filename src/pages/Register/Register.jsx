import React, { useState } from 'react';
import style from './Register.module.css';
import regImage from '../../assets/image1.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const passwordVisible = () => {
    setShowPassword(prevState => !prevState);
  };

  const cPasswordVisible = () => {
    setShowCPassword(prevState => !prevState);
  };


  const handleLoginClick = () => {
    navigate('/login');
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    dob: '',
    number: '',
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
    // Add form validation and submission logic here
  };

  return (
    <div className={style.regContainer}>
      <div className={style.imageContainer}>
        {/* Image content here */}
      </div>
      <div className={style.formContainer}>
        <h2 className={style.title}>Register</h2>
        <p>Create your account</p>
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
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date Of Birth
            <input
              type="date"
              name="dob"
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
            Password
            <div className={style.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={style.passwordIcon}
                onClick={passwordVisible}
              />
            </div>
          </label>

          <label>
            Confirm Password
            <div className={style.passwordInputContainer}>
              <input
                type={showCPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon
                icon={showCPassword ? faEyeSlash : faEye}
                className={style.passwordIcon}
                onClick={cPasswordVisible}
              />
            </div>
          </label>

          <button type="submit" className={style.submitButton}>Submit</button>
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

export default Register;

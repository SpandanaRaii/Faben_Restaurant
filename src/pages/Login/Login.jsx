import React, { useState } from 'react';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/register');
  };

  const handleSubmitClick = () => {
    navigate('/');
  };

  const handleForgotClick = () => {
    navigate('/password');
  };

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



  const passwordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.container}>
      <div className={style.imageContainer}></div>
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
          <label className={style.passwordLabel}>
            Enter your Password
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
          <div className={style.formFooter}>
            <a href="#" className={style.forgotPassword} onClick={handleForgotClick}>Forgot Password?</a>
          </div>
          <button type="submit" className={style.submitButton} onClick={handleSubmitClick}>Submit</button>
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
import React, { useState } from 'react';
import style from './Password.module.css'
import { useNavigate } from 'react-router-dom';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

const bttnClick = () => {
    navigate('/login')
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage('Password not matching');
    } else {
      setErrorMessage('');
      
      console.log('Password changed successfully');
    }
  };



  return (
    <div className={style.container}>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label>Current Password</label>
          <input
            type={style.password}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={style.formControl}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label>New Password</label>
          <input
            type={style.password}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className= {style.formControl}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label>Confirm Password</label>
          <input
            type={style.password}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className= {style.formControl}
            required
          />
        </div>
        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
        <button type={style.submit} className={style.btn} onClick={bttnClick}>Save</button>
      </form>
    </div>
  );
}

export default Password;
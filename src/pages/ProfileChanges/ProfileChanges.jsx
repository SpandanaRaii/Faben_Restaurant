import React, { useState } from 'react';
import style from './ProfileChanges.module.css';
import { useNavigate } from 'react-router-dom';

const ProfileChangesForm = () => {
    const navigate = useNavigate();
    const saveClick = () => {
        navigate('/profile')
    }

    const cancelClick = () => {
        navigate('/profile')
    }
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={style.myprofile}>
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.formgroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="dateOfBirth">Date of birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={style.formactions}>
          <button type="button" className={style.editprofile} onClick={saveClick}>
            Save Changes
          </button>
          <button type="submit" className={style.ok} onClick={cancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileChangesForm;


import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './ReservationForm.module.css';

const ReservationForm = () => {
  const navigate = useNavigate();
  const { roomType } = useParams();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    roomType: roomType,
    numberOfRooms: '',
    numberOfPeople: '',
    numberOfChildren: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const [validationMessages, setValidationMessages] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    numberOfRooms: '',
    numberOfPeople: '',
    numberOfChildren: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear the validation message for the current field
    setValidationMessages({
      ...validationMessages,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newValidationMessages = {};

    // Validate required fields
    for (let key in formData) {
      if (formData[key] === '') {
        newValidationMessages[key] = 'This field is required';
        valid = false;
      }
    }

    setValidationMessages(newValidationMessages);

    if (valid) {
      navigate('/availability', { state: { formData } });
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className={style.reservationForm}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* <motion.button
        onClick={handleBackClick}
        className={style.backButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        &lt;
      </motion.button> */}
      <h2>Reservation Form</h2>
      <h3>RESERVE YOUR ROOM, ENJOY YOUR STAY!</h3>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className={style.row}>
          <div>
            <motion.input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.fullName && <p className={style.errorMessage}>{validationMessages.fullName}</p>}
          </div>
          <div>
            <motion.input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.phoneNumber && <p className={style.errorMessage}>{validationMessages.phoneNumber}</p>}
          </div>
        </div>
        <div className={style.row}>
          <div>
            <motion.input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.emailAddress && <p className={style.errorMessage}>{validationMessages.emailAddress}</p>}
          </div>
          <div>
            <motion.input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.address && <p className={style.errorMessage}>{validationMessages.address}</p>}
          </div>
        </div>
        <div className={style.row}>
          <div>
            <motion.input
              type="number"
              placeholder="Number of Rooms"
              name="numberOfRooms"
              value={formData.numberOfRooms}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.numberOfRooms && <p className={style.errorMessage}>{validationMessages.numberOfRooms}</p>}
          </div>
        </div>
        <div className={style.row}>
          <div>
            <motion.input
              type="number"
              placeholder="Number of Guests"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.numberOfPeople && <p className={style.errorMessage}>{validationMessages.numberOfPeople}</p>}
          </div>
          <div>
            <motion.input
              type="number"
              placeholder="Number of Children"
              name="numberOfChildren"
              value={formData.numberOfChildren}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.numberOfChildren && <p className={style.errorMessage}>{validationMessages.numberOfChildren}</p>}
          </div>
        </div>
        <div className={style.row}>
          <div>
            <label htmlFor="check-in">Check In Date:</label>
            <motion.input
              type="date"
              placeholder="Check In Date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.checkInDate && <p className={style.errorMessage}>{validationMessages.checkInDate}</p>}
          </div>
          <div>
            <label htmlFor="check-out">Check Out Date:</label>
            <motion.input
              type="date"
              placeholder="Check Out Date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            {validationMessages.checkOutDate && <p className={style.errorMessage}>{validationMessages.checkOutDate}</p>}
          </div>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Check Availability
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ReservationForm;
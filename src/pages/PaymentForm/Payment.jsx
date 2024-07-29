import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './Payment.module.css';
import Esewa from '../../assets/esewa.png';
import khalti from '../../assets/khalti[1].jpg';

const Payment = () => {
  const location = useLocation();
  const { cartItems = [], checkInDate = '', checkOutDate = '', totalPrice = '0' } = location.state || {};

  const [paymentType, setPaymentType] = useState('Esewa');
  const [pickLocation, setPickLocation] = useState(false);

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  return (
    <div className={style.container}>
      <h3>Choose the payment type you want to use:</h3>
      <div className={style.paymentOptions}>
        <button className={paymentType === 'Esewa' ? style.active : ''} onClick={() => handlePaymentTypeChange('Esewa')}>
          <img src={Esewa} alt="Esewa" />
        </button>
        <button className={paymentType === 'Khalti' ? style.active : ''} onClick={() => handlePaymentTypeChange('Khalti')}>
          <img src={khalti} alt="Khalti" />
        </button>
      </div>

      <div className={style.form}>
        <div className={style.formGroup}>
          <label>Full Name:</label>
          <input type="text" />
          <label>Email Address:</label>
          <input type="email" />
          {/* Loop through cartItems to display each item */}
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <label>Room Type:</label>
              <input type="text" value={item.roomType} readOnly />
              <label>Number of People:</label>
              <input type="number" value={item.numberOfPeople} readOnly />
              <label>Check-In Date:</label>
              <input type="text" value={checkInDate} readOnly />
              <label>Number of Rooms:</label>
              <input type="number" value={item.numberOfRooms} readOnly />
              <label>Number of Children:</label>
              <input type="number" value={item.numberOfChildren} readOnly />
              <label>Check-Out Date:</label>
              <input type="text" value={checkOutDate} readOnly />
              <label>Price:</label>
              {/* Correcting the string interpolation */}
              <input type="text" value={`Rs ${item.price.toFixed(2)}`} readOnly />
            </React.Fragment>
          ))}
        </div>

        <div className={style.total}>
          <p>Total:</p>
          <p>Rs {parseFloat(totalPrice).toFixed(2)}</p>
        </div>

        <div className={style.pickLocation}>
          <input 
            type="checkbox" 
            id="pickLocation" 
            checked={pickLocation} 
            onChange={() => setPickLocation(!pickLocation)} 
          />
          <label htmlFor="pickLocation">Want pickup facility?</label>
        </div>

        <button className={style.confirmButton}>Confirm</button>
      </div>
    </div>
  );
};

export default Payment;

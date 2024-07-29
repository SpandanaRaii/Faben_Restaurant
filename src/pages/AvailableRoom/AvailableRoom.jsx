import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import style from './AvailableRoom.module.css';
import sig from '../../assets/sig.jpeg';

const AvailableRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state;
  const [price, setPrice] = useState(0);
  const [reservationData, setReservationData] = useState({ ...formData });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    flatpickr("#checkin-date", {
      dateFormat: "d M Y",
      minDate: "today",
      maxDate: new Date().fp_incr(365),
      defaultDate: reservationData.checkInDate,
      onChange: ([date]) => handleDateChange('checkInDate', date)
    });
    flatpickr("#checkout-date", {
      dateFormat: "d M Y",
      minDate: "today",
      maxDate: new Date().fp_incr(365),
      defaultDate: reservationData.checkOutDate,
      onChange: ([date]) => handleDateChange('checkOutDate', date)
    });

    calculatePrice();
  }, [reservationData]);

  const handleDateChange = (field, date) => {
    setReservationData(prevData => ({ ...prevData, [field]: date.toLocaleDateString('en-GB') }));
  };

  // const proceedToPayment = () => {
  //   const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  //   navigate('/payment', {
  //     state: {
  //       roomType: reservationData.roomType,  
  //       numberOfPeople: reservationData.numberOfPeople,
  //       numberOfRooms: reservationData.numberOfRooms,
  //       numberOfChildren: reservationData.numberOfChildren,
  //       checkInDate: reservationData.checkInDate,
  //       checkOutDate: reservationData.checkOutDate,
  //       price: total  
  //     }
  //   });
  // };
//   const proceedToPayment = () => {
//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0); // Ensure total price reflects quantity
//   navigate('/payment', {
//     state: {
//       cartItems,  // Pass cartItems to the payment page
//       totalPrice: total
//     }
//   });
// };


const proceedToPayment = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  navigate('/payment', {
    state: {
      cartItems,  // Include cart items in the state
      checkInDate: reservationData.checkInDate,
      checkOutDate: reservationData.checkOutDate,
      totalPrice: total
    }
  });
};


  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setReservationData(prevData => ({ ...prevData, [id]: value }));
  };

  const calculatePrice = () => {
    const rooms = parseInt(reservationData.numberOfRooms);
    const adults = parseInt(reservationData.numberOfPeople);
    const children = parseInt(reservationData.numberOfChildren);
    let totalPrice = 0;

    switch (reservationData.roomType) {
      case 'Signature Suite':
        totalPrice = 200 * rooms + (adults * 60) + (children * 30);
        break;
      case 'Junior Suite':
        totalPrice = 180 * rooms + (adults * 55) + (children * 25);
        break;
      case 'Deluxe Suite':
        totalPrice = 250 * rooms + (adults * 70) + (children * 35);
        break;
      default:
        totalPrice = 150 * rooms + (adults * 50) + (children * 25); 
        break;
    }

    setPrice(totalPrice);
  };

  const handleBook = (roomType) => {
    const existingCartItem = cartItems.find(item => item.roomType === roomType);
    const newItem = {
      roomType: roomType,
      price: price,
      checkInDate: reservationData.checkInDate,
      checkOutDate: reservationData.checkOutDate,
      numberOfRooms: reservationData.numberOfRooms,
      numberOfPeople: reservationData.numberOfPeople,
      numberOfChildren: reservationData.numberOfChildren,
      quantity: existingCartItem ? existingCartItem.quantity + 1 : 1
    };

    if (existingCartItem) {
      if (existingCartItem.quantity < 2) {
        setCartItems(cartItems.map(item => item.roomType === roomType ? newItem : item));
      }
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };
  
  
  const removeFromCart = (roomType) => {
    const updatedCart = cartItems.filter(item => item.roomType !== roomType);
    setCartItems(updatedCart);
  };

  // const proceedToPayment = () => {
  //   navigate('/payment', {
  //     state: { ...reservationData, cartItems }
  //   });
  // };

  return (
    <div className={style.container}>
       <div className={style.header}>
        <div className={style.formGroup}>
          <label htmlFor="checkin-date">Check-in:</label>
          <input type="text" id="checkin-date" value={reservationData.checkInDate} readOnly />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="checkout-date">Check-out:</label>
          <input type="text" id="checkout-date" value={reservationData.checkOutDate} readOnly />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="numberOfRooms">Rooms:</label>
          <select id="numberOfRooms" value={reservationData.numberOfRooms} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="numberOfPeople">Adults:</label>
          <select id="numberOfPeople" value={reservationData.numberOfPeople} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="numberOfChildren">Children:</label>
          <select id="numberOfChildren" value={reservationData.numberOfChildren} onChange={handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button>Search</button>
      </div>

      {/* Room details sections */}
      {/* Example for Signature Suite */}
      <RoomDetails
        roomType="Signature Suite"
        imgSrc={sig}
        description="Discover tranquility in our Signature Room at faben inn. Immerse yourself in nature with an extended terrace that offers a spectacular view, providing ample opportunities to spot wildlife, including the majestic rhino. Enjoy the perfect blend of comfort and a connection with the surrounding serene environment."
        amenities={[
          "Terrace with scenic view",
          "Opportunity to spot wildlife",
          "Comfortable and serene environment",
          "Air conditioning",
          "Flat-screen TV",
          "Minibar"
        ]}
        price={price}
        handleBook={handleBook}
      />
      <RoomDetails
        roomType="Junior Suite"
        imgSrc={sig}
        description="Discover tranquility in our Signature Room at faben inn. Immerse yourself in nature with an extended terrace that offers a spectacular view, providing ample opportunities to spot wildlife, including the majestic rhino. Enjoy the perfect blend of comfort and a connection with the surrounding serene environment."
        amenities={[
          "Terrace with scenic view",
          "Opportunity to spot wildlife",
          "Comfortable and serene environment",
          "Air conditioning",
          "Flat-screen TV",
          "Minibar"
        ]}
        price={price}
        handleBook={handleBook}
      />
      <RoomDetails
        roomType="Deluxe Suite"
        imgSrc={sig}
        description="Discover tranquility in our Signature Room at faben inn. Immerse yourself in nature with an extended terrace that offers a spectacular view, providing ample opportunities to spot wildlife, including the majestic rhino. Enjoy the perfect blend of comfort and a connection with the surrounding serene environment."
        amenities={[
          "Terrace with scenic view",
          "Opportunity to spot wildlife",
          "Comfortable and serene environment",
          "Air conditioning",
          "Flat-screen TV",
          "Minibar"
        ]}
        price={price}
        handleBook={handleBook}
      />

      {/* Render other room details similarly for Junior Suite and Deluxe Suite */}

      {/* Cart Section */}
      <div className={style.cart}>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className={style.cartItem} key={index}>
                <div><strong>Room Type:</strong> {item.roomType}</div>
                <div><strong>Check-in Date:</strong> {item.checkInDate}</div>
                <div><strong>Check-out Date:</strong> {item.checkOutDate}</div>
                <div><strong>Number of Rooms:</strong> {item.numberOfRooms}</div>
                <div><strong>Price:</strong> Rs {item.price.toFixed(2)}</div>
                <button className={style.removeBtn} onClick={() => removeFromCart(item.roomType)}>Remove</button>
              </div>
            ))}
            <button className={style.bookBtn} onClick={proceedToPayment}>Proceed to payment</button>
          </>
        )}
      </div>
    </div>
  );
};

const RoomDetails = ({ roomType, imgSrc, description, amenities, price, handleBook }) => (
  <div className={style.roomInfo}>
    <div className={style.roomImage}>
      <img src={imgSrc} alt={roomType} />
    </div>
    <div className={style.roomDetails}>
      <h2>{roomType}</h2>
      <p>{description}</p>
      <div className={style.amenities}>
        <h3>Amenities</h3>
        <ul>
          {amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className={style.bookingInfo}>
      <div className={style.price}>Rs {price.toFixed(2)}</div>
      <button className={style.bookBtn} onClick={() => handleBook(roomType)}>Book</button>
    </div>
  </div>
  
);

export default AvailableRoom;









import React, { useState } from 'react';
import style from './Booking.module.css';

const initialBookings = [
  {
    id: 1,
    orderId: 'ORD_21289330',
    name: 'tj webdev',
    phone: '123',
    room: 'Simple Room',
    price: 300,
    amount: 900,
    date: '08-09-2022',
    status: 'booked'
  },
  {
    id: 2,
    orderId: 'ORD_28784829',
    name: 'tj webdev',
    phone: '123',
    room: 'Luxury Room',
    price: 600,
    amount: 1200,
    date: '25-08-2022',
    status: 'booked'
  }
];

function Booking() {
  const [bookings, setBookings] = useState(initialBookings);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 1;

  const handleDelete = (id) => {
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < Math.ceil(bookings.length / bookingsPerPage) ? prevPage + 1 : prevPage));
  };

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  return (
    <div className={style.Booking}>
      <table className="bookingsTable">
        <thead>
          <tr>
            <th>#</th>
            <th>User Details</th>
            <th>Room Details</th>
            <th>Bookings Details</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>
                <div>Order ID: {booking.orderId}</div>
                <div>Name: {booking.name}</div>
                <div>Phone No: {booking.phone}</div>
              </td>
              <td>
                <div>Room: {booking.room}</div>
                <div>Price: ₹{booking.price}</div>
              </td>
              <td>
                <div>Amount: ₹{booking.amount}</div>
                <div>Date: {booking.date}</div>
              </td>
              <td>
                <button className={style.statusButton}>{booking.status}</button>
              </td>
              <td>
                <button className={style.deleteButton} onClick={() => handleDelete(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNext} disabled={currentPage === Math.ceil(bookings.length / bookingsPerPage)}>Next</button>
      </div>
    </div>
  );
}

export default Booking;
import React, { useState } from 'react';
import style from './Meetings.module.css';

const Meetings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, hall: 'Mangalam', date: '2024-08-01', organizer: 'John Doe', time: '10:00 AM - 12:00 PM' },
    { id: 2, hall: 'Megha', date: '2024-08-02', organizer: 'Jane Smith', time: '01:00 PM - 03:00 PM' },
    { id: 3, hall: 'Sagarmatha', date: '2024-08-03', organizer: 'Alice Johnson', time: '09:00 AM - 11:00 AM' },
  ]);

  const [newBooking, setNewBooking] = useState({ hall: '', date: '', organizer: '', time: '' });

  const addBooking = () => {
    setBookings([...bookings, { id: bookings.length + 1, ...newBooking }]);
    setNewBooking({ hall: '', date: '', organizer: '', time: '' });
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  return (
    <div className={style.adminContainer}>
      <h1>Admin - Manage Bookings</h1>
      <div className={style.bookingForm}>
        <input
          type="text"
          placeholder="Hall"
          value={newBooking.hall}
          onChange={(e) => setNewBooking({ ...newBooking, hall: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newBooking.date}
          onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Organizer"
          value={newBooking.organizer}
          onChange={(e) => setNewBooking({ ...newBooking, organizer: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time"
          value={newBooking.time}
          onChange={(e) => setNewBooking({ ...newBooking, time: e.target.value })}
        />
        <button onClick={addBooking}>Add Booking</button>
      </div>
      <table className={style.bookingsTable}>
        <thead>
          <tr>
            <th>Hall</th>
            <th>Date</th>
            <th>Organizer</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.hall}</td>
              <td>{booking.date}</td>
              <td>{booking.organizer}</td>
              <td>{booking.time}</td>
              <td>
                <button onClick={() => deleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;
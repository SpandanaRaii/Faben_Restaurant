import React from 'react';
import styles from './NewBookings.module.css';

const NewBookings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>NEW BOOKINGS</h1>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>User Details</th>
            <th>Room Details</th>
            <th>Bookings Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <p>Name: ti webdev</p>
              <p>Phone No: 123</p>
            </td>
            <td>
              <p>Room: Simple Room</p>
              <p>Price: £300</p>
            </td>
            <td>
              <p>Check-in: 08-09-2022</p>
              <p>Check-out: 11-09-2022</p>
              <p>Paid: £900</p>
              <p>Date: 08-09-2022</p>
            </td>
            <td>
              <div className={styles.actionButtons}>
                <button>Assign Room</button>
                <button className={styles.cancel}>Cancel Booking</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Type to search..." />
      </div>
    </div>
  );
};

export default NewBookings;

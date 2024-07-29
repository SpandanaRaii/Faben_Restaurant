import React, { useState } from 'react';
import style from './RefundBookings.module.css';

const initialRefunds = [
  {
    id: 1,
    orderId: 'ORD_21289330',
    name: 'tj webdev',
    phone: '123',
    room: 'Simple Room',
    refundAmount: 900,
    date: '08-09-2022',
    status: 'pending'
  },
  {
    id: 2,
    orderId: 'ORD_28784829',
    name: 'tj webdev',
    phone: '123',
    room: 'Luxury Room',
    refundAmount: 1200,
    date: '25-08-2022',
    status: 'refunded'
  }
];

const RefundBookings = () => {
  const [refunds, setRefunds] = useState(initialRefunds);

  const handleRefund = (id) => {
    setRefunds(refunds.map(refund => refund.id === id ? { ...refund, status: 'refunded' } : refund));
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Refund Bookings</h1>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>User Details</th>
            <th>Room Details</th>
            <th>Refund Details</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {refunds.map((refund) => (
            <tr key={refund.id}>
              <td>{refund.id}</td>
              <td>
                <div>Order ID: {refund.orderId}</div>
                <div>Name: {refund.name}</div>
                <div>Phone No: {refund.phone}</div>
              </td>
              <td>
                <div>Room: {refund.room}</div>
              </td>
              <td>
                <div>Refund Amount: ₹{refund.refundAmount}</div>
                <div>Date: {refund.date}</div>
              </td>
              <td>
                <button className={`${style.statusButton} ${refund.status === 'refunded' ? style.refunded : style.pending}`}>
                  {refund.status}
                </button>
              </td>
              <td>
                {refund.status === 'pending' && (
                  <button className={style.refundButton} onClick={() => handleRefund(refund.id)}>
                    Process Refund
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RefundBookings;

import React, { useState } from 'react';
import styles from './Users.module.css';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User1', email: 'user@gmail.com', phone: '980000000', location: 'Itahari 8 sunsari', dob: '2022-06-12', verified: true, status: 'active', date: '12-06-2022' },
    // Add more users if needed
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <input type="text" className={styles.searchInput} placeholder="Type to search..." />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone no.</th>
              <th>Location</th>
              <th>DOB</th>
              <th>Verified</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.location}</td>
                <td>{user.dob}</td>
                <td className={styles.verified}>{user.verified ? '✓' : '✗'}</td>
                <td className={styles.active}>{user.status}</td>
                <td>{user.date}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

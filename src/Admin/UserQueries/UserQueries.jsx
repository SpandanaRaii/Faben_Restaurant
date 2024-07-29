import React, { useState } from 'react';
import styles from './UserQueries.module.css';

const initialQueries = [
  { id: 1, name: 'User', email: 'user@gmail.com', subject: 'This is a subject', message: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptate vero sed tempore illo atque beatae asperiores, adipisci dicta quia nisi voluptates im', date: '11-03-2022' },
 
];

const UserQueries = () => {
  const [queries, setQueries] = useState(initialQueries);

  const handleDelete = (id) => {
    setQueries(queries.filter(query => query.id !== id));
  };

  const handleDeleteAll = () => {
    setQueries([]);
  };



  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.actionButtons}>
          
          <button className={styles.deleteAll} onClick={handleDeleteAll}>Delete all</button>
        </div>
        <table className={styles.table}>
          <thead>
            <h1>User Queries List</h1>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {queries.map(query => (
              <tr key={query.id}>
                <td>{query.id}</td>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.subject}</td>
                <td>{query.message}</td>
                <td>{query.date}</td>
                <td>
                  <button className={styles.delete} onClick={() => handleDelete(query.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserQueries;

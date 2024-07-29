import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboardHeader}>
        Dashboard
      </div>
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardCard}>
          <h3>New Bookings</h3>
          <p>1</p>
        </div>
        <div className={`${styles.dashboardCard} ${styles.refundBookings}`}>
          <h3>Refund Bookings</h3>
          <p>0</p>
        </div>
        <div className={`${styles.dashboardCard} ${styles.userQueries}`}>
          <h3>User Queries</h3>
          <p>0</p>
        </div>
        {/* <div className={`${styles.dashboardCard} ${styles.ratingReview}`}>
          <h3>Rating & Review</h3>
          <p>5</p>
        </div> */}
      </div>
      <div className={styles.analyticsSection}>
        <div className={styles.analyticsCard}>
          <h3>Total Bookings</h3>
          <p>9</p>
          <p>Rs. 16800</p>
        </div>
        <div className={styles.analyticsCard}>
          <h3>Active Bookings</h3>
          <p>7</p>
          <p>Rs. 15300</p>
        </div>
        <div className={styles.analyticsCard}>
          <h3>Cancelled Bookings</h3>
          <p>1</p>
          <p>Rs. 600</p>
        </div>
      </div>
      <div className={styles.analyticsSection}>
        <div className={styles.analyticsCard}>
          <h3>New Registration</h3>
          <p>0</p>
        </div>
       
        <div className={styles.analyticsCard}>
          <h3>Reviews</h3>
          <p>7</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

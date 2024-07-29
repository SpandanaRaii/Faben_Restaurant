import React, { useState } from 'react';
import styles from './Settings.module.css';

const Settings = () => {
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingContacts, setIsEditingContacts] = useState(false);
  
  const [siteTitle, setSiteTitle] = useState('Faben Inn');
  const [aboutUs, setAboutUs] = useState(`Our cozy and inviting atmosphere is perfect for any occasion, from romantic dinners to family gatherings. With a focus on exceptional service, we ensure every visit is memorable.
  
  Join us at our restaurant for an unforgettable dining experience where great food meets great company. We look forward to welcoming you!
  
  Our menu features a diverse range of dishes, from classic favorites to innovative new creations, all made with the freshest ingredients.
  
  Whether you're celebrating a special occasion or just looking for a great meal, we strive to make every visit special.`);
  const [address, setAddress] = useState('Itahari-8, Sunsari');
  const [phoneNumber, setPhoneNumber] = useState('📞 9852963698');

  const handleEditGeneral = () => setIsEditingGeneral(true);
  const handleSaveGeneral = () => setIsEditingGeneral(false);

  const handleEditContacts = () => setIsEditingContacts(true);
  const handleSaveContacts = () => setIsEditingContacts(false);

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      
      <div className={styles.section}>
        <h2>General Settings</h2>
        {isEditingGeneral ? (
          <>
            <button className={styles.saveButton} onClick={handleSaveGeneral}>Save Changes</button>
            <div className={styles.settingItem}>
              <strong>Site Title</strong>
              <input 
                type="text" 
                value={siteTitle} 
                onChange={(e) => setSiteTitle(e.target.value)} 
              />
            </div>
            <div className={styles.settingItem}>
              <strong>About us</strong>
              <textarea 
                value={aboutUs} 
                onChange={(e) => setAboutUs(e.target.value)} 
              ></textarea>
            </div>
          </>
        ) : (
          <>
            <button className={styles.editButton} onClick={handleEditGeneral}>Edit</button>
            <div className={styles.settingItem}>
              <strong>Site Title</strong>
              <p>{siteTitle}</p>
            </div>
            <div className={styles.settingItem}>
              <strong>About us</strong>
              <p>{aboutUs}</p>
            </div>
          </>
        )}
      </div>
      
      <div className={styles.section}>
        <h2>Shutdown Website</h2>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
        <p>No customers will be allowed to book hotel rooms when shutdown mode is turned on.</p>
      </div>

      <div className={styles.section}>
        <h2>Contacts Settings</h2>
        {isEditingContacts ? (
          <>
            <button className={styles.saveButton} onClick={handleSaveContacts}>Save Changes</button>
            <div className={styles.settingItem}>
              <strong>Address</strong>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
            </div>
            <div className={styles.settingItem}>
              <strong>Phone Numbers</strong>
              <input 
                type="text" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
              />
            </div>
          </>
        ) : (
          <>
            <button className={styles.editButton} onClick={handleEditContacts}>Edit</button>
            <div className={styles.settingItem}>
              <strong>Address</strong>
              <p>{address}</p>
            </div>
            <div className={styles.settingItem}>
              <strong>Phone Numbers</strong>
              <p>{phoneNumber}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;

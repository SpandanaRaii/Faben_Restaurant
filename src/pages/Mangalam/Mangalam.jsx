import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Mangalam.module.css';
import MangalamImg from '../../assets/Mangalam.jpg'; 
import MeghaImg from '../../assets/Megha.jpg'; 
import SagarmathaImg from '../../assets/Sagarmatha.jpg'; 
import PTImg from '../../assets/Halls.jpg';
import Venue from '../../assets/venue.png';
import Seats from '../../assets/Seats.png';

const details = {
  Mangalam: {
    image: MangalamImg,
    title: 'Mangalam Hall',
    description: `Mangalam Hall offers an expansive venue ideal for hosting grand events and conferences. This versatile hall provides a spacious and accommodating setting for a wide range of gatherings. Equipped with top-notch equipment and amenities, Mangalam Hall ensures a seamless and impressive experience for all attendees.`,
    capacity: 'Seating Capacity: Theatre: 440 | Cluster: 162 | U-Shape: 60 | Classroom: 252',
    space: 'Venue Space: 4500 Sq. Ft',
  },
  Megha: {
    image: MeghaImg,
    title: 'Megha Hall',
    description: `Megha Hall is perfect for mid-sized events and meetings. It offers modern amenities and a comfortable environment, making it suitable for various types of gatherings.`,
    capacity: 'Seating Capacity: Theatre: 300 | Cluster: 100 | U-Shape: 40 | Classroom: 150',
    space: 'Venue Space: 3000 Sq. Ft',
  },
  Sagarmatha: {
    image: SagarmathaImg,
    title: 'Sagarmatha Hall',
    description: `Sagarmatha Hall is known for its elegant design and spacious interior, making it a preferred choice for upscale events and conferences.`,
    capacity: 'Seating Capacity: Theatre: 500 | Cluster: 200 | U-Shape: 80 | Classroom: 250',
    space: 'Venue Space: 5000 Sq. Ft',
  },
  Kanchanjunga: {
    image: PTImg,
    title: 'Kanchanjunga Hall',
    description: `Kanchanjunga Hall provides a cozy and well-equipped space for small to medium-sized events. It is designed to offer comfort and functionality.`,
    capacity: 'Seating Capacity: Theatre: 200 | Cluster: 80 | U-Shape: 30 | Classroom: 120',
    space: 'Venue Space: 2000 Sq. Ft',
  },
};

const MeetingDetails = () => {
  const { venue } = useParams();
  const venueDetails = details[venue];

  if (!venueDetails) {
    return <div className={style.venueDetails}>Venue not found</div>;
  }

  return (
    <div className={style.venueDetails}>
      <div className={style.imageContainer}>
        {/* <a href="/" className={style.backButton}>&lt;</a> */}
        <img src={venueDetails.image} alt={venueDetails.title} className={style.image} />
      </div>
      <div className={style.description}>
        <h2>{venueDetails.title}</h2>
        <p>{venueDetails.description}</p>
        <div className={style.details}>
          <div>
            <img src={Seats} alt="Seating Capacity Icon" className={style.icon} />
            <span>{venueDetails.capacity}</span>
          </div>
          <div>
            <img src={Venue} alt="Venue Space Icon" className={style.icon} />
            <span>{venueDetails.space}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;

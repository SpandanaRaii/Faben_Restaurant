import React from 'react';
import style from './Room.module.css';
import del from '../../assets/del.jpeg';
import sig from '../../assets/sig.jpeg';
import jun from '../../assets/jun.jpeg';
import exe from '../../assets/cafe6.jpeg';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const amenitiesIcons = {
  'Free WiFi': 'fas fa-wifi',
  'Air Conditioned': 'fas fa-wind',
  'Samsung Smart TV': 'fas fa-tv',
  'Mini Bar': 'fas fa-glass-martini-alt',
  'Tea / Coffee Maker': 'fas fa-coffee',
  'No Smoking': 'fas fa-smoking-ban'
};

const rooms = [
  {
    name: 'Signature Suite',
    image: sig,
    link: '/rooms/details/signature',
    amenities: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ]
  },
  {
    name: 'Junior Suite',
    image: jun,
    link: '/rooms/details/junior',
    amenities: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ]
  },
  {
    name: 'Deluxe Suite',
    image: del,
    link: '/rooms/details/deluxe',
    amenities: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ]
  },
  {
    name: 'Executive Suite',
    image: exe,
    link: '/rooms/details/executive',
    amenities: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ]
  }
];

const Room = () => {
  return (
    <div className={style.con}>
      <div className={style.container}>
        <div className={style.h}>
          <h1 className={style.orange}> Our Rooms</h1>
        </div>
        
        <div className={style.paragraph}>
          <p>Welcome to our restaurant, where luxury meets comfort.
            Our hotel offers three exquisite types of rooms: the Signature Suite,
            featuring a spacious living area, king-sized bed, elegant bathroom, and a private balcony with stunning views;
            the Junior Suite, perfect for a blend of comfort and style, with a cozy seating area, king-sized bed,
            and modern bathroom; and the Deluxe Room, a welcoming retreat with contemporary décor,
            a plush queen-sized bed, and a well-appointed bathroom.
            Enjoy a delightful dining experience at our in-house restaurant,
            offering a range of culinary delights to satisfy your palate.</p>
        </div>
        <div className={style.rooms}>
          {rooms.map((room, index) => (
            <div key={index} className={style.room}>
              <Link to={room.link} className={style.roomLink}>
                <img src={room.image} alt={room.name} />
                <h2>{room.name}</h2>
                <ul className={style.amenities}>
                  {room.amenities.map((amenity, i) => (
                    <li key={i}><i className={amenitiesIcons[amenity]}></i> {amenity}</li>
                  ))}
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Room;

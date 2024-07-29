import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './SignatureSuit.module.css';
import sig from '../../assets/sig.jpeg';
import jun from '../../assets/jun.jpeg';
import del from '../../assets/del.jpeg';
import exe from '../../assets/cafe6.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 

const amenitiesIcons = {
  'Free WiFi': 'fas fa-wifi',
  'Air Conditioned': 'fas fa-wind',
  'Samsung Smart TV': 'fas fa-tv',
  'Mini Bar': 'fas fa-glass-martini-alt',
  'Tea / Coffee Maker': 'fas fa-coffee',
  'No Smoking': 'fas fa-smoking-ban'
};

const roomDetails = {
  signature: {
    name: 'Signature Suite',
    image: sig,
    specification: {
      people: '2 person',
      beds: '1 Double',
      rooms: '40'
    },
    description: 'Amongst one of the largest hotel suites in Itahari, Restaurant Signature suites offer bold Nepali design and distinctive style that truly reflects the hotel’s glamorous heritage. Each room offers stunning view and the space redefine modern luxury with playful panache.',
    services: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ],
    features: [
      'Fresh fruit basket upon arrival',
      'Complimentary Wi-Fi',
      'Mini Duplex living and bedroom',
      'Spacious lounge area, perfect for informal meetings or mini gatherings with fireplace',
      'Samsung Smart TV (55”) in the lounge and bedroom',
      'Central air-conditioning',
      'Work desk with plug sockets',
      'Mini Bar with wide array of drinks',
      'Tea and coffee making facilities with selection of teas',
      'Luxurious Jacuzzi and Walk-in-Shower',
      'Floor heating in bathroom',
      'Hairdryer and Iron with Iron Board',
      '24 hr running hot water'
    ]
  },
  junior: {
    name: 'Junior Suite',
    image: jun,
    specification: {
      people: '2 person',
      beds: '1 Double',
      rooms: '40'
    },
    description: 'Amongst one of the largest hotel suites in Itahari, Restaurant Signature suites offer bold Nepali design and distinctive style that truly reflects the hotel’s glamorous heritage. Each room offers stunning view and the space redefine modern luxury with playful panache.',
    services: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ],
    features: [
      'Fresh fruit basket upon arrival',
      'Complimentary Wi-Fi',
      'Mini Duplex living and bedroom',
      'Spacious lounge area, perfect for informal meetings or mini gatherings with fireplace',
      'Samsung Smart TV (55”) in the lounge and bedroom',
      'Central air-conditioning',
      'Work desk with plug sockets',
      'Mini Bar with wide array of drinks',
      'Tea and coffee making facilities with selection of teas',
      'Luxurious Jacuzzi and Walk-in-Shower',
      'Floor heating in bathroom',
      'Hairdryer and Iron with Iron Board',
      '24 hr running hot water'
    ]
  },
  deluxe: {
    name: 'Deluxe Suite',
    image: del,
    specification: {
      people: '2 person',
      beds: '1 Double',
      rooms: '40'
    },
    description: 'Amongst one of the largest hotel suites in Itahari, Restaurant Signature suites offer bold Nepali design and distinctive style that truly reflects the hotel’s glamorous heritage. Each room offers stunning view and the space redefine modern luxury with playful panache.',
    services: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ],
    features: [
      'Fresh fruit basket upon arrival',
      'Complimentary Wi-Fi',
      'Mini Duplex living and bedroom',
      'Spacious lounge area, perfect for informal meetings or mini gatherings with fireplace',
      'Samsung Smart TV (55”) in the lounge and bedroom',
      'Central air-conditioning',
      'Work desk with plug sockets',
      'Mini Bar with wide array of drinks',
      'Tea and coffee making facilities with selection of teas',
      'Luxurious Jacuzzi and Walk-in-Shower',
      'Floor heating in bathroom',
      'Hairdryer and Iron with Iron Board',
      '24 hr running hot water'
    ]
  },
  executive: {
    name: 'Executive Suite',
    image: exe,
    specification: {
      people: '2 person',
      beds: '1 Double',
      rooms: '40'
    },
    description: 'Amongst one of the largest hotel suites in Itahari, Restaurant Signature suites offer bold Nepali design and distinctive style that truly reflects the hotel’s glamorous heritage. Each room offers stunning view and the space redefine modern luxury with playful panache.',
    services: [
      'Free WiFi',
      'Air Conditioned',
      'Samsung Smart TV',
      'Mini Bar',
      'Tea / Coffee Maker',
      'No Smoking'
    ],
    features: [
      'Fresh fruit basket upon arrival',
      'Complimentary Wi-Fi',
      'Mini Duplex living and bedroom',
      'Spacious lounge area, perfect for informal meetings or mini gatherings with fireplace',
      'Samsung Smart TV (55”) in the lounge and bedroom',
      'Central air-conditioning',
      'Work desk with plug sockets',
      'Mini Bar with wide array of drinks',
      'Tea and coffee making facilities with selection of teas',
      'Luxurious Jacuzzi and Walk-in-Shower',
      'Floor heating in bathroom',
      'Hairdryer and Iron with Iron Board',
      '24 hr running hot water'
    ]
  }
};

const RoomDetails = () => {
  const { roomType } = useParams();
  const room = roomDetails[roomType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return <div>Room not found</div>;
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh"
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "100vh"
    }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 50,
    duration: 0.5
  };

  return (
    <motion.div
      className={style.container}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={style.header}>
        {/* <a href="/" className={style.backButton}>&lt;</a> */}
        <h1>ROOM DETAILS</h1>
      </div>
      <h2>{room.name}</h2>
      <div className={style.content}>
        <div className={style.image}>
          <motion.img 
            src={room.image} 
            alt={room.name} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>
        <div className={style.details}>
          <h3>Room Specification</h3>
          <div className={style.specification}>
            <p>No of people: <span>{room.specification.people}</span></p>
            <p>No. of Beds: <span>{room.specification.beds}</span></p>
            <p>No. of Rooms: <span>{room.specification.rooms}</span></p>
          </div>
          <div className={style.ro}>
            <h3>Room Services</h3>
            <ul className={style.amenities}>
                  {room.services.map((service, i) => (
                    <li key={i}><i className={amenitiesIcons[service]}></i> {service}</li>
                  ))}
                </ul>
            
          </div>
        </div>
      </div>
      <div className={style.description}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {room.description}
        </motion.p>
        <ul className={style.featuresList}>
          {room.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (i * 0.2), duration: 1 }}
            >
              <FaCheckCircle /> {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default RoomDetails;

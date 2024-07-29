import React, { useState } from 'react';
import { FaWifi, FaTv } from 'react-icons/fa';
import { MdAir } from 'react-icons/md';
import style from './Facilities.module.css';

const FacilitiesTable = () => {
  const initialFacilities = [
    { id: 1, icon: 'FaWifi', name: 'Wifi', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt odio quos dolore commodi repudiandae tenetur.' },
    { id: 2, icon: 'MdAir', name: 'Air conditioner', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt odio quos dolore commodi repudiandae tenetur.' },
    { id: 3, icon: 'FaTv', name: 'Television', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt odio quos dolore commodi repudiandae tenetur.' },
  ];

  const [facilities, setFacilities] = useState(initialFacilities);
  const [showForm, setShowForm] = useState(false);
  const [newFacility, setNewFacility] = useState({ icon: '', name: '', description: '' });

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFacility((prevFacility) => ({
      ...prevFacility,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFacilities((prevFacilities) => [
      ...prevFacilities,
      { ...newFacility, id: prevFacilities.length + 1 },
    ]);
    setNewFacility({ icon: '', name: '', description: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setFacilities((prevFacilities) => prevFacilities.filter(facility => facility.id !== id));
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'FaWifi':
        return <FaWifi />;
      case 'MdAir':
        return <MdAir />;
      case 'FaTv':
        return <FaTv />;
      default:
        return <FaWifi />;
    }
  };

  return (
    <div className={style.facilitiesContainer}>
      <h2>Facilities</h2>
      <button className={style.addButton} onClick={handleAddClick}>+ Add</button>
      {showForm && (
        <form className={style.facilityForm} onSubmit={handleSubmit}>
          <div>
            <label>Icon:</label>
            <input
              type="text"
              name="icon"
              value={newFacility.icon}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newFacility.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={newFacility.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Facility</button>
        </form>
      )}
      <table className={style.facilitiesTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Icon</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {facilities.map((facility) => (
            <tr key={facility.id}>
              <td>{facility.id}</td>
              <td>{renderIcon(facility.icon)}</td>
              <td>{facility.name}</td>
              <td>{facility.description}</td>
              <td><button className={style.deleteButton} onClick={() => handleDelete(facility.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilitiesTable;
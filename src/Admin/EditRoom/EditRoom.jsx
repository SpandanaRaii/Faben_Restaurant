import React, { useState, useEffect } from 'react';
import style from './EditRoom.module.css';

const EditRoom = ({ room, onSave, onCancel }) => {
  const [formData, setFormData] = useState(room);

  useEffect(() => {
    setFormData(room);
  }, [room]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [category, key] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [category]: {
          ...prevData[category],
          [key]: checked,
        },
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.editForm}>
      <h2>Edit Room</h2>
      <div>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Price
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          No. of Rooms
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Guests (Max.)
          <input
            type="text"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>Services</label>
        <div className={style.services}>
          <label>
            <input
              type="checkbox"
              name="facilities.wifi"
              checked={formData.facilities?.wifi || false}
              onChange={handleChange}
            />
            Wifi
          </label>
          <label>
            <input
              type="checkbox"
              name="facilities.airConditioner"
              checked={formData.facilities?.airConditioner || false}
              onChange={handleChange}
            />
            Air Conditioner
          </label>
          <label>
            <input
              type="checkbox"
              name="facilities.television"
              checked={formData.facilities?.television || false}
              onChange={handleChange}
            />
            Television
          </label>
          <label>
            <input
              type="checkbox"
              name="facilities.spa"
              checked={formData.facilities?.spa || false}
              onChange={handleChange}
            />
            Spa
          </label>
          <label>
            <input
              type="checkbox"
              name="facilities.roomHeater"
              checked={formData.facilities?.roomHeater || false}
              onChange={handleChange}
            />
            Room Heater
          </label>
          <label>
            <input
              type="checkbox"
              name="facilities.geyser"
              checked={formData.facilities?.geyser || false}
              onChange={handleChange}
            />
            Geyser
          </label>
        </div>
      </div>
      <div>
        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditRoom;

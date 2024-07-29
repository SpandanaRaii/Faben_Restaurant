// AddRoom.js
import React, { useState } from 'react';
import style from './AddRoom.module.css';

const AddRoom = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    beds: '',
    price: '',
    quantity: '',
    status: 'active',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prevData => ({
          ...prevData,
          imageUrl: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.addForm}>
      <h2>Add Room</h2>
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
        <label>
          No. of Beds
          <input
            type="text"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Status
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </label>
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
      <div>
        <label>
          Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>
      {formData.imageUrl && <img src={formData.imageUrl} alt="Room" className={style.previewImage} />}
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AddRoom;

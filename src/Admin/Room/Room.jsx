import React, { useState } from 'react';
import style from './Room.module.css';
import EditRoom from '../EditRoom/EditRoom';
import AddRoom from '../AddRoom/AddRoom';

const initialRooms = [
  { id: 1, name: 'Signature Suite', guests: '2', beds: '2', price: 'Rs.300', quantity: 10, status: 'active', area: '250', description: '', imageUrl: '' },
  { id: 2, name: 'Junior Suite', guests: '3', beds: '3', price: 'Rs.500', quantity: 5, status: 'active', area: '250', description: '', imageUrl: '' },
  { id: 3, name: 'Deluxe Suite', guests: '4', beds: '2', price: 'Rs.600', quantity: 2, status: 'active', area: '250', description: '', imageUrl: '' },
];

const Room = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [editingRoom, setEditingRoom] = useState(null);
  const [addingRoom, setAddingRoom] = useState(false);

  const handleEdit = (room) => {
    setEditingRoom(room);
  };

  const handleDelete = (id) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  const handleAdd = () => {
    setAddingRoom(true);
  };

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedRooms = rooms.map(room => {
          if (room.id === id) {
            return { ...room, imageUrl: e.target.result };
          }
          return room;
        });
        setRooms(updatedRooms);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (updatedRoom) => {
    if (editingRoom) {
      setRooms(rooms.map(room => (room.id === updatedRoom.id ? updatedRoom : room)));
      setEditingRoom(null);
    } else {
      setRooms([...rooms, { ...updatedRoom, id: rooms.length + 1 }]);
      setAddingRoom(false);
    }
  };

  const handleCancel = () => {
    setEditingRoom(null);
    setAddingRoom(false);
  };

  return (
    <div className={style.rooms}>
      <h2>Rooms</h2>
      <button onClick={handleAdd} className={style.addButton}>+ Add</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Guests(Max)</th>
            <th>Price</th>
            <th>No. of Rooms</th>
            <th>No. of Beds</th>
            <th>Status</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={room.id}>
              <td>{index + 1}</td>
              <td>{room.name}</td>
              <td>{room.guests}</td>
              <td>{room.price}</td>
              <td>{room.quantity}</td>
              <td>{room.beds}</td>
              <td><button>{room.status}</button></td>
              <td>
                {room.imageUrl && <img src={room.imageUrl} alt={room.name} />}
              </td>
              <td>
                <button onClick={() => handleEdit(room)}>Edit</button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleImageUpload(room.id, event)}
                  style={{ display: 'none' }}
                  id={`upload-${room.id}`}
                />
                <label htmlFor={`upload-${room.id}`} className={style.uploadLabel}>
                  Image
                </label>
                <button onClick={() => handleDelete(room.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingRoom && (
        <EditRoom
          room={editingRoom}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      {addingRoom && (
        <AddRoom
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Room;

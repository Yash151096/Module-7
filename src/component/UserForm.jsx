import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/actions/userActions';
import './UserForm.css'; // Import the CSS file

const UserForm = ({ selectedUser, setSelectedUser }) => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '', contact: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      resetForm();
    }
  }, [selectedUser]);

  const resetForm = () => {
    setFormData({ name: '', email: '', address: '', contact: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser(formData));
    }
    resetForm();
    setSelectedUser(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="input"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="input"
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
        className="input"
      />
      <input
        type="text"
        placeholder="Contact"
        value={formData.contact}
        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
        required
        className="input"
      />
      <button type="submit" className="button">
        {selectedUser ? 'Update' : 'Add'} User
      </button>
    </form>
  );
};

export default UserForm;

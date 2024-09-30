import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions/userActions';
import './UserTable.css'; // Import the CSS file

const UserTable = ({ setSelectedUser }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.contact}</td>
            <td>
              <button onClick={() => setSelectedUser(user)} className="edit-button">Edit</button>
              <button onClick={() => dispatch(deleteUser(user.id))} className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

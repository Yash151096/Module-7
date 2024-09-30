import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/userActions';
import UserForm from './component/UserForm';
import UserTable from './component/UserTable';

const App = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Crud</h1>
      <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserTable setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';

function UserCrud() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const API_BASE_URL = process.env.API_BASE_URL;
  console.log(API_BASE_URL);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/api/users`);
      console.log("response", response.data);
      setUsers(response.data.data);
      console.log("Updated users state:", users);
    } catch (error) {
      console.error('There was an error fetching the users!', error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:3004/api/users/${_id}`);
      fetchUsers();
    } catch (error) {
      console.error('There was an error deleting the user!', error);
    }
  };

  const handleEdit = (user) => {
    console.log("user",user)
    setSelectedUser(user);
  };

  const handleAdd = () => {
    setSelectedUser(null); // Reset form for adding a new user
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      {console.log("Rendering with users:", users)}
      <UserForm selectedUser={selectedUser} onUserAdded={fetchUsers} />
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} onAdd={handleAdd} />
    </div>
  );
}

export default UserCrud;

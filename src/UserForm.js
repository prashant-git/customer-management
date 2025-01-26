import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm({ selectedUser, onUserAdded }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    if (selectedUser) {
      setUser({
        name: selectedUser.name,
        email: selectedUser.email,
      });
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      // Edit user
      await axios.put(`http://localhost:3004/api/users/${selectedUser._id}`, user);
    } else {
      // Add new user
      console.log("selectedUser",user)
      await axios.post(`http://localhost:3004/api/users`, user);
    }
    setUser({ name: '', email: '' });
    onUserAdded(); // Fetch updated list of users
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
}

export default UserForm;

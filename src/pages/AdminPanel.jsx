import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // For navigation

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/admin/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>User Details</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <Link to={`/admin/user/${user._id}`}>{user.name} - {user.email}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

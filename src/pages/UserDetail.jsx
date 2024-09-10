import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`/admin/user/${userId}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load user data');
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Subject:</strong> {user.subject}</p>
          <p><strong>Message:</strong> {user.message}</p>
        </div>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};

export default UserDetail;

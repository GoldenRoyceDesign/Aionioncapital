import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if token exists

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/LoginPage" />;
  }

  // Otherwise, render the protected component
  return children;
};

export default ProtectedRoute;

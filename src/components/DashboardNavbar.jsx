import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_Aionion.png';
import { FaSearch } from 'react-icons/fa';

const DashboardNavbar = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      if (!token) {
        navigate('/LoginPage'); // Redirect to login if there's no token
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setEmail(data.email); // Set the email in state
        } else {
          console.error('Failed to fetch profile');
          navigate('/LoginPage'); // Redirect to login on error
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        navigate('/LoginPage'); // Redirect to login in case of an error
      }
    };


    fetchProfile();
  }, [navigate]);


  // Handle signout
  const handleSignout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/LoginPage'); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light dashboardNav">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>

        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">
            {/* Home, FAQ, and Support links in the center */}
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FAQ">F.A.Q</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support">Support</Link>
            </li>
          </ul>

          {/* Search box with an icon */}
          <form className="d-flex mx-auto search border rounded-5">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Signout button on the right */}
          <div className="d-flex align-items-center">
            <div className="user-info me-3">
              <div className="avatar-circle">
                {/* Default avatar image (placeholder if user doesn't have a profile image) */}
                <img src="https://avatar.iran.liara.run/public" alt="User Avatar" className="avatar-img" />
              </div>
              <small>{email}</small> {/* Display email dynamically */}
            </div>


            <button
              className="btn"
              type="button"
              onClick={handleSignout} // Call signout function
            >
              Signout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;

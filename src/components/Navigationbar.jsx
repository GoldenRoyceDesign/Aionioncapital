import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/Logo_Aionion.png';

function Navigationbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar variant="light" expand="lg" expanded={expanded} className='navbar'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} style={{ width: 'fit-content' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" onClick={handleClose}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/Resources" onClick={handleClose}>Tools & Resources</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs" onClick={handleClose}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/privacy-policy" onClick={handleClose}>Privacy Policy</Nav.Link>
            {/* <Nav.Link as={Link} to="/SupportHub" onClick={handleClose}>Support</Nav.Link> */}
            <div className='nav-btn'>
              <a href='https://trade.aionioncapital.com' target='_blank' rel="noreferrer">
                <button className='pe-5 ps-5 pt-2 pb-2'>Log In </button></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

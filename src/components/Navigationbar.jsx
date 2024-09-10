// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../assets/Hackathonx_logo.png'; // Adjust the path to your logo

// function Navigationbar() {
//   return (
//     <Navbar bg="light" variant="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src={logo}
//             width="40"
//             height="40"
//             className="d-inline-block align-top"
//             alt="College Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
//             <Nav.Link as={Link} to="/Services">Services</Nav.Link>
//             <Nav.Link as={Link} to="/AccountOpening">Account Opening</Nav.Link>
//             <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
//             <Nav.Link as={Link} to="/Transparency">Transparency</Nav.Link>
//             <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigationbar;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/aionion_logo.png'; // Adjust the path to your logo

function Navigationbar() {
  return (
    <Navbar expand="lg" style={{background: 'white'}}>
      <Container>
        <Navbar.Brand>
          <a href='/'>
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="College Logo"
          /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={ScrollLink} to="home" smooth={true} duration={500} style={{cursor: 'pointer'}}>Home</Nav.Link>
            <Nav.Link as={ScrollLink} to="about-us" smooth={true} duration={500} style={{cursor: 'pointer'}}>About Us</Nav.Link>
            <Nav.Link as={ScrollLink} to="services" smooth={true} duration={500} style={{cursor: 'pointer'}}>Services</Nav.Link>
            <Nav.Link as={ScrollLink} to="account-opening" smooth={true} duration={500} style={{cursor: 'pointer'}}>Account Opening</Nav.Link>
            <Nav.Link as={ScrollLink} to="resources" smooth={true} duration={500} style={{cursor: 'pointer'}}>Resources</Nav.Link>
            <Nav.Link as={ScrollLink} to="transparency" smooth={true} duration={500} style={{cursor: 'pointer'}}>Transparency</Nav.Link>
            <Nav.Link as={ScrollLink} to="file" smooth={true} duration={500} style={{cursor: 'pointer'}}>Download PDF</Nav.Link>
            <Nav.Link as={ScrollLink} to="contact-us" smooth={true} duration={500} style={{cursor: 'pointer'}}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import AccountOpening from './pages/AccountOpening';
// import Resources from './pages/Resources';
// import Transparency from './pages/Transparency';
// import ContactUs from './pages/ContactUs';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/AboutUs' element={<AboutUs />} />
//         <Route path='/Services' element={<Services />} />
//         <Route path='/AccountOpening' element={<AccountOpening />} />
//         <Route path='/Resources' element={<Resources/>} />
//         <Route path='/Transparency' element={<Transparency />} />
//         <Route path='/ContactUs' element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import Navigationbar from './components/Navigationbar';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AccountCreation from './pages/AccountCreation';
import Transparency from './pages/Transparency';
import Resources from './pages/Resources';
import File from './pages/File';

function App() {
  return (
    <div>
      <Navigationbar />
      <section id="home" style={{ background: '#F3F2F7' }}>
        <Home />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="transparency">
        <Transparency />
      </section>
      <section id="accountCreation">
        <AccountCreation />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section id="file" >
        <File />
      </section>

      <section id="contact-us" style={{ background: 'linear-gradient(to bottom right, #FFFFFF 15%, #f57d87 50%, #094E8F 100%)', padding: '.6rem 0' }} >
        <ContactUs />
      </section>
    </div>
  );
}

export default App;


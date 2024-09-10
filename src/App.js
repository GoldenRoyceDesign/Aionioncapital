import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Transparency from './pages/Transparency';
import AccountOpening from './pages/AccountOpening';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import UserDetail from './pages/UserDetail'; // Import User Detail Component

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        {/* Define routes for admin panel and user details */}
        <Route path="/admin/user/:userId" element={<UserDetail />} />
        
        {/* Define routes for existing pages */}
        <Route path="/" element={
          <div>
            <section id="home" style={{background: '#F3F2F7'}}>
              <Home />
            </section>
            <section id="about-us">
              <AboutUs />
            </section>
            <section id="account-opening">
              <AccountOpening />
            </section>
            <section id="transparency">
              <Transparency />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="resources">
              <Resources />
            </section>
            <section id="contact-us" style={{background: '#F3F2F7', padding: '.6rem 0'}} >
              <ContactUs />
            </section>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;



// import React from 'react';
// import Navigationbar from './components/Navigationbar';
// import ContactUs from './pages/ContactUs';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import Transparency from './pages/Transparency';
// import AccountOpening from './pages/AccountOpening';
// import Resources from './pages/Resources';

// function App() {
//   return (
//     <div>
//       <Navigationbar />
//       <section id="home" style={{background: '#F3F2F7'}}>
//         <Home />
//       </section>
//       <section id="about-us">
//         <AboutUs />
//       </section>
//       <section id="account-opening">
//         <AccountOpening />
//       </section>
//       <section id="transparency">
//         <Transparency />
//       </section>
//       <section id="services">
//         <Services />
//       </section>
      
//       <section id="resources">
//         <Resources />
//       </section>
      
//       <section id="contact-us" style={{background: '#F3F2F7', padding: '.6rem 0'}} >
//         <ContactUs />
//         </section>
//     </div>
//   );
// }

// export default App;


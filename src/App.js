import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './responsive.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navigationbar';
import Dashboard from './pages/Dashboard';
import Signup from './components/Signup';
import VerifyPage from './components/VerifyPage';
import LoginPage from './components/LoginPage';
import VerifyLogin from './components/VerifyLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <NavbarController />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Resources' element={<Resources />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/VerifyLogin' element={<VerifyLogin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/VerifyPage' element={<VerifyPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

function NavbarController() {
  const location = useLocation(); // Get the current route

  // Conditionally render Navbar based on route
  const showNavbar = location.pathname !== '/LoginPage' && location.pathname !== '/Signup'  && location.pathname !== '/VerifyPage' && location.pathname !== '/VerifyLogin'; // Hide navbar on /Login

  return showNavbar ? <Navbar /> : null;
}

export default App;

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './responsive.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navigationbar';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import VerifyPage from './components/VerifyPage';

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
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/VerifyPage' element={<VerifyPage />} />
      </Routes>
    </Router>
  );
}

function NavbarController() {
  const location = useLocation(); // Get the current route

  // Conditionally render Navbar based on route
  const showNavbar = location.pathname !== '/Login' && location.pathname !== '/Signup'  && location.pathname !== '/VerifyPage'; // Hide navbar on /Login

  return showNavbar ? <Navbar /> : null;
}

export default App;

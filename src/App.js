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
import DashboardNavbar from './components/DashboardNavbar'; // New Navbar for Dashboard
import ProfileForm from './components/ProfileForm';
import ProtectedRoute from './components/ProtectedRoute';
import TermsAndCondition from './pages/TermsAndCondition';
import RefundCancellation from './pages/RefundCancellation';
import Disclaimer from './pages/Disclaimer';
import Calculator from './pages/Calculator';
import SupportHub from './pages/SupportHub';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavbarController />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Resources' element={<Resources />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/ProfileForm' element={<ProfileForm />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/VerifyLogin' element={<VerifyLogin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/VerifyPage' element={<VerifyPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndCondition />} />
        <Route path='/refund-cancellation' element={<RefundCancellation />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/SupportHub' element={<SupportHub />} />
      </Routes>
      <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF 15%, #f57d87 50%, #094E8F 100%)', padding: '.6rem 0' }}>
        <Footer />
      </div>
    </Router>
  );
}

function NavbarController() {
  const location = useLocation(); // Get the current route

  // Conditionally render different Navbars
  const showNavbar = location.pathname !== '/LoginPage' && location.pathname !== '/Signup' && location.pathname !== '/VerifyPage' && location.pathname !== '/VerifyLogin' && location.pathname !== '/Dashboard' && location.pathname !== '/ProfileForm';

  // Conditionally show the Dashboard Navbar if on Dashboard route
  const showDashboardNavbar = location.pathname === '/Dashboard';
  const showProfileNavbar = location.pathname === '/ProfileForm';

  return (
    <>
      {showDashboardNavbar || showProfileNavbar ? <DashboardNavbar /> : null} {/* Show Dashboard specific navbar */}
      {showNavbar ? <Navbar /> : null} {/* Show default navbar */}
    </>
  );
}

export default App;

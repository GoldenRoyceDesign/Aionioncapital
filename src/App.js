import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './responsive.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navigationbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Resources' element={<Resources/>} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;





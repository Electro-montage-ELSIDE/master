import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import ProjectPage  from './pages/ProjectPage';
import ServicePage from './pages/ServicePage'
import { useState, useEffect } from 'react';
import mainlogo from './images/elside_logo.jpeg'
import About from './About';





function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <div className="loadingScreen">
        <img src={mainlogo} alt="Company Logo" />
        <p className='slogan' >"Empowering Your World.</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects/*' element={<ProjectPage />} />
            <Route path='/service/*' element={<ServicePage />}  />
            <Route path='/about' element={<About />}  />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

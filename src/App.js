
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import RoutesPage from './pages/RoutesPage';
import Budget from './pages/Budget';
import Events from './pages/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Visits from './pages/Visits';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/visits" element={<Visits />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <p>&copy; 2025 Manasa. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Connect from './pages/Connect';

function App() {
  return (
    <div className="Portfolio Main Page">
      <main>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        </BrowserRouter>

      </main>
    
    </div>
  );
}

export default App;

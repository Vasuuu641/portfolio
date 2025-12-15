import React from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Connect from './pages/Connect';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div className="Portfolio Main Page">
      <main>
        < Navbar />
        < Home />
        < About />
        < Projects />
        < Connect />
      </main>
    
    </div>
  );
}

export default App;

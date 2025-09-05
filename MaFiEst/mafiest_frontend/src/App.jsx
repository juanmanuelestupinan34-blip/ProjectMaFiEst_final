import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './legacy/login';
import Register from './legacy/register';
import Dashboard from './pages/Dashboard';
import Inventario from './pages/Inventario';
import Usuarios from './pages/Usuarios';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
};

export default App;

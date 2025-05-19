import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>TecnoFarma</h2>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/inventario">Inventario</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

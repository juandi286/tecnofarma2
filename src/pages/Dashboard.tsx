import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h1>Bienvenido al Panel</h1>
      <div className="dashboard-grid">
        <div className="card">Inventario</div>
        <div className="card">Usuarios</div>
        <div className="card">Reportes</div>
        <div className="card">Configuración</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

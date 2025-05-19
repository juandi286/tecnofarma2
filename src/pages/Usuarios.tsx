import React from 'react';
import './usuarios.css';
import { Link } from 'react-router-dom';

const Usuarios: React.FC = () => {
  return (
    <div className="usuarios-container">
      <header className="usuarios-header">
        <h1>Gestión de Usuarios</h1>
        <Link to="/dashboard" className="back-button">Volver al Dashboard</Link>
      </header>

      <section className="usuarios-actions">
        <button className="btn-agregar">+ Nuevo Usuario</button>
        <input type="text" placeholder="Buscar usuario..." className="input-busqueda" />
      </section>

      <section className="usuarios-lista">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Juan Pérez</td>
              <td>juan@example.com</td>
              <td>Administrador</td>
              <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
            {/* Más filas aquí en el futuro */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Usuarios;

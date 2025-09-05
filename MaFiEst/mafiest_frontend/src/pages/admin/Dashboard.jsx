import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Panel de Administración</h1>
                <p>Bienvenido al panel de administración de MaFiEst.</p>
                <div className="dashboard-links">
                    <Link to="/admin/manage-users">Gestionar Usuarios</Link>
                    <Link to="/admin/manage-groups">Gestionar Grupos</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
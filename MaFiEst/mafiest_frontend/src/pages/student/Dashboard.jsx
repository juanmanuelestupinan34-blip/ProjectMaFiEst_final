import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Bienvenido al Panel de Control del Estudiante</h1>
            <div className="dashboard-links">
                <Link to="/student/courses" className="dashboard-link">Cursos Disponibles</Link>
                <Link to="/student/activities" className="dashboard-link">Ver Actividades</Link>
                <Link to="/student/submit-activity" className="dashboard-link">Entregar Actividades</Link>
                <Link to="/student/grades" className="dashboard-link">Mis Calificaciones</Link>
                <Link to="/student/progress" className="dashboard-link">Progreso</Link>
                <Link to="/student/achievements" className="dashboard-link">Mis Logros</Link>
            </div>
        </div>
    );
};

export default Dashboard;

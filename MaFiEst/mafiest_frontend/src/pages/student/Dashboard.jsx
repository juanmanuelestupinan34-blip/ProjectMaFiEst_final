import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div className="dashboard">
            <h1>Bienvenido al Panel del Estudiante</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/student/courses">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/student/progress">Progreso</Link>
                    </li>
                    <li>
                        <Link to="/student/achievements">Mis Logros</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contáctanos</Link>
                    </li>
                    <li>
                        <Link to="/advisory">Solicitar Asesoría</Link>
                    </li>
                    <li>
                        <Link to="/config">Configuración</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default StudentDashboard;
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Bienvenido al Panel del Independiente</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/independent/courses">Cursos Disponibles</Link>
                    </li>
                    <li>
                        <Link to="/independent/progress">Progreso</Link>
                    </li>
                    <li>
                        <Link to="/independent/achievements">Mis Logros</Link>
                    </li>
                    <li>
                        <Link to="/config">Configuración</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
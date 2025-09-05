import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div>
            <h1>Panel del Docente</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/teacher/upload-exams">Subir Exámenes</Link>
                    </li>
                    <li>
                        <Link to="/teacher/upload-workshops">Subir Talleres</Link>
                    </li>
                    <li>
                        <Link to="/teacher/manage-students">Gestionar Estudiantes</Link>
                    </li>
                    <li>
                        <Link to="/teacher/manage-progress">Gestionar Progreso</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TeacherDashboard;
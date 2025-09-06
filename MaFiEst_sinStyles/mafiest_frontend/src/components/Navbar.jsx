import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css'

const Navbar = ({ userRole, onLogout }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                {userRole === 'admin' && (
                    <>
                        <li>
                            <Link to="/admin/dashboard">Panel de Administración</Link>
                        </li>
                        <li>
                            <Link to="/admin/manage-users">Gestionar Usuarios</Link>
                        </li>
                        <li>
                            <Link to="/admin/manage-groups">Gestionar Grupos</Link>
                        </li>
                    </>
                )}
                {userRole === 'teacher' && (
                    <>
                        <li>
                            <Link to="/teacher/dashboard">Panel del Docente</Link>
                        </li>
                        <li>
                            <Link to="/teacher/upload-exams">Subir Exámenes</Link>
                        </li>
                        <li>
                            <Link to="/teacher/upload-workshops">Subir Talleres</Link>
                        </li>
                    </>
                )}
                {userRole === 'student' && (
                    <>
                        <li>
                            <Link to="/student/dashboard">Panel del Estudiante</Link>
                        </li>
                        <li>
                            <Link to="/student/courses">Cursos</Link>
                        </li>
                        <li>
                            <Link to="/student/progress">Progreso</Link>
                        </li>
                        <li>
                            <Link to="/student/achievements">Logros</Link>
                        </li>
                    </>
                )}
                {userRole === 'independent' && (
                    <>
                        <li>
                            <Link to="/independent/dashboard">Panel del Independiente</Link>
                        </li>
                        <li>
                            <Link to="/independent/courses">Cursos</Link>
                        </li>
                        <li>
                            <Link to="/independent/progress">Progreso</Link>
                        </li>
                        <li>
                            <Link to="/independent/achievements">Logros</Link>
                        </li>
                    </>
                )}
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
                <li>
                    <Link to="/advisory">Asesorías</Link>
                </li>
                <li>
                    <Link to="/config">Configuración</Link>
                </li>
                <li>
                    <button onClick={onLogout}>Cerrar Sesión</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
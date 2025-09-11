import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/navbar.css';

const Navbar = ({ userRole, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MaFiEst</Link>
            </div>
            <ul className="navbar-links">
                {userRole === 'administrador' && (
                    <>
                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                        <li><Link to="/admin/manage-users">Manejo de Usuarios</Link></li>
                        <li><Link to="/admin/manage-groups">Manejo de Grupos</Link></li>
                    </>
                )}
                {userRole === 'docente' && (
                    <>
                        <li><Link to="/teacher/dashboard">Dashboard</Link></li>
                        // <li><Link to="/teacher/upload-exams">Subir Actividades</Link></li>
                        // <li><Link to="/teacher/upload-workshops">Upload Workshops</Link></li>
                    </>
                )}
                {userRole === 'estudiante' && (
                    <>
                        <li><Link to="/student/dashboard">Dashboard</Link></li>
                        <li><Link to="/student/courses">Cursos</Link></li>
                        <li><Link to="/student/progress">Progreso</Link></li>
                        <li><Link to="/student/achievements">Mis logros</Link></li>
                    </>
                )}
                {userRole === 'independiente' && (
                    <>
                        <li><Link to="/independent/dashboard">Dashboard</Link></li>
                        <li><Link to="/independent/courses">Cursos</Link></li>
                        <li><Link to="/independent/progress">Progreso</Link></li>
                        <li><Link to="/independent/achievements">Mis logros</Link></li>
                    </>
                )}
                <li><Link to="/contact">Contáctanos</Link></li>
                <li><Link to="/advisory">Asesorías</Link></li>
                <li><Link to="/config">Configuración</Link></li>
                <li><button onClick={onLogout}>Cerrar Sesión</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;

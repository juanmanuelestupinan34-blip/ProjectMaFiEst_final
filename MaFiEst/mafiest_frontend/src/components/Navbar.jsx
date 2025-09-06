import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ userRole, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MaFiEst</Link>
            </div>
            <ul className="navbar-links">
                {userRole === 'admin' && (
                    <>
                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                        <li><Link to="/admin/manage-users">Manage Users</Link></li>
                        <li><Link to="/admin/manage-groups">Manage Groups</Link></li>
                    </>
                )}
                {userRole === 'teacher' && (
                    <>
                        <li><Link to="/teacher/dashboard">Dashboard</Link></li>
                        <li><Link to="/teacher/upload-exams">Upload Exams</Link></li>
                        <li><Link to="/teacher/upload-workshops">Upload Workshops</Link></li>
                    </>
                )}
                {userRole === 'student' && (
                    <>
                        <li><Link to="/student/dashboard">Dashboard</Link></li>
                        <li><Link to="/student/courses">Courses</Link></li>
                        <li><Link to="/student/progress">Progress</Link></li>
                        <li><Link to="/student/achievements">Achievements</Link></li>
                    </>
                )}
                {userRole === 'independent' && (
                    <>
                        <li><Link to="/independent/dashboard">Dashboard</Link></li>
                        <li><Link to="/independent/courses">Courses</Link></li>
                        <li><Link to="/independent/progress">Progress</Link></li>
                        <li><Link to="/independent/achievements">Achievements</Link></li>
                    </>
                )}
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/advisory">Advisory</Link></li>
                <li><Link to="/config">Configuration</Link></li>
                <li><button onClick={onLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
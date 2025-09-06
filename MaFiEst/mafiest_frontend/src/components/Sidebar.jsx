import React from 'react';
import { Link } from 'react-router-dom';
import '.. /styles/components/sidebar.css';

const Sidebar = ({ role }) => {
    return (
        <div className="sidebar">
            <h2>MaFiEst</h2>
            <ul>
                {role === 'admin' && (
                    <>
                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                        <li><Link to="/admin/manage-users">Manage Users</Link></li>
                        <li><Link to="/admin/manage-groups">Manage Groups</Link></li>
                    </>
                )}
                {role === 'teacher' && (
                    <>
                        <li><Link to="/teacher/dashboard">Dashboard</Link></li>
                        <li><Link to="/teacher/upload-exams">Upload Exams</Link></li>
                        <li><Link to="/teacher/upload-workshops">Upload Workshops</Link></li>
                    </>
                )}
                {role === 'student' && (
                    <>
                        <li><Link to="/student/dashboard">Dashboard</Link></li>
                        <li><Link to="/student/courses">Courses</Link></li>
                        <li><Link to="/student/progress">Progress</Link></li>
                        <li><Link to="/student/achievements">Achievements</Link></li>
                    </>
                )}
                {role === 'independent' && (
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
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;

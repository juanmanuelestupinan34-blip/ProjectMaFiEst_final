import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/Dashboard';
import ManageUsers from '../pages/admin/ManageUsers';
import ManageGroups from '../pages/admin/ManageGroups';
import StudentDashboard from '../pages/student/Dashboard';
import Courses from '../pages/student/Courses';
import Progress from '../pages/student/Progress';
import Achievements from '../pages/student/Achievements';
import TeacherDashboard from '../pages/teacher/Dashboard';
import UploadExams from '../pages/teacher/UploadExams';
import UploadWorkshops from '../pages/teacher/UploadWorkshops';
import IndependentDashboard from '../pages/independent/Dashboard';
import IndependentCourses from '../pages/independent/Courses';
import IndependentProgress from '../pages/independent/Progress';
import IndependentAchievements from '../pages/independent/Achievements';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import Contact from '../pages/Contact';
import Advisory from '../pages/Advisory';
import Config from '../pages/Config';
import RutaProtegida from './RutaProtegida';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/config" element={<RutaProtegida><Config /></RutaProtegida>} />
            
            <Route path="/admin/dashboard" element={<RutaProtegida><AdminDashboard /></RutaProtegida>} />
            <Route path="/admin/manage-users" element={<RutaProtegida><ManageUsers /></RutaProtegida>} />
            <Route path="/admin/manage-groups" element={<RutaProtegida><ManageGroups /></RutaProtegida>} />
            
            <Route path="/student/dashboard" element={<RutaProtegida><StudentDashboard /></RutaProtegida>} />
            <Route path="/student/courses" element={<RutaProtegida><Courses /></RutaProtegida>} />
            <Route path="/student/progress" element={<RutaProtegida><Progress /></RutaProtegida>} />
            <Route path="/student/achievements" element={<RutaProtegida><Achievements /></RutaProtegida>} />
            
            <Route path="/teacher/dashboard" element={<RutaProtegida><TeacherDashboard /></RutaProtegida>} />
            <Route path="/teacher/upload-exams" element={<RutaProtegida><UploadExams /></RutaProtegida>} />
            <Route path="/teacher/upload-workshops" element={<RutaProtegida><UploadWorkshops /></RutaProtegida>} />
            
            <Route path="/independent/dashboard" element={<RutaProtegida><IndependentDashboard /></RutaProtegida>} />
            <Route path="/independent/courses" element={<RutaProtegida><IndependentCourses /></RutaProtegida>} />
            <Route path="/independent/progress" element={<RutaProtegida><IndependentProgress /></RutaProtegida>} />
            <Route path="/independent/achievements" element={<RutaProtegida><IndependentAchievements /></RutaProtegida>} />
        </Routes>
    );
};

export default AppRoutes;
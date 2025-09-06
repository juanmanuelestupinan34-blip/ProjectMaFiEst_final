import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <RutaProtegida path="/contact" component={Contact} />
                <RutaProtegida path="/advisory" component={Advisory} />
                <RutaProtegida path="/config" component={Config} />
                
                <RutaProtegida path="/admin/dashboard" component={AdminDashboard} />
                <RutaProtegida path="/admin/manage-users" component={ManageUsers} />
                <RutaProtegida path="/admin/manage-groups" component={ManageGroups} />
                
                <RutaProtegida path="/student/dashboard" component={StudentDashboard} />
                <RutaProtegida path="/student/courses" component={Courses} />
                <RutaProtegida path="/student/progress" component={Progress} />
                <RutaProtegida path="/student/achievements" component={Achievements} />
                
                <RutaProtegida path="/teacher/dashboard" component={TeacherDashboard} />
                <RutaProtegida path="/teacher/upload-exams" component={UploadExams} />
                <RutaProtegida path="/teacher/upload-workshops" component={UploadWorkshops} />
                
                <RutaProtegida path="/independent/dashboard" component={IndependentDashboard} />
                <RutaProtegida path="/independent/courses" component={IndependentCourses} />
                <RutaProtegida path="/independent/progress" component={IndependentProgress} />
                <RutaProtegida path="/independent/achievements" component={IndependentAchievements} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
import React from 'react';
import '../../styles/components/course-card.css';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <a href={course.link} className="course-link">Ver Curso</a>
        </div>
    );
};

export default CourseCard;

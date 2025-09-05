import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Área:</strong> {course.area}</p>
            <p><strong>Progreso:</strong> {course.progress}%</p>
            <button className="btn">Ver Curso</button>
        </div>
    );
};

export default CourseCard;
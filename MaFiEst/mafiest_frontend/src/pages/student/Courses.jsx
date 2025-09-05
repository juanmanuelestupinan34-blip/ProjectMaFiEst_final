import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../../components/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses'); // Adjust the endpoint as necessary
                setCourses(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) return <div>Loading courses...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Available Courses</h1>
            <div className="courses-container">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
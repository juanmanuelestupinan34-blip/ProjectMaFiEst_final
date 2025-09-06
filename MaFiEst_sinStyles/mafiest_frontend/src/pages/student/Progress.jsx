import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Progress = () => {
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get('/api/progress');
                setProgressData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Progreso de Cursos</h1>
            <ul>
                {progressData.map((item) => (
                    <li key={item.id}>
                        <h2>{item.courseName}</h2>
                        <p>Área: {item.area}</p>
                        <p>Progreso: {item.progressPercentage}%</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Progress;
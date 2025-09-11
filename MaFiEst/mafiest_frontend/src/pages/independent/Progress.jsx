import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/pages/progress.css';

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="progress-container">
            <h1>My Progress</h1>
            <ul>
                {progressData.map((item) => (
                    <li key={item.id}>
                        <h2>{item.courseName}</h2>
                        <p>Progress: {item.progress}%</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Progress;

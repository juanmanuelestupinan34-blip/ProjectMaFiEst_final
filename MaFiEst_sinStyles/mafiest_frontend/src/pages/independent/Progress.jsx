import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Progress = () => {
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get(`/api/progress/${userId}`);
                setProgressData(response.data);
            } catch (error) {
                console.error('Error fetching progress data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>My Progress</h1>
            <ul>
                {progressData.map((item) => (
                    <li key={item.id}>
                        <strong>{item.area}</strong>: {item.progress}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Progress;
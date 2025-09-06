import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AchievementCard from '../../components/AchievementCard';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await axios.get('/api/achievements');
                setAchievements(response.data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            }
        };

        fetchAchievements();
    }, []);

    return (
        <div>
            <h1>Mis Logros</h1>
            <div className="achievements-list">
                {achievements.length > 0 ? (
                    achievements.map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                    ))
                ) : (
                    <p>No tienes logros aún.</p>
                )}
            </div>
        </div>
    );
};

export default Achievements;
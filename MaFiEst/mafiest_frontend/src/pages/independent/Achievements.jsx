import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AchievementCard from '../../components/AchievementCard';
import './achievements.css';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await axios.get('/api/achievements');
                setAchievements(response.data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAchievements();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="achievements-container">
            <h1>Mis Logros</h1>
            <div className="achievements-list">
                {achievements.map((achievement) => (
                    <AchievementCard
                        key={achievement.id}
                        title={achievement.title}
                        description={achievement.description}
                        icon={achievement.icon}
                        dateEarned={achievement.dateEarned}
                    />
                ))}
            </div>
        </div>
    );
};

export default Achievements;
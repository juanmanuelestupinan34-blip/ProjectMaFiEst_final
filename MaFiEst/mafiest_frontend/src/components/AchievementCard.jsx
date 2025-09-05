import React from 'react';

const AchievementCard = ({ achievement }) => {
    return (
        <div className="achievement-card">
            <img src={achievement.icon} alt={achievement.title} className="achievement-icon" />
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            <p className="achievement-date">Obtenido el: {new Date(achievement.dateEarned).toLocaleDateString()}</p>
        </div>
    );
};

export default AchievementCard;
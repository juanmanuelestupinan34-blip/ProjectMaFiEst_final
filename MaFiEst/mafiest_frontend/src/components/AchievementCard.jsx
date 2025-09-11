import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/achievement-card.css';

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

AchievementCard.propTypes = {
    achievement: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dateEarned: PropTypes.string.isRequired,
    }).isRequired,
};

export default AchievementCard;

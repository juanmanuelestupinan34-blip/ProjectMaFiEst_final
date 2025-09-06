const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const UserAchievement = db.define('UserAchievement', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    achievementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Achievements',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    dateEarned: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = UserAchievement;
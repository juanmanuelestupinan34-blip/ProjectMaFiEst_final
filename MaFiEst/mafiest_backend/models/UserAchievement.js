// Modelo que relaciona usuarios con logros
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class UserAchievement extends Model {}

UserAchievement.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    achievementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Achievements',
            key: 'id'
        }
    },
    dateEarned: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'UserAchievement',
    tableName: 'UserAchievements',
    timestamps: false
});

module.exports = UserAchievement;
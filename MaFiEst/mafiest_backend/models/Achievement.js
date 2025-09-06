const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Achievement = sequelize.define('Achievement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING(255),
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isIn: [['progress', 'exam', 'constancy', 'participation']],
        },
    },
    points: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

module.exports = Achievement;
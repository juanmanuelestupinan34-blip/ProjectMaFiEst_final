const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Progress = sequelize.define('Progress', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    progress: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Progress;
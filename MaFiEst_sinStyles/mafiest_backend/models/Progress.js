const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Progress extends Model {}

Progress.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false
  },
  progressPercentage: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  },
  lastUpdated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Progress',
  tableName: 'Progresses',
  timestamps: false
});

module.exports = Progress;
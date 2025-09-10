const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class ActivityResult extends Model {}

ActivityResult.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  submissionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  grade: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  gradedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'ActivityResult',
  tableName: 'ActivityResults',
  timestamps: true
});

module.exports = ActivityResult;

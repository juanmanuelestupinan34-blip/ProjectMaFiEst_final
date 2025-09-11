const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class ActivitySubmission extends Model {}

ActivitySubmission.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  submittedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'ActivitySubmission',
  tableName: 'ActivitySubmissions',
  timestamps: true
});

module.exports = ActivitySubmission;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Progress extends Model {}

Progress.init({
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
  sequelize,
  modelName: 'Progress',
  tableName: 'Progresses',
  timestamps: true,
});

module.exports = Progress;

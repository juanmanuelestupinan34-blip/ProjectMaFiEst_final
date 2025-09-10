const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Group extends Model {}

Group.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Group',
  tableName: 'Groups',
  timestamps: true,
});

module.exports = Group;

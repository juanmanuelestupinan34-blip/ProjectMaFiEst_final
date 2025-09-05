// Group.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Group extends Model {}

Group.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Group',
});

// Associations can be defined here if needed

module.exports = Group;
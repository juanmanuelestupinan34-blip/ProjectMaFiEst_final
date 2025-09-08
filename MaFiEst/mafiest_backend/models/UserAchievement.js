const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const UserAchievement = sequelize.define("UserAchievement", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id"
    }
  },
  achievementId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Achievements",
      key: "id"
    }
  },
  dateEarned: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "UserAchievements",
  timestamps: false
});

module.exports = UserAchievement;

import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const UserGroup = sequelize.define("UserGroup", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "UserGroups",
  timestamps: false  // esta tabla no necesita createdAt/updatedAt
});

export default UserGroup;

import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";
import User from "./User.js";
import Group from "./Group.js";

const Workshop = sequelize.define("Workshop", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fileUrl: {
    type: DataTypes.STRING, // Ruta del archivo (Drive o local)
    allowNull: true
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id"
    }
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Groups",
      key: "id"
    }
  },
  deadline: {
    type: DataTypes.DATE, // fecha límite de entrega
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "Workshops",
  timestamps: false
});

// Relaciones
Workshop.belongsTo(User, { foreignKey: "teacherId" });
Workshop.belongsTo(Group, { foreignKey: "groupId" });

export default Workshop;

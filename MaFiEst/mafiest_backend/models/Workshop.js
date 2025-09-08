import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

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
    allowNull: false
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false
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

export default Workshop;

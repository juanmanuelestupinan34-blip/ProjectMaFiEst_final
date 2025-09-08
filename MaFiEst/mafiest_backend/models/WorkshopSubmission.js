import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";
import User from "./User.js";
import Workshop from "./Workshop.js";

const WorkshopSubmission = sequelize.define("WorkshopSubmission", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  workshopId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Workshops",
      key: "id"
    }
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id"
    }
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: true  // NULL hasta que el docente califique
  },
  submittedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "WorkshopSubmissions",
  timestamps: false
});

// Relaciones
WorkshopSubmission.belongsTo(User, { foreignKey: "studentId" });
WorkshopSubmission.belongsTo(Workshop, { foreignKey: "workshopId" });

export default WorkshopSubmission;

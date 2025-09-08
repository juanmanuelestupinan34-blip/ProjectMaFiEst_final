import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const WorkshopSubmission = sequelize.define("WorkshopSubmission", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  workshopId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false
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

export default WorkshopSubmission;

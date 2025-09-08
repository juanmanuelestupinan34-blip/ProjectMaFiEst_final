import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const ExamResult = sequelize.define("ExamResult", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  examId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: true  // puede quedar null si no está calificado
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  takenAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "ExamResults",
  timestamps: false
});

export default ExamResult;

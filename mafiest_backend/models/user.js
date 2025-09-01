const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [3, 20],
        msg: "El nombre de usuario debe tener entre 3 y 20 caracteres"
      }
    }
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 50],
        msg: "El nombre debe tener entre 2 y 50 caracteres"
      }
    }
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "Debe ser un correo válido" }
    }
  },

  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [60, 60], // Bcrypt genera hashes de 60 caracteres
        msg: "El hash de la contraseña no es válido"
      }
    }
  },

  role: {
    type: DataTypes.ENUM("admin", "teacher", "student", "independent"),
    allowNull: false,
    defaultValue: "independent"
  }
});

module.exports = User;

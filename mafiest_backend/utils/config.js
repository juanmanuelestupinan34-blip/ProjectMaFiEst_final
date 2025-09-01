require("dotenv").config();

const PORT = process.env.PORT || 3003;

// Configuración de conexión a MySQL desde .env
const DB_NAME = process.env.DB_NAME || "mafiest_db";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DIALECT = "mysql";

module.exports = {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
};

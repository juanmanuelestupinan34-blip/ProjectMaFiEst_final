const { Sequelize } = require("sequelize");
const config = require("./config");

// Crear instancia de Sequelize
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: false, // cambia a true si quieres ver las queries en consola
  }
);

// Probar conexión
sequelize.authenticate()
  .then(() => console.log("✅ Conexión establecida con MySQL"))
  .catch(err => console.error("❌ Error de conexión con MySQL:", err));

module.exports = sequelize;

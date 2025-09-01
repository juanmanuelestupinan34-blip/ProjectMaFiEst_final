const app = require("./app");
const config = require("./utils/config");
const sequelize = require("./utils/db");
const logger = require("./utils/logger");

const PORT = config.PORT || 3003;

const startServer = async () => {
  try {
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ alter: true }); 
    logger.info("✅ Modelos sincronizados con MySQL");

    // Iniciar servidor
    app.listen(PORT, () => {
      logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error("❌ Error al iniciar el servidor:", error);
    process.exit(1); // si falla la DB, no arranca el server
  }
};

startServer();


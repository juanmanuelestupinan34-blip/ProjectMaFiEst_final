const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
const sequelize = require("./utils/db");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

// Importar rutas
const user = require("./routes/user");          // /api/users
const auth = require("./routes/auth");          // /api/auth
const contact = require("./routes/contact");    // /api/contacts
const advisory = require("./routes/advisory");  // /api/advisories
const progress = require("./routes/progress");  // /api/progress
const achievement = require("./routes/achievement"); // /api/achievements

const app = express();

// Conexión a la base de datos
logger.info("Conectando a MySQL...");
sequelize.authenticate()
  .then(() => logger.info("✅ Conectado a MySQL"))
  .catch((error) => logger.error("❌ Error al conectar a MySQL:", error.message));

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

// Rutas (API REST en plural/singular según convención)
app.use("/api/users", user);             // CRUD usuarios (admin)
app.use("/api/auth", auth);              // login, register independiente, refresh, logout
app.use("/api/contacts", contact);       // formulario "contáctanos"
app.use("/api/advisories", advisory);    // formulario "asesorías"
app.use("/api/progress", progress);      // progreso de cursos de cada usuario
app.use("/api/achievements", achievement); // logros del usuario

// Manejo de errores
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
const sequelize = require("./utils/db");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

const users = require("./routes/users");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");
const advisories = require("./routes/advisories");
const progress = require("./routes/progress");
const achievements = require("./routes/achievements");

const app = express();

logger.info("Conectando a MySQL...");
sequelize.authenticate()
  .then(() => logger.info("✅ Conectado a MySQL"))
  .catch((error) => logger.error("❌ Error al conectar a MySQL:", error.message));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

// Rutas
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);
app.use("/api/advisories", advisories);
app.use("/api/progress", progress);
app.use("/api/achievements", achievements);

// Manejo de errores
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

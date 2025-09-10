const db = require('./utils/db');
const logger = require('./utils/logger');
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

// Conexión a BD y arranque del servidor
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`✅ Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    logger.error('❌ Unable to connect to the database:', error);
  });

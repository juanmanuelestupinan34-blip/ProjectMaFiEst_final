const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./utils/db');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);

app.use('/api', routes);

const PORT = config.PORT || 3000;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error('Unable to connect to the database:', error);
  });
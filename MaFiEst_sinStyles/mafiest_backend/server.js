const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./utils/db');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);

app.use('/api/auth', routes.auth);
app.use('/api/users', routes.users);
app.use('/api/groups', routes.groups);
app.use('/api/progress', routes.progress);
app.use('/api/achievements', routes.achievements);
app.use('/api/contacts', routes.contacts);
app.use('/api/advisories', routes.advisories);

db.sync()
  .then(() => {
    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`);
    });
  })
  .catch((error) => {
    logger.error('Unable to connect to the database:', error);
  });
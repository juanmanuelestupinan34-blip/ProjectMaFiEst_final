const express = require('express');
const app = express();
const db = require('./utils/db');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const routes = require('./routes');

// Middleware
app.use(express.json());
app.use(middleware.tokenExtractor);

// Routes
app.use('/api/auth', routes.auth);
app.use('/api/users', routes.users);
app.use('/api/groups', routes.groups);
app.use('/api/progress', routes.progress);
app.use('/api/achievements', routes.achievements);
app.use('/api/contacts', routes.contacts);
app.use('/api/advisories', routes.advisories);

// Error handling middleware
app.use(middleware.errorHandler);

// Start server
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});

// Connect to the database
db.authenticate()
    .then(() => {
        logger.info('Database connection established successfully.');
    })
    .catch(err => {
        logger.error('Unable to connect to the database:', err);
    });
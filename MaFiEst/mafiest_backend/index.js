const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./utils/db');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const groupRoutes = require('./routes/groups');
const progressRoutes = require('./routes/progress');
const achievementRoutes = require('./routes/achievements');
const contactRoutes = require('./routes/contacts');
const advisoryRoutes = require('./routes/advisories');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/advisories', advisoryRoutes);

// Error handling middleware
app.use(middleware.errorHandler);

// Connect to the database and start the server
const PORT = process.env.PORT || 3000;
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    logger.error('Unable to connect to the database:', error);
  });
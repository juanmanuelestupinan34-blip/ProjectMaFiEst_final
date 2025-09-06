const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./utils/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const groupRoutes = require('./routes/groups');
const progressRoutes = require('./routes/progress');
const achievementRoutes = require('./routes/achievements');
const contactRoutes = require('./routes/contacts');
const advisoryRoutes = require('./routes/advisories');
const middleware = require('./utils/middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

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

// Database connection and server start
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
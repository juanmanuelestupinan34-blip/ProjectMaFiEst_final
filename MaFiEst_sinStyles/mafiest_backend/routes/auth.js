const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { tokenExtractor } = require('../utils/middleware');

// Login route
router.post('/login', authController.login);

// Logout route
router.post('/logout', tokenExtractor, authController.logout);

// Register independent user route
router.post('/register', authController.register);

// Token refresh route
router.post('/refresh', authController.refreshToken);

module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { tokenExtractor } = require('../utils/middleware');

// Registro
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

// Logout
router.post('/logout', tokenExtractor, authController.logout);

// Refresh token
router.post('/refresh', tokenExtractor, authController.refresh);

module.exports = router;

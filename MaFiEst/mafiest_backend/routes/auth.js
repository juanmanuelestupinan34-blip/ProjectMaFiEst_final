const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { tokenExtractor } = require('../utils/middleware');

// Ruta para el inicio de sesión
router.post('/login', authController.login);

// Ruta para el registro de independientes
router.post('/register', authController.register);

// Ruta para el cierre de sesión
router.post('/logout', tokenExtractor, authController.logout);

// Ruta para refrescar el token
router.post('/refresh', authController.refreshToken);

module.exports = router;
const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/achievements');

// Obtener todos los logros
router.get('/', achievementsController.getAchievements);

// Registrar un logro para un usuario
router.post('/user', achievementsController.addUserAchievement);

// Obtener logros de un usuario
router.get('/user/:userId', achievementsController.getUserAchievements);

module.exports = router;

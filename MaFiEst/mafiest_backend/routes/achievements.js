const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/achievements');

// Obtener todos los logros
router.get('/', achievementsController.getAllAchievements);

// Obtener un logro por ID
router.get('/:id', achievementsController.getAchievementById);

// Crear un nuevo logro
router.post('/', achievementsController.createAchievement);

// Actualizar un logro por ID
router.put('/:id', achievementsController.updateAchievement);

// Eliminar un logro por ID
router.delete('/:id', achievementsController.deleteAchievement);

module.exports = router;
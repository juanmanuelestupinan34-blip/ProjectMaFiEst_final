const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress');

// Obtener el progreso de un usuario
router.get('/:userId', progressController.getProgress);

// Crear o actualizar el progreso de un usuario
router.post('/', progressController.createOrUpdateProgress);

// Eliminar el progreso de un usuario
router.delete('/:userId', progressController.deleteProgress);

module.exports = router;
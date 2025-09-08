const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress');

// Obtener progreso del usuario autenticado
router.get('/', progressController.getProgress);

// Crear progreso
router.post('/', progressController.createProgress);

// Actualizar progreso
router.put('/:id', progressController.updateProgress);

// Eliminar progreso
router.delete('/:id', progressController.deleteProgress);

module.exports = router;

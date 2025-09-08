const express = require('express');
const router = express.Router();
const advisoryController = require('../controllers/advisories');

// Crear nueva asesoría
router.post('/', advisoryController.createAdvisory);

// Obtener todas las asesorías
router.get('/', advisoryController.getAdvisories);

// Obtener asesoría por ID
router.get('/:id', advisoryController.getAdvisoryById);

// Actualizar asesoría
router.put('/:id', advisoryController.updateAdvisory);

// Eliminar asesoría
router.delete('/:id', advisoryController.deleteAdvisory);

module.exports = router;

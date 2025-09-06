const express = require('express');
const router = express.Router();
const AdvisoryController = require('../controllers/advisories');

// Endpoint para crear una nueva asesoría
router.post('/', AdvisoryController.createAdvisory);

// Endpoint para obtener todas las asesorías
router.get('/', AdvisoryController.getAllAdvisories);

// Endpoint para obtener una asesoría por ID
router.get('/:id', AdvisoryController.getAdvisoryById);

// Endpoint para actualizar una asesoría por ID
router.put('/:id', AdvisoryController.updateAdvisory);

// Endpoint para eliminar una asesoría por ID
router.delete('/:id', AdvisoryController.deleteAdvisory);

module.exports = router;
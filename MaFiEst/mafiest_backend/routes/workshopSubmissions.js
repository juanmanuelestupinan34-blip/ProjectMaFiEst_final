const express = require('express');
const router = express.Router();
const workshopSubmissionController = require('../controllers/workshopSubmissions');
const { tokenExtractor, userExtractor } = require('../utils/middleware');
const { isStudent } = require('../utils/roles');

// Ver envíos de talleres → estudiante ve los suyos, admin podría auditar
router.get('/', tokenExtractor, userExtractor, isStudent, workshopSubmissionController.getWorkshopSubmissions);
router.get('/:id', tokenExtractor, userExtractor, isStudent, workshopSubmissionController.getWorkshopSubmissionById);

// Crear envío de taller → solo estudiantes
router.post('/', tokenExtractor, userExtractor, isStudent, workshopSubmissionController.createWorkshopSubmission);

// Actualizar envío de taller → solo estudiante dueño
router.put('/:id', tokenExtractor, userExtractor, isStudent, workshopSubmissionController.updateWorkshopSubmission);

// Eliminar envío de taller → solo estudiante dueño
router.delete('/:id', tokenExtractor, userExtractor, isStudent, workshopSubmissionController.deleteWorkshopSubmission);

module.exports = router;


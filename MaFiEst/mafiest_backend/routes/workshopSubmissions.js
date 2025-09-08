const express = require('express');
const router = express.Router();
const workshopSubmissionController = require('../controllers/workshopSubmissions');

// CRUD entregas de talleres
router.get('/', workshopSubmissionController.getWorkshopSubmissions);
router.get('/:id', workshopSubmissionController.getWorkshopSubmissionById);
router.post('/', workshopSubmissionController.createWorkshopSubmission);
router.put('/:id', workshopSubmissionController.updateWorkshopSubmission);
router.delete('/:id', workshopSubmissionController.deleteWorkshopSubmission);

module.exports = router;

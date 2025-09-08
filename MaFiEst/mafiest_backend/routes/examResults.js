const express = require('express');
const router = express.Router();
const examResultController = require('../controllers/examResults');

// CRUD resultados de examenes
router.get('/', examResultController.getExamResults);
router.get('/:id', examResultController.getExamResultById);
router.post('/', examResultController.createExamResult);
router.put('/:id', examResultController.updateExamResult);
router.delete('/:id', examResultController.deleteExamResult);

module.exports = router;

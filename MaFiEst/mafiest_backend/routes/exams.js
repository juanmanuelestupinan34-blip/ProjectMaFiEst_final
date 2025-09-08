const express = require('express');
const router = express.Router();
const examController = require('../controllers/exams');

// CRUD examenes
router.get('/', examController.getExams);
router.get('/:id', examController.getExamById);
router.post('/', examController.createExam);
router.put('/:id', examController.updateExam);
router.delete('/:id', examController.deleteExam);

module.exports = router;

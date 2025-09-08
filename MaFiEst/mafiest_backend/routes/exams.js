const express = require('express');
const router = express.Router();
const examController = require('../controllers/exams');
const { tokenExtractor, userExtractor } = require('../utils/middleware');
const { isTeacher } = require('../utils/roles');

// Ver exámenes (todos pueden ver, según el grupo)
router.get('/', tokenExtractor, userExtractor, examController.getExams);
router.get('/:id', tokenExtractor, userExtractor, examController.getExamById);

// Solo docentes pueden crear, actualizar y borrar
router.post('/', tokenExtractor, userExtractor, isTeacher, examController.createExam);
router.put('/:id', tokenExtractor, userExtractor, isTeacher, examController.updateExam);
router.delete('/:id', tokenExtractor, userExtractor, isTeacher, examController.deleteExam);

module.exports = router;

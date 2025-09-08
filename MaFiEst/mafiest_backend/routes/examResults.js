const express = require('express');
const router = express.Router();
const examResultController = require('../controllers/examResults');
const { tokenExtractor, userExtractor } = require('../utils/middleware');
const { isTeacher } = require('../utils/roles');

// Estudiante ve solo sus notas (control en controller)
router.get('/', tokenExtractor, userExtractor, examResultController.getExamResults);
router.get('/:id', tokenExtractor, userExtractor, examResultController.getExamResultById);

// Solo docente califica (crear/actualizar/borrar resultados)
router.post('/', tokenExtractor, userExtractor, isTeacher, examResultController.createExamResult);
router.put('/:id', tokenExtractor, userExtractor, isTeacher, examResultController.updateExamResult);
router.delete('/:id', tokenExtractor, userExtractor, isTeacher, examResultController.deleteExamResult);

module.exports = router;

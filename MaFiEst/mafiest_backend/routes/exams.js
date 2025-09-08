const express = require('express');
const router = express.Router();
const examController = require('../controllers/exams');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Solo docentes pueden crear, actualizar y borrar exámenes
const isTeacher = (req, res, next) => {
  if (!req.user || req.user.role !== 'docente') {
    return res.status(403).json({ error: 'Acceso denegado: solo docentes' });
  }
  next();
};

// Todos pueden ver exámenes (o solo estudiantes, si prefieres)
router.get('/', tokenExtractor, userExtractor, examController.getExams);
router.get('/:id', tokenExtractor, userExtractor, examController.getExamById);

// Solo docentes
router.post('/', tokenExtractor, userExtractor, isTeacher, examController.createExam);
router.put('/:id', tokenExtractor, userExtractor, isTeacher, examController.updateExam);
router.delete('/:id', tokenExtractor, userExtractor, isTeacher, examController.deleteExam);

module.exports = router;

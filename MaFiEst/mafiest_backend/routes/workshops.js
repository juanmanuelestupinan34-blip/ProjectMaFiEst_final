const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshops');
const { tokenExtractor, userExtractor } = require('../utils/middleware');
const { isTeacher } = require('../utils/roles');

// Ver talleres
router.get('/', tokenExtractor, userExtractor, workshopController.getWorkshops);
router.get('/:id', tokenExtractor, userExtractor, workshopController.getWorkshopById);

// Solo docentes pueden crear, actualizar y borrar
router.post('/', tokenExtractor, userExtractor, isTeacher, workshopController.createWorkshop);
router.put('/:id', tokenExtractor, userExtractor, isTeacher, workshopController.updateWorkshop);
router.delete('/:id', tokenExtractor, userExtractor, isTeacher, workshopController.deleteWorkshop);

module.exports = router;

const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshops');

// CRUD talleres
router.get('/', workshopController.getWorkshops);
router.get('/:id', workshopController.getWorkshopById);
router.post('/', workshopController.createWorkshop);
router.put('/:id', workshopController.updateWorkshop);
router.delete('/:id', workshopController.deleteWorkshop);

module.exports = router;

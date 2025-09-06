const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// Endpoint para manejar el formulario de contacto
router.post('/', contactsController.handleContactForm);

module.exports = router;
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// Crear contacto
router.post('/', contactsController.createContact);

// Obtener todos los contactos
router.get('/', contactsController.getContacts);

module.exports = router;

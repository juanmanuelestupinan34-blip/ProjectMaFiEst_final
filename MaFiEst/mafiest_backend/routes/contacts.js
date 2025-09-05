const express = require('express');
const router = express.Router();
const { Contact } = require('../models');

// Endpoint para enviar un formulario de contacto
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = await Contact.create({ name, email, message });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar el formulario de contacto' });
    }
});

// Endpoint para obtener todos los mensajes de contacto (solo para admins)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes de contacto' });
    }
});

module.exports = router;
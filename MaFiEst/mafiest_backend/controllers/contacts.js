const express = require('express');
const router = express.Router();
const { Contact } = require('../models/Contact');

// Endpoint to handle contact form submissions
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = await Contact.create({ name, email, message });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ error: 'Error creating contact entry' });
    }
});

// Endpoint to get all contact entries (optional)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching contacts' });
    }
});

module.exports = router;
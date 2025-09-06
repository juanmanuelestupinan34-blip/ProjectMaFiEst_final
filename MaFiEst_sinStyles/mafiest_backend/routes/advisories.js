const express = require('express');
const router = express.Router();
const { Advisory } = require('../models');

// Endpoint to create a new advisory
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const advisory = await Advisory.create({ name, email, message });
        res.status(201).json(advisory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint to get all advisories
router.get('/', async (req, res) => {
    try {
        const advisories = await Advisory.findAll();
        res.status(200).json(advisories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to get a specific advisory by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const advisory = await Advisory.findByPk(id);
        if (advisory) {
            res.status(200).json(advisory);
        } else {
            res.status(404).json({ error: 'Advisory not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to delete an advisory by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Advisory.destroy({ where: { id } });
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Advisory not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
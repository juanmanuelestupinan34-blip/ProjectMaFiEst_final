const express = require('express');
const router = express.Router();
const { Group } = require('../models');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Create a new academic group
router.post('/', tokenExtractor, userExtractor, async (req, res) => {
    const { name, description } = req.body;
    try {
        const newGroup = await Group.create({ name, description });
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all academic groups
router.get('/', async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific academic group by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const group = await Group.findByPk(id);
        if (group) {
            res.status(200).json(group);
        } else {
            res.status(404).json({ error: 'Group not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an academic group
router.put('/:id', tokenExtractor, userExtractor, async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const [updated] = await Group.update({ name, description }, {
            where: { id }
        });
        if (updated) {
            const updatedGroup = await Group.findByPk(id);
            res.status(200).json(updatedGroup);
        } else {
            res.status(404).json({ error: 'Group not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete an academic group
router.delete('/:id', tokenExtractor, userExtractor, async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Group.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Group not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
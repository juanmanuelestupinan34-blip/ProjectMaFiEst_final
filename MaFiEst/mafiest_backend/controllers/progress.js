const express = require('express');
const { Progress } = require('../models');
const { userExtractor } = require('../utils/middleware');

const router = express.Router();

// Get progress for a user
router.get('/', userExtractor, async (req, res) => {
    try {
        const progress = await Progress.findAll({
            where: { userId: req.user.id }
        });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching progress' });
    }
});

// Update progress for a user
router.put('/:id', userExtractor, async (req, res) => {
    const { id } = req.params;
    const { progress } = req.body;

    try {
        const updatedProgress = await Progress.update({ progress }, {
            where: {
                id,
                userId: req.user.id
            }
        });

        if (updatedProgress[0] === 0) {
            return res.status(404).json({ error: 'Progress not found or not authorized' });
        }

        res.status(200).json({ message: 'Progress updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating progress' });
    }
});

// Add progress for a user
router.post('/', userExtractor, async (req, res) => {
    const { progress } = req.body;

    try {
        const newProgress = await Progress.create({
            userId: req.user.id,
            progress
        });
        res.status(201).json(newProgress);
    } catch (error) {
        res.status(500).json({ error: 'Error creating progress' });
    }
});

// Delete progress for a user
router.delete('/:id', userExtractor, async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Progress.destroy({
            where: {
                id,
                userId: req.user.id
            }
        });

        if (deleted === 0) {
            return res.status(404).json({ error: 'Progress not found or not authorized' });
        }

        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting progress' });
    }
});

module.exports = router;
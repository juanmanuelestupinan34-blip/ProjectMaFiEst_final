const express = require('express');
const { Advisory } = require('../models');
const router = express.Router();

// Crear una nueva asesoría
router.post('/', async (req, res) => {
    try {
        const { userId, message } = req.body;
        const advisory = await Advisory.create({ userId, message });
        res.status(201).json(advisory);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la asesoría' });
    }
});

// Obtener todas las asesorías
router.get('/', async (req, res) => {
    try {
        const advisories = await Advisory.findAll();
        res.status(200).json(advisories);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las asesorías' });
    }
});

// Obtener una asesoría por ID
router.get('/:id', async (req, res) => {
    try {
        const advisory = await Advisory.findByPk(req.params.id);
        if (advisory) {
            res.status(200).json(advisory);
        } else {
            res.status(404).json({ error: 'Asesoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la asesoría' });
    }
});

// Actualizar una asesoría
router.put('/:id', async (req, res) => {
    try {
        const { message } = req.body;
        const advisory = await Advisory.findByPk(req.params.id);
        if (advisory) {
            advisory.message = message;
            await advisory.save();
            res.status(200).json(advisory);
        } else {
            res.status(404).json({ error: 'Asesoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la asesoría' });
    }
});

// Eliminar una asesoría
router.delete('/:id', async (req, res) => {
    try {
        const advisory = await Advisory.findByPk(req.params.id);
        if (advisory) {
            await advisory.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Asesoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la asesoría' });
    }
});

module.exports = router;
const { Advisory } = require('../models/Advisory');

// Obtener todas las asesorías
exports.getAdvisories = async (req, res) => {
    try {
        const advisories = await Advisory.findAll();
        res.status(200).json(advisories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener asesorías', error });
    }
};

// Crear una nueva asesoría
exports.createAdvisory = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newAdvisory = await Advisory.create({ name, email, message });
        res.status(201).json(newAdvisory);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear asesoría', error });
    }
};
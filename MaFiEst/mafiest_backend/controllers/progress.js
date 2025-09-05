const { Progress } = require('../models/Progress');
const { User } = require('../models/User');

// Registrar progreso de un usuario
exports.registerProgress = async (req, res) => {
    const { userId, area, progress } = req.body;

    try {
        const newProgress = await Progress.create({ userId, area, progress });
        res.status(201).json(newProgress);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el progreso', error });
    }
};

// Consultar progreso de un usuario
exports.getProgress = async (req, res) => {
    const { userId } = req.params;

    try {
        const progressData = await Progress.findAll({ where: { userId } });
        res.status(200).json(progressData);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el progreso', error });
    }
};

// Actualizar progreso de un usuario
exports.updateProgress = async (req, res) => {
    const { userId, area } = req.params;
    const { progress } = req.body;

    try {
        const updatedProgress = await Progress.update({ progress }, { where: { userId, area } });
        res.status(200).json(updatedProgress);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el progreso', error });
    }
};

// Eliminar progreso de un usuario
exports.deleteProgress = async (req, res) => {
    const { userId, area } = req.params;

    try {
        await Progress.destroy({ where: { userId, area } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el progreso', error });
    }
};
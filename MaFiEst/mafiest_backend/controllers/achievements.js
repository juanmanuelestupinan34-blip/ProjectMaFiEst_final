const { Achievement, UserAchievement } = require('../models');
const { Op } = require('sequelize');

// Obtener todos los logros
exports.getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.findAll();
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener logros' });
    }
};

// Registrar un logro para un usuario
exports.addUserAchievement = async (req, res) => {
    const { userId, achievementId } = req.body;

    try {
        const userAchievement = await UserAchievement.create({ userId, achievementId });
        res.status(201).json(userAchievement);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar logro' });
    }
};

// Obtener logros de un usuario
exports.getUserAchievements = async (req, res) => {
    const { userId } = req.params;

    try {
        const userAchievements = await UserAchievement.findAll({
            where: { userId },
            include: [{ model: Achievement }]
        });
        res.status(200).json(userAchievements);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener logros del usuario' });
    }
};
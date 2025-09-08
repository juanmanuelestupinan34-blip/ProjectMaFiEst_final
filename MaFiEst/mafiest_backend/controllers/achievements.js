const { Achievement, UserAchievement } = require("../models");

const achievementController = {
  // Obtener todos los logros
  async getAchievements(req, res) {
    try {
      const achievements = await Achievement.findAll();
      res.status(200).json(achievements);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener logros" });
    }
  },

  // Registrar un logro para un usuario
  async addUserAchievement(req, res) {
    try {
      const { userId, achievementId } = req.body;
      const userAchievement = await UserAchievement.create({ userId, achievementId });
      res.status(201).json(userAchievement);
    } catch (error) {
      res.status(500).json({ error: "Error al registrar logro" });
    }
  },

  // Obtener logros de un usuario
  async getUserAchievements(req, res) {
    try {
      const { userId } = req.params;
      const userAchievements = await UserAchievement.findAll({
        where: { userId },
        include: [{ model: Achievement }]
      });
      res.status(200).json(userAchievements);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener logros del usuario" });
    }
  }
};

module.exports = achievementController;

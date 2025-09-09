const Activity = require("../models/Activity");

const activityController = {
  async getActivities(req, res) {
    try {
      // Todos los roles pueden ver todas las actividades
      const activities = await Activity.findAll();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener actividades" });
    }
  },

  async getActivityById(req, res) {
    try {
      const activity = await Activity.findByPk(req.params.id);
      if (!activity) return res.status(404).json({ error: "Actividad no encontrada" });
      res.json(activity);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la actividad" });
    }
  },

  async createActivity(req, res) {
    try {
      if (req.user.role !== "docente" && req.user.role !== "administrador") {
        return res.status(403).json({ error: "No autorizado para crear actividades" });
      }

      const activity = await Activity.create(req.body);
      res.status(201).json(activity);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la actividad" });
    }
  },

  async updateActivity(req, res) {
    try {
      if (req.user.role !== "docente" && req.user.role !== "administrador") {
        return res.status(403).json({ error: "No autorizado para actualizar actividades" });
      }

      const activity = await Activity.findByPk(req.params.id);
      if (!activity) return res.status(404).json({ error: "Actividad no encontrada" });

      await activity.update(req.body);
      res.json(activity);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la actividad" });
    }
  },

  async deleteActivity(req, res) {
    try {
      if (req.user.role !== "docente" && req.user.role !== "administrador") {
        return res.status(403).json({ error: "No autorizado para eliminar actividades" });
      }

      const activity = await Activity.findByPk(req.params.id);
      if (!activity) return res.status(404).json({ error: "Actividad no encontrada" });

      await activity.destroy();
      res.json({ message: "Actividad eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la actividad" });
    }
  },
};

module.exports = activityController;

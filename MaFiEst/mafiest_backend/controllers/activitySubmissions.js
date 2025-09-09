const ActivitySubmission = require("../models/ActivitySubmission");

const activitySubmissionController = {
  async getActivitySubmissions(req, res) {
    try {
      let submissions;
      if (req.user.role === "estudiante") {
        submissions = await ActivitySubmission.findAll({ where: { studentId: req.user.id } });
      } else if (req.user.role === "docente" || req.user.role === "administrador") {
        submissions = await ActivitySubmission.findAll();
      } else {
        return res.status(403).json({ error: "Acceso denegado" });
      }
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener entregas de actividades" });
    }
  },

  async getActivitySubmissionById(req, res) {
    try {
      const submission = await ActivitySubmission.findByPk(req.params.id);
      if (!submission) return res.status(404).json({ error: "Entrega no encontrada" });

      if (req.user.role === "estudiante" && submission.studentId !== req.user.id) {
        return res.status(403).json({ error: "No autorizado para ver esta entrega" });
      }

      res.json(submission);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la entrega" });
    }
  },

  async createActivitySubmission(req, res) {
    try {
      if (req.user.role !== "estudiante") {
        return res.status(403).json({ error: "Solo estudiantes pueden enviar entregas" });
      }

      const submission = await ActivitySubmission.create({ ...req.body, studentId: req.user.id });
      res.status(201).json(submission);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la entrega" });
    }
  },

  async updateActivitySubmission(req, res) {
    try {
      const submission = await ActivitySubmission.findByPk(req.params.id);
      if (!submission) return res.status(404).json({ error: "Entrega no encontrada" });

      if (req.user.role !== "estudiante" || submission.studentId !== req.user.id) {
        return res.status(403).json({ error: "No autorizado para actualizar esta entrega" });
      }

      await submission.update(req.body);
      res.json(submission);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la entrega" });
    }
  },

  async deleteActivitySubmission(req, res) {
    try {
      const submission = await ActivitySubmission.findByPk(req.params.id);
      if (!submission) return res.status(404).json({ error: "Entrega no encontrada" });

      if (req.user.role !== "estudiante" || submission.studentId !== req.user.id) {
        return res.status(403).json({ error: "No autorizado para eliminar esta entrega" });
      }

      await submission.destroy();
      res.json({ message: "Entrega eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la entrega" });
    }
  },
};

module.exports = activitySubmissionController;

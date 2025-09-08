const WorkshopSubmission = require("../models/WorkshopSubmission");

const workshopSubmissionController = {
  async getWorkshopSubmissions(req, res) {
    try {
      const submissions = await WorkshopSubmission.findAll();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener entregas de talleres" });
    }
  },

  async getWorkshopSubmissionById(req, res) {
    try {
      const submission = await WorkshopSubmission.findByPk(req.params.id);
      if (!submission) return res.status(404).json({ error: "Entrega no encontrada" });
      res.json(submission);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la entrega" });
    }
  },

  async createWorkshopSubmission(req, res) {
    try {
      const submission = await WorkshopSubmission.create(req.body);
      res.status(201).json(submission);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la entrega" });
    }
  },

  async updateWorkshopSubmission(req, res) {
    try {
      const submission = await WorkshopSubmission.findByPk(req.params.id);
      if (!submission) return res.status(404).json({ error: "Entrega no encontrada" });
      await submission.update(req.body);
      res.json(submission);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la entrega" });
    }
  },

  async deleteWorkshopSubmission(req, res) {
    try {
      const submission = await WorkshopSubmission.findByPk(req.params.id);
      if (!submission) return res.status(404).json({ error: "Entrega no encontrada" });
      await submission.destroy();
      res.json({ message: "Entrega eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la entrega" });
    }
  },
};

module.exports = workshopSubmissionController;

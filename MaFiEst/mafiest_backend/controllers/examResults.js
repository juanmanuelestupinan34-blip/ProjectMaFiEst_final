const ExamResult = require("../models/ExamResult");

const examResultController = {
  async getExamResults(req, res) {
    try {
      const results = await ExamResult.findAll();
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener resultados de exámenes" });
    }
  },

  async getExamResultById(req, res) {
    try {
      const result = await ExamResult.findByPk(req.params.id);
      if (!result) return res.status(404).json({ error: "Resultado no encontrado" });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el resultado" });
    }
  },

  async createExamResult(req, res) {
    try {
      const result = await ExamResult.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el resultado" });
    }
  },

  async updateExamResult(req, res) {
    try {
      const result = await ExamResult.findByPk(req.params.id);
      if (!result) return res.status(404).json({ error: "Resultado no encontrado" });
      await result.update(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el resultado" });
    }
  },

  async deleteExamResult(req, res) {
    try {
      const result = await ExamResult.findByPk(req.params.id);
      if (!result) return res.status(404).json({ error: "Resultado no encontrado" });
      await result.destroy();
      res.json({ message: "Resultado eliminado" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el resultado" });
    }
  },
};

module.exports = examResultController;

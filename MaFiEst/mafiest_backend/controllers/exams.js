const Exam = require("../models/Exam");

const examController = {
  async getExams(req, res) {
    try {
      const exams = await Exam.findAll();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener exámenes" });
    }
  },

  async getExamById(req, res) {
    try {
      const exam = await Exam.findByPk(req.params.id);
      if (!exam) return res.status(404).json({ error: "Examen no encontrado" });
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el examen" });
    }
  },

  async createExam(req, res) {
    try {
      const exam = await Exam.create(req.body);
      res.status(201).json(exam);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el examen" });
    }
  },

  async updateExam(req, res) {
    try {
      const exam = await Exam.findByPk(req.params.id);
      if (!exam) return res.status(404).json({ error: "Examen no encontrado" });
      await exam.update(req.body);
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el examen" });
    }
  },

  async deleteExam(req, res) {
    try {
      const exam = await Exam.findByPk(req.params.id);
      if (!exam) return res.status(404).json({ error: "Examen no encontrado" });
      await exam.destroy();
      res.json({ message: "Examen eliminado" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el examen" });
    }
  },
};

module.exports = examController;

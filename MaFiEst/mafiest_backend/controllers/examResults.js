const ExamResult = require("../models/ExamResult");

const examResultController = {
  async getExamResults(req, res) {
    try {
      if (req.user.role === "estudiante") {
        const results = await ExamResult.findAll({ where: { userId: req.user.id } });
        return res.json(results);
      }

      if (req.user.role === "docente" || req.user.role === "administrador") {
        const results = await ExamResult.findAll();
        return res.json(results);
      }

      return res.status(403).json({ error: "Acceso denegado" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener resultados de exámenes" });
    }
  },

  async getExamResultById(req, res) {
    try {
      const result = await ExamResult.findByPk(req.params.id);
      if (!result) return res.status(404).json({ error: "Resultado no encontrado" });

      if (req.user.role === "estudiante" && result.userId !== req.user.id) {
        return res.status(403).json({ error: "No autorizado para ver esta nota" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el resultado" });
    }
  },

  // Solo docentes califican (crean notas)
  async createExamResult(req, res) {
    try {
      if (req.user.role !== "docente") {
        return res.status(403).json({ error: "Solo docentes pueden registrar notas" });
      }

      const result = await ExamResult.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la nota" });
    }
  },

  // Solo docentes actualizan la nota
  async updateExamResult(req, res) {
    try {
      if (req.user.role !== "docente") {
        return res.status(403).json({ error: "Solo docentes pueden actualizar notas" });
      }

      const result = await ExamResult.findByPk(req.params.id);
      if (!result) return res.status(404).json({ error: "Nota no encontrada" });

      await result.update(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la nota" });
    }
  },

  // Solo docentes borran una nota
  async deleteExamResult(req, res) {
    try {
      if (req.user.role !== "docente") {
        return res.status(403).json({ error: "Solo docentes pueden eliminar notas" });
      }

      const result = await ExamResult.findByPk(req.params.id);
      if (!result) return res.status(404).json({ error: "Nota no encontrada" });

      await result.destroy();
      res.json({ message: "Nota eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la nota" });
    }
  },
};

module.exports = examResultController;

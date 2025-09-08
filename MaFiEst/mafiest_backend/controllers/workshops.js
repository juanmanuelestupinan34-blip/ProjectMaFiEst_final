const Workshop = require("../models/Workshop");

const workshopController = {
  async getWorkshops(req, res) {
    try {
      const workshops = await Workshop.findAll();
      res.json(workshops);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener talleres" });
    }
  },

  async getWorkshopById(req, res) {
    try {
      const workshop = await Workshop.findByPk(req.params.id);
      if (!workshop) return res.status(404).json({ error: "Taller no encontrado" });
      res.json(workshop);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el taller" });
    }
  },

  async createWorkshop(req, res) {
    try {
      const workshop = await Workshop.create(req.body);
      res.status(201).json(workshop);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el taller" });
    }
  },

  async updateWorkshop(req, res) {
    try {
      const workshop = await Workshop.findByPk(req.params.id);
      if (!workshop) return res.status(404).json({ error: "Taller no encontrado" });
      await workshop.update(req.body);
      res.json(workshop);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el taller" });
    }
  },

  async deleteWorkshop(req, res) {
    try {
      const workshop = await Workshop.findByPk(req.params.id);
      if (!workshop) return res.status(404).json({ error: "Taller no encontrado" });
      await workshop.destroy();
      res.json({ message: "Taller eliminado" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el taller" });
    }
  },
};

module.exports = workshopController;

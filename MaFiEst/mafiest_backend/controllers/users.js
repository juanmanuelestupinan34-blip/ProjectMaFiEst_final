const { Group } = require("../models");

const groupController = {
  // Crear un grupo
  async createGroup(req, res) {
    try {
      const { name } = req.body;
      const newGroup = await Group.create({ name });
      res.status(201).json(newGroup);
    } catch (error) {
      res.status(500).json({ error: "Error creando el grupo" });
    }
  },

  // Obtener todos los grupos
  async getAllGroups(req, res) {
    try {
      const groups = await Group.findAll();
      res.status(200).json(groups);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo los grupos" });
    }
  },

  // Obtener un grupo por ID
  async getGroupById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) {
        return res.status(404).json({ error: "Grupo no encontrado" });
      }
      res.status(200).json(group);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo el grupo" });
    }
  },

  // Actualizar un grupo
  async updateGroup(req, res) {
    try {
      const { name } = req.body;
      const group = await Group.findByPk(req.params.id);
      if (!group) {
        return res.status(404).json({ error: "Grupo no encontrado" });
      }
      group.name = name;
      await group.save();
      res.status(200).json(group);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el grupo" });
    }
  },

  // Eliminar un grupo
  async deleteGroup(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) {
        return res.status(404).json({ error: "Grupo no encontrado" });
      }
      await group.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error eliminando el grupo" });
    }
  },
};

module.exports = groupController;

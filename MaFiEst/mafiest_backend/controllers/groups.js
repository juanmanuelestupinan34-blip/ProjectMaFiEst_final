const { Group, User } = require("../models");

const groupController = {
  // Crear un grupo
  async createGroup(req, res) {
    try {
      const group = await Group.create({
        name: req.body.name,
      });
      res.status(201).json(group);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Obtener todos los grupos
  async getAllGroups(req, res) {
    try {
      const groups = await Group.findAll({
        include: [
          {
            model: User,
            as: "estudiantes",
            attributes: ["id", "name"],
          },
          {
            model: User,
            as: "docentes",
            attributes: ["id", "name"],
          },
        ],
      });
      res.json(groups);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Obtener un grupo por ID
  async getGroupById(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) {
        return res.status(404).json({ message: "Grupo no encontrado" });
      }
      res.status(200).json(group);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Actualizar un grupo
  async updateGroup(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) {
        return res.status(404).json({ message: "Grupo no encontrado" });
      }
      await group.update({ name: req.body.name });
      res.json(group);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Eliminar un grupo
  async deleteGroup(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);
      if (!group) {
        return res.status(404).json({ message: "Grupo no encontrado" });
      }
      await group.destroy();
      res.json({ message: "Grupo eliminado exitosamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Añadir miembro al grupo
  async addMember(req, res) {
    try {
      const { grupoId, userId, role } = req.body;
      const group = await Group.findByPk(grupoId);
      const user = await User.findByPk(userId);

      if (!group || !user) {
        return res.status(404).json({ message: "Grupo o usuario no encontrado" });
      }

      if (role === "estudiante") {
        await group.addEstudiante(user);
      } else if (role === "docente") {
        await group.addDocente(user);
      }

      res.json({ message: "Miembro añadido exitosamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Obtener miembros de un grupo
  async getGroupMembers(req, res) {
    try {
      const group = await Group.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: "estudiantes",
            attributes: ["id", "name"],
          },
          {
            model: User,
            as: "docentes",
            attributes: ["id", "name"],
          },
        ],
      });

      if (!group) {
        return res.status(404).json({ message: "Grupo no encontrado" });
      }

      res.json({
        estudiantes: group.estudiantes,
        docentes: group.docentes,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = groupController;

const Contact = require("../models/Contact");

const contactController = {
  // Crear un contacto
  async createContact(req, res) {
    try {
      const { name, email, message } = req.body;
      const newContact = await Contact.create({ name, email, message });
      res.status(201).json(newContact);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el contacto" });
    }
  },

  // Obtener todos los contactos
  async getContacts(req, res) {
    try {
      const contacts = await Contact.findAll();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los contactos" });
    }
  }
};

module.exports = contactController;

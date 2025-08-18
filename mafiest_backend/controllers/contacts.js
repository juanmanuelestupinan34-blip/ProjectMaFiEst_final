const contactsRouter = require("express").Router()  // Cambiado a plural
const Contact = require("../models/contact")

// Obtener todos los mensajes de contacto
contactsRouter.get("/", async (request, response) => {
  const messages = await Contact.find({})
  response.json(messages)
})

// Crear un nuevo mensaje de contacto
contactsRouter.post("/", async (request, response, next) => {
  try {
    const { name, email, phone, subject, message } = request.body

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    })

    await contact.save()
    response.status(201).json({ message: "Mensaje enviado correctamente" })

  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({ error: error.message })
    }
    next(error)
  }
})

// Eliminar un mensaje de contacto por ID
contactsRouter.delete("/:id", async (request, response, next) => {
  try {
    const message = await Contact.findById(request.params.id)
    if (!message) {
      return response.status(404).json({ error: "message not found" })
    }

    await Contact.findByIdAndDelete(request.params.id)
    response.status(204).end()

  } catch (error) {
    next(error)
  }
})

module.exports = contactsRouter

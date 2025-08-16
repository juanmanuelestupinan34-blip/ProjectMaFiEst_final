const contactRouter = require("express").Router()
const Contact = require("../models/contact")

contactRouter.get("/", async (request, response) => {
  const messages = await Contact.find({})
  response.json(messages)
})

contactRouter.post("/", async (request, response, next) => {
  try {
    const { name, email, phone, subject, message } = request.body

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    })

    const savedMessage = await contact.save()
    response.status(201).json(savedMessage)

  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({ error: error.message })
    }
    next(error)
  }
})

contactRouter.delete("/:id", async (request, response, next) => {
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

module.exports = contactRouter

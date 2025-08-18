const advisoryRouter = require("express").Router()
const Advisory = require("../models/advisory")

// Obtener todas las solicitudes de asesoría
advisoryRouter.get("/", async (request, response) => {
  const advisories = await Advisory.find({})
  response.json(advisories)
})

// Crear una nueva solicitud de asesoría
advisoryRouter.post("/", async (request, response, next) => {
  try {
    const { name, email, phone, topic, description, preferredDate } = request.body

    const advisory = new Advisory({
      name,
      email,
      phone,
      topic,
      description,
      preferredDate
    })

    await advisory.save()
    response.status(201).json({ message: "Solicitud de asesoría enviada correctamente" })

  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({ error: error.message })
    }
    next(error)
  }
})

// Eliminar una solicitud de asesoría por ID
advisoryRouter.delete("/:id", async (request, response, next) => {
  try {
    const advisory = await Advisory.findById(request.params.id)
    if (!advisory) {
      return response.status(404).json({ error: "advisory not found" })
    }

    await Advisory.findByIdAndDelete(request.params.id)
    response.status(204).end()

  } catch (error) {
    next(error)
  }
})

module.exports = advisoryRouter

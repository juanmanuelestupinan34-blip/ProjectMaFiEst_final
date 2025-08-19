const mongoose = require("mongoose")

const advisorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    minlength: [5, "El correo debe tener al menos 5 caracteres"],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      "Por favor, proporciona un correo válido",
    ],
  },
  phone: {
    type: String,
    required: [true, "El número de teléfono es obligatorio"],
    trim: true,
    match: [
      /^[0-9+\-()\s]*$/,
      "El teléfono solo puede contener números y caracteres válidos (+, -, (, ))",
    ],
  },
  topic: {
    type: String,
    required: [true, "El tema de la asesoría es obligatorio"],
    maxlength: [150, "El tema no puede tener más de 150 caracteres"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "La descripción de la asesoría es obligatoria"],
    minlength: [20, "La descripción debe tener al menos 20 caracteres"],
    maxlength: [2000, "La descripción no puede superar los 2000 caracteres"],
    trim: true,
  },
  preferredDate: {
    type: Date,
    required: false,
  },
}, {
  timestamps: true,
})

advisorySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Advisory = mongoose.model("Advisory", advisorySchema)

module.exports = Advisory

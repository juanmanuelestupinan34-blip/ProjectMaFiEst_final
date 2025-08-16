const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    minlength: [5, 'El correo debe tener al menos 5 caracteres'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      'Por favor, proporciona un correo válido'
    ]
  },
  phone: {
    type: String,
    required: [true, 'El número de teléfono es obligatorio'],
    trim: true,
    match: [
      /^[0-9+\-()\s]*$/,
      'El teléfono solo puede contener números y caracteres válidos (+, -, (, ))'
    ]
  },
  subject: {
    type: String,
    trim: true,
    maxlength: [100, 'El asunto no puede tener más de 100 caracteres']
  },
  message: {
    type: String,
    required: [true, 'El mensaje es obligatorio'],
    minlength: [10, 'El mensaje debe tener al menos 10 caracteres'],
    maxlength: [1000, 'El mensaje no puede superar los 1000 caracteres'],
    trim: true
  }
}, {
  timestamps: true
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact

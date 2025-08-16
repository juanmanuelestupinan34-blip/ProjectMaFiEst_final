const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio'],
    minlength: [3, 'El nombre de usuario debe tener al menos 3 caracteres'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'El nombre completo es obligatorio'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    minlength: [5, 'El correo debe tener al menos 5 caracteres'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      'Por favor, proporciona un correo válido'
    ]
  },
  rol: {
    type: String,
    required: [true, 'El rol del integrante es obligatorio'],
    trim: true
  },
  passwordHash: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [8, 'La contraseña debe tener al menos 8 caracteres']
  }
}, {
  timestamps: true 
})


userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User

const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const { userExtractor } = require('../utils/middleware')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

usersRouter.post('/', async (request, response, next) => {
  try {
    const { username, name, email, password } = request.body
    const usersCount = await User.countDocuments({})

    if (!password || password.length < 8) {
      return response.status(400).json({
        error: 'La contraseña debe tener al menos 8 caracteres'
      })
    }

    let rol = 'administrador'

    if (usersCount > 0) {
      // Solo si ya hay usuarios, pedimos token y validamos administrador
      await userExtractor(request, response, () => {})
      const authUser = request.user

      if (!authUser || authUser.rol !== 'administrador') {
        return response.status(403).json({ error: 'Acceso denegado: solo el administrador puede crear usuarios' })
      }

      rol = request.body.rol || 'usuario' // rol por defecto para nuevos usuarios
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      username,
      name,
      email,
      rol,
      passwordHash,
    })

    const savedUser = await user.save()
    response.status(201).json(savedUser)

  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return response.status(400).json({ error: 'El usuario, correo o nombre ya está registrado' })
    }
    if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
    next(error)
  }
})

usersRouter.delete('/:id', userExtractor, async (request, response, next) => {
  try {
    const authUser = request.user
    const user = await User.findById(request.params.id)
    if (!user) {
      return response.status(404).json({ error: 'user not found' })
    }

    if (!authUser || authUser.rol !== 'administrador') {
      return response.status(403).json({ error: 'Acción denegada: solo el administrador puede eliminar empleados' })
    }

    await User.findByIdAndDelete(request.params.id)
    response.status(204).end()

  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter

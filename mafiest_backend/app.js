const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const contactsRouter = require('./controllers/contacts')  
const advisoriesRouter = require('./controllers/advisories') 
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const { userConnection, contactConnection, advisoryConnection } = require('./utils/db')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

// Conectar a la base de usuarios
userConnection.once('open', () => {
  logger.info(userConnection, 'Conexión establecida con la base de usuarios')
})
userConnection.on('error', (error) => {
  logger.error(userConnection, 'Error en la conexión de usuarios:', error)
})

// Conectar a la base de contactos
contactConnection.once('open', () => {
  logger.info(contactConnection, 'Conexión establecida con la base de contactanos')
})
contactConnection.on('error', (error) => {
  logger.error(contactConnection, 'Error en la conexión de contactanos:', error)
})

// Conectar a la base de asesorias
advisoryConnection.once('open', () => {
  logger.info(advisoryConnection, 'Conexión establecida con la base de asesorias')
})
advisoryConnection.on('error', (error) => {
  logger.error(advisoryConnection, 'Error en la conexión de asesorias:', error)
})

// Rutas
app.use('/api/users', usersRouter) 
app.use('/api/login', loginRouter) 
app.use('/api/contacts', contactsRouter)   
app.use('/api/advisories', advisoriesRouter) 

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

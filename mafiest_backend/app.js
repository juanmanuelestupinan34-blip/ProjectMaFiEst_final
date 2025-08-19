const express = require("express")
const cors = require("cors")
const config = require("./utils/config")
const connectDB = require("./utils/db")

const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
const contactsRouter = require("./controllers/contacts")
const advisoriesRouter = require("./controllers/advisories")
const middleware = require("./utils/middleware")
const logger = require("./utils/logger")

const app = express()

// Conexión a la base de datos
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

// Rutas
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)
app.use("/api/contacts", contactsRouter)
app.use("/api/advisories", advisoriesRouter)

// Manejo de errores
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

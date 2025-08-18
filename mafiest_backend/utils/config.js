require('dotenv').config()

const PORT = process.env.PORT
const SECRET = process.env.SECRET

// Base de datos de usuarios
const MONGO_URI_USERS = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGO_URI_USERS
  : process.env.MONGO_URI_USERS

// Base de datos de contactos
const MONGO_URI_CONTACT = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGO_URI_CONTACT
  : process.env.MONGO_URI_CONTACT

// Base de datos de asesorías 
const MONGO_URI_ADVISORY = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGO_URI_ADVISORY
  : process.env.MONGO_URI_ADVISORY

module.exports = {
  PORT,
  SECRET,
  MONGO_URI_USERS,
  MONGO_URI_CONTACT,
  MONGO_URI_ADVISORY
}

require('dotenv').config()

const PORT = process.env.PORT
const SECRET = process.env.SECRET

// Solo UNA URI (la base general)
const MONGO_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGO_URI
  : process.env.MONGO_URI

module.exports = {
  PORT,
  SECRET,
  MONGO_URI
}

const mongoose = require("mongoose")
const { MONGO_URI } = require("./config")
const logger = require("./logger")

mongoose.set("strictQuery", false)

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    logger.info("✅ Conexión establecida con MongoDB")
  } catch (error) {
    logger.error("❌ Error conectando a MongoDB:", error.message)
    process.exit(1)
  }
}

module.exports = connectDB

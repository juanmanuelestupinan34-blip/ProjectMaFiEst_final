const mongoose = require("mongoose");

const userConnection = mongoose.createConnection(process.env.MONGO_URI_USERS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactConnection = mongoose.createConnection(process.env.MONGO_URI_CONTACT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { userConnection, contactConnection };

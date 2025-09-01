const express = require("express");
const router = express.Router();
const { authenticate } = require("../utils/authMiddleware");
const { getUsers, createUser, deleteUser } = require("../controllers/users");

// Solo admins pueden ver y gestionar usuarios
router.get("/", authenticate, getUsers);
router.post("/", authenticate, createUser);
router.delete("/:id", authenticate, deleteUser);

module.exports = router;


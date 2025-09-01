const express = require("express");
const router = express.Router();
const { authenticate, authorizeRole } = require("../utils/authMiddleware");
const { getUsers, createUser, deleteUser } = require("../controllers/users");

// solo admins pueden gestionar usuarios
router.get("/", authenticate, authorizeRole(["admin"]), getUsers);
router.post("/", authenticate, authorizeRole(["admin"]), createUser);
router.delete("/:id", authenticate, authorizeRole(["admin"]), deleteUser);

module.exports = router;

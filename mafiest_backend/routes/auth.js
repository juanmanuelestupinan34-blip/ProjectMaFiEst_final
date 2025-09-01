const express = require("express");
const router = express.Router();
const { registerIndependent, login, refresh, logout } = require("../controllers/auth");

// Registro de usuarios independientes
router.post("/register", registerIndependent);

// Login y manejo de tokens
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

module.exports = router;

const express = require("express");
const router = express.Router();
const { authenticate } = require("../utils/authMiddleware");
const { getProgress, updateProgress } = require("../controllers/progress");

// Progreso de cursos
router.get("/", authenticate, getProgress);
router.put("/", authenticate, updateProgress);

module.exports = router;

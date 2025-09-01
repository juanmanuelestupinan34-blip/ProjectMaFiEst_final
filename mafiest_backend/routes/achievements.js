const express = require("express");
const router = express.Router();
const { authenticate } = require("../utils/authMiddleware");
const { getAchievements, addAchievement } = require("../controllers/achievements");

// Logros de usuario
router.get("/", authenticate, getAchievements);
router.post("/", authenticate, addAchievement);

module.exports = router;

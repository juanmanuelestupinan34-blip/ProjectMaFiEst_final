const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/achievements');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Get all achievements for a user
router.get('/', tokenExtractor, userExtractor, achievementsController.getUserAchievements);

// Create a new achievement
router.post('/', tokenExtractor, userExtractor, achievementsController.createAchievement);

// Get a specific achievement by ID
router.get('/:id', tokenExtractor, userExtractor, achievementsController.getAchievementById);

// Update an achievement by ID
router.put('/:id', tokenExtractor, userExtractor, achievementsController.updateAchievement);

// Delete an achievement by ID
router.delete('/:id', tokenExtractor, userExtractor, achievementsController.deleteAchievement);

module.exports = router;
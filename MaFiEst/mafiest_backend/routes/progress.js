const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Get progress for a user
router.get('/:userId', tokenExtractor, userExtractor, progressController.getProgress);

// Create or update progress for a user
router.post('/', tokenExtractor, userExtractor, progressController.createOrUpdateProgress);

// Get all progress records
router.get('/', tokenExtractor, userExtractor, progressController.getAllProgress);

module.exports = router;
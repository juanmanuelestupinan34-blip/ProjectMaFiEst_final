const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Middleware to protect routes
router.use(tokenExtractor);

// Get all users
router.get('/', userExtractor, UserController.getAllUsers);

// Get user by ID
router.get('/:id', userExtractor, UserController.getUserById);

// Create a new user
router.post('/', userExtractor, UserController.createUser);

// Update user by ID
router.put('/:id', userExtractor, UserController.updateUser);

// Delete user by ID
router.delete('/:id', userExtractor, UserController.deleteUser);

module.exports = router;
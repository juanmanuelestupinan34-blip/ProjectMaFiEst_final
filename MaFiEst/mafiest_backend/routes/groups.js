const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups');

// Create a new group
router.post('/', groupsController.createGroup);

// Get all groups
router.get('/', groupsController.getAllGroups);

// Get a group by ID
router.get('/:id', groupsController.getGroupById);

// Update a group by ID
router.put('/:id', groupsController.updateGroup);

// Delete a group by ID
router.delete('/:id', groupsController.deleteGroup);

module.exports = router;
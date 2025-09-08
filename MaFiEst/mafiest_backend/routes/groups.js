const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups');
const { tokenExtractor, userExtractor } = require('../utils/middleware');
const { isAdmin } = require('../utils/roles');

// CRUD de grupos → solo admin
router.post('/', tokenExtractor, userExtractor, isAdmin, groupsController.createGroup);
router.get('/', tokenExtractor, userExtractor, isAdmin, groupsController.getAllGroups);
router.get('/:id', tokenExtractor, userExtractor, isAdmin, groupsController.getGroupById);
router.put('/:id', tokenExtractor, userExtractor, isAdmin, groupsController.updateGroup);
router.delete('/:id', tokenExtractor, userExtractor, isAdmin, groupsController.deleteGroup);

module.exports = router;

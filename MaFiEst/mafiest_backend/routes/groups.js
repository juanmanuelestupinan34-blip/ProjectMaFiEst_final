const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups');
const { tokenExtractor, userExtractor, isAdmin } = require('../utils/middleware');

// Crear un grupo (solo admin)
router.post('/', tokenExtractor, userExtractor, isAdmin, groupsController.createGroup);

// Obtener todos los grupos (admin puede ver todos, pero si quieres también docentes)
router.get('/', tokenExtractor, userExtractor, isAdmin, groupsController.getAllGroups);

// Obtener un grupo por ID
router.get('/:id', tokenExtractor, userExtractor, isAdmin, groupsController.getGroupById);

// Actualizar un grupo (solo admin)
router.put('/:id', tokenExtractor, userExtractor, isAdmin, groupsController.updateGroup);

// Eliminar un grupo (solo admin)
router.delete('/:id', tokenExtractor, userExtractor, isAdmin, groupsController.deleteGroup);

module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { tokenExtractor, userExtractor } = require('../utils/middleware');
const { isAdmin } = require('../utils/roles');

// Obtener todos los usuarios (solo admin)
router.get('/', tokenExtractor, userExtractor, isAdmin, userController.getAllUsers);

// Obtener usuario por ID (usuario autenticado o admin)
router.get('/:id', tokenExtractor, userExtractor, userController.getUserById);

// Crear un nuevo usuario (solo admin, ya que independientes se registran en /auth/register)
router.post('/', tokenExtractor, userExtractor, isAdmin, userController.createUser);

// Actualizar usuario (puede hacerlo el mismo usuario o admin)
router.put('/:id', tokenExtractor, userExtractor, userController.updateUser);

// Eliminar usuario (solo admin)
router.delete('/:id', tokenExtractor, userExtractor, isAdmin, userController.deleteUser);

module.exports = router;

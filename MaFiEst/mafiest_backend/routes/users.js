const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Obtener todos los usuarios (solo admin)
router.get('/', tokenExtractor, userExtractor, UserController.getAllUsers);

// Obtener usuario por ID (usuario autenticado o admin)
router.get('/:id', tokenExtractor, userExtractor, UserController.getUserById);

// Crear un nuevo usuario (generalmente no necesario porque ya existe /auth/register)
router.post('/', tokenExtractor, userExtractor, UserController.createUser);

// Actualizar usuario por ID
router.put('/:id', tokenExtractor, userExtractor, UserController.updateUser);

// Eliminar usuario por ID
router.delete('/:id', tokenExtractor, userExtractor, UserController.deleteUser);

module.exports = router;

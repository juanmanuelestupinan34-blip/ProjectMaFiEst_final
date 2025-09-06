const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Rutas para la gestión de usuarios
router.get('/', tokenExtractor, userExtractor, UserController.getAllUsers); // Obtener todos los usuarios
router.get('/:id', tokenExtractor, userExtractor, UserController.getUserById); // Obtener usuario por ID
router.post('/', tokenExtractor, userExtractor, UserController.createUser); // Crear un nuevo usuario
router.put('/:id', tokenExtractor, userExtractor, UserController.updateUser); // Actualizar usuario por ID
router.delete('/:id', tokenExtractor, userExtractor, UserController.deleteUser); // Eliminar usuario por ID

module.exports = router;
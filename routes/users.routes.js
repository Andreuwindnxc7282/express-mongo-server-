const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

// Obtener todos los usuarios
router.get('/', usersController.getAll);

// Obtener un usuario por ID
router.get('/:id', usersController.getById);

// Crear un nuevo usuario
router.post('/', usersController.create);

// Actualizar un usuario
router.put('/:id', usersController.update);

// Eliminar un usuario
router.delete('/:id', usersController.remove);

module.exports = router;
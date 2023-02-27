const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const UserService = require('../../core/services/user.service');
const UserRepository = require('../../core/repositories/user.repository');
const mongoose = require('../../database/mongoose');

const userRepository = new UserRepository(mongoose);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/', userController.create.bind(userController));
router.get('/', userController.findAll.bind(userController));
router.get('/:id', userController.findById.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

module.exports = router;

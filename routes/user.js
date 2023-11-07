const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserPosts)
router.post('/users', userController.createUser)
router.delete('/users/:id', userController.deleteUser)
router.put('/users/:id', userController.updateUser)

module.exports = router
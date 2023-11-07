const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')

router.get('/posts', postController.getAllPosts)

router.post('/posts', postController.createPost)

router.delete('/posts/:id', postController.deletePost)

router.put('/posts/:id', postController.updatePost)

module.exports = router
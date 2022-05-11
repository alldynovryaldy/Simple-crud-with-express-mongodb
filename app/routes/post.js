const express = require('express');
const post = express.Router();
const postController = require('../controllers/postController');

post.get('/post', postController.getPost);
post.post('/post', postController.storePost);
post.patch('/post/:id', postController.updateProduct);
post.get('/post/:id', postController.getPostById);
post.delete('/post/:id', postController.deletePost);

module.exports = post;

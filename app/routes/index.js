const express = require('express');
const router = express.Router();
const post = require('./post');

router.use('/api', [post]);

router.get('/', (req, res) => {
  res.status(200).json({
    message: '404 Not Found',
  });
});

module.exports = router;

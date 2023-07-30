const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');
const authenticateToken = require('../middlewares/authMiddleware');

// Protected route (requires authentication)
router.post('/', authenticateToken, blogPostController.createPost);

module.exports = router;

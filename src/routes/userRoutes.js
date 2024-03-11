const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define your routes
router.get('/', UserController.getUser);
router.post('/', UserController.createUser);
// Add more routes as needed

module.exports = router;
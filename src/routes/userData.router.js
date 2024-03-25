const express = require('express');
const router = express.Router();
const {getUserData ,createUserData} = require('../controllers/userController');

// Define your routes
router.get('/userdata',getUserData);
router.post('/createuser',createUserData);
// Add more routes as needed

module.exports = router;
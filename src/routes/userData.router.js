const express = require('express');
const router = express.Router();
const {getUserData ,createUserData,checkUserData} = require('../controllers/userData.controller');

// Define your routes
router.get('/userdata',getUserData);
router.post('/userdata',createUserData);
router.post('/checkuserdata',checkUserData);
// Add more routes as needed

module.exports = router;
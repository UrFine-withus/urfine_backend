const express = require('express');
const router = express.Router();
const {getUserData ,createUserData,checkUserData} = require('../controllers/userData.controller');

// Define your routes
router.get('/getuser',getUserData);
router.post('/createuser',createUserData);
router.post('/checkuser',checkUserData);
// Add more routes as needed

module.exports = router;
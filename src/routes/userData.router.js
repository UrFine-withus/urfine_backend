const express = require('express');
const router = express.Router();
const {getUserData ,createUserData,checkUserData} = require('../controllers/userData.controller');

// Define your routes
router.route('/')
     .get(getUserData)
     .post(createUserData);
router.route('/check').post(checkUserData);
// Add more routes as needed

module.exports = router;
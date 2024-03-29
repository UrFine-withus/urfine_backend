const express = require('express');
const router = express.Router();
const { addUserInfoData}  = require('../controllers/userInfo.controller');

// Define your routes
router.post('/adduserinfo',addUserInfoData);
// Add more routes as needed

module.exports = router;
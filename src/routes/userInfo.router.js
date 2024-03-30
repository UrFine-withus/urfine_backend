const express = require('express');
const router = express.Router();
const { addUserInfoData,getUserInfoData}  = require('../controllers/userInfo.controller');

// Define your routes
router.post('/adduserinfo',addUserInfoData);
router.get('/getuserinfo',getUserInfoData);
// Add more routes as needed

module.exports = router;
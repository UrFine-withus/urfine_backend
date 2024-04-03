const express = require('express');
const router = express.Router();
const { addUserInfoData,getUserInfoData}  = require('../controllers/userInfo.controller');

// Define your routes
router.post('/userinfo',addUserInfoData);
router.get('/userinfo',getUserInfoData);
// Add more routes as needed

module.exports = router;
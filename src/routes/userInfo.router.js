const express = require('express');
const router = express.Router();
const { addUserInfoData,getUserInfoData,updateUserInfoData}  = require('../controllers/userInfo.controller');

// Define your routes
router.post('/userinfo',addUserInfoData);
router.get('/userinfo',getUserInfoData);
router.put('/userinfo',updateUserInfoData);
// Add more routes as needed

module.exports = router;
const express = require('express');
const router = express.Router();
const { addUserInfoData,getUserInfoData,updateUserInfoData}  = require('../controllers/userInfo.controller');

// Define your routes
router.route('/')
     .post(addUserInfoData)
     .get(getUserInfoData)
     .put(updateUserInfoData);
// Add more routes as needed

module.exports = router;
const express = require('express');
const router = express.Router();
const { getUserInfoData }  = require('../controllers/userInfo.controller');

// Define your routes
router.get('/getuserinfo',getUserInfoData);
// router.post('/createuserinfo',createUserData);
// router.post('/finduserinfo',checkUserData);
// Add more routes as needed

module.exports = router;
const express = require('express');
const routes = express.Router();
const { addUserInfoData,getUserInfoData,updateUserInfoData}  = require('../controllers/userInfo.controller');

// Define your routes
routes.route('/')
     .post(addUserInfoData)
     .get(getUserInfoData)
     .put(updateUserInfoData);
// Add more routes as needed

module.exports = routes;
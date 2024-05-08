const express = require('express');
const routes = express.Router();
const {getUserData ,createUserData,checkUserData,userCountData,deleteUserData} = require('../controllers/userData.controller');

// Define your routes
routes.route('/')
     .get(getUserData)
     .post(createUserData)
     .delete(deleteUserData);
routes.route('/check').patch(checkUserData);
routes.route('/count').get(userCountData);
// Add more routes as needed

module.exports = routes;
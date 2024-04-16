const express = require('express');
const routes = express.Router();
const {getUserData ,createUserData,checkUserData} = require('../controllers/userData.controller');

// Define your routes
routes.route('/')
     .get(getUserData)
     .post(createUserData);
routes.route('/check').post(checkUserData);
// Add more routes as needed

module.exports = routes;
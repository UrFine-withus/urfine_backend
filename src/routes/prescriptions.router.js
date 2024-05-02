const express = require('express');
const routes = express.Router();
const { getPrescriptionData } = require('../controllers/prescription.controller');

// Define your routes
routes.route('/')
     .get(getPrescriptionData)
     // .post(createUserData)
     // .delete(deleteUserData);
// Add more routes as needed

module.exports = routes;
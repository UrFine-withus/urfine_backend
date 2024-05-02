const express = require('express');
const routes = express.Router();
const { getPrescriptionData,createPrescriptionData } = require('../controllers/prescription.controller');

// Define your routes
routes.route('/')
     .get(getPrescriptionData)
      .post(createPrescriptionData)
     // .delete(deleteUserData);
// Add more routes as needed

module.exports = routes;
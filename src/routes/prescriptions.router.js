const express = require('express');
const routes = express.Router();
const { getPrescriptionData,createPrescriptionData,deletePrescriptionData } = require('../controllers/prescription.controller');

// Define your routes
routes.route('/')
     .get(getPrescriptionData)
     .post(createPrescriptionData)
     .delete(deletePrescriptionData);
// Add more routes as needed

module.exports = routes;
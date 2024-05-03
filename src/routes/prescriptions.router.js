const express = require('express');
const routes = express.Router();
const { getPrescriptionData,createPrescriptionData,deletePrescriptionData,getUserPrescriptionData} = require('../controllers/prescription.controller');

// Define your routes
routes.route('/')
     .get(getPrescriptionData)
     .patch(createPrescriptionData)
     // .delete(deletePrescriptionData);
routes.route('/:userId')
     .get(getUserPrescriptionData)
     // .post(createPrescriptionData)
module.exports = routes;
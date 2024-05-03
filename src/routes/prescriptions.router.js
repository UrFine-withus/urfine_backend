const express = require('express');
const routes = express.Router();
const { getPrescriptionData,uploadPrescriptionData,deletePrescriptionData,getUserPrescriptionData} = require('../controllers/prescription.controller');

// Define your routes
routes.route('/')
     .get(getPrescriptionData)
     .patch(uploadPrescriptionData)
     // .delete(deletePrescriptionData);
routes.route('/:userId')
     .get(getUserPrescriptionData)
     // .post(uploadPrescriptionData)
module.exports = routes;
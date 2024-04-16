const express = require('express');
const routes = express.Router();
const {getAllEmergencyData,createEmergencyData,updateEmergencyData,deleteEmergencyData,getEmergencyProfileData} = require('../controllers/emergencyInfo.controller');

// Define your routes
routes.route('/all')
.get(getAllEmergencyData)
routes.route('/')
.post(createEmergencyData)
.put('/',updateEmergencyData)
.delete('/',deleteEmergencyData)
.get('/',getEmergencyProfileData)

// .post('/getcontacts',checkUserData);
// Add more  as needed

module.exports = routes;
const express = require('express');
const router = express.Router();
const {getAllEmergencyData,createEmergencyData,updateEmergencyData,deleteEmergencyData,getEmergencyProfileData} = require('../controllers/emergencyInfo.controller');

// Define your routes
router.get('/getallemergencycontact',getAllEmergencyData);
router.post('/emergencycontact',createEmergencyData);
router.put('/emergencycontact',updateEmergencyData);
router.delete('/emergencycontact',deleteEmergencyData);
router.get('/emergencycontact',getEmergencyProfileData);

// router.post('/getcontacts',checkUserData);
// Add more routes as needed

module.exports = router;
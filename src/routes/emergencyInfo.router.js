const express = require('express');
const router = express.Router();
const {getAllEmergencyData,createEmergencyData,updateEmergencyData} = require('../controllers/emergencyInfo.controller');

// Define your routes
router.get('/getallcontacts',getAllEmergencyData);
router.post('/addcontact',createEmergencyData);
router.post('/updatecontact',updateEmergencyData);
// router.post('/getcontacts',checkUserData);
// Add more routes as needed

module.exports = router;
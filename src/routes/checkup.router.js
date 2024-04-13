const express = require('express');
const router = express.Router();
const { getAllCheckupData,createCheckupData,deleteCheckupData,getAcceptedCheckupData} = require('../controllers/checkup.controller');

// Define your routes
router.get('/checkups',getAllCheckupData);
router.get('/checkups/accepted',getAcceptedCheckupData);
router.post('/checkups',createCheckupData);
router.patch('/checkups',deleteCheckupData);
// Add more routes as needed

module.exports = router;
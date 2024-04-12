const express = require('express');
const router = express.Router();
const { getAllCheckupData,createCheckupData,deleteCheckupData} = require('../controllers/checkup.controller');

// Define your routes
router.get('/checkups',getAllCheckupData);
router.get('/checkups',getAllCheckupData);
router.post('/checkups',createCheckupData);
router.delete('/checkups',deleteCheckupData);
// Add more routes as needed

module.exports = router;
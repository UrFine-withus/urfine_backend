const express = require('express');
const router = express.Router();
const {} = require('../controllers/checkup.controller');

// Define your routes
router.get('/getallcheckups',getAllCheckupData);
router.post('/createcheckups',createCheckupData);
router.delete('/deletecheckups',deleteCheckupData);
// Add more routes as needed

module.exports = router;
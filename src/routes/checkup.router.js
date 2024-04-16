const express = require('express');
const router = express.Router();
const { getAllCheckupData,createCheckupData,deleteCheckupData,getAcceptedCheckupData,acceptCheckupData,getCheckupCountData} = require('../controllers/checkup.controller');

// Define your routes
router.route('/requests').get(getAllCheckupData);
router.route('/requestcount').get(getCheckupCountData);
router.route('/accepted').get(getAcceptedCheckupData);
router.route('/accept').post(acceptCheckupData);
router.route('/')
.post(createCheckupData)
.patch(deleteCheckupData);
// Add more routes as needed

module.exports = router;
const express = require('express');
const router = express.Router();
const { getAllCheckupData,createCheckupRequestData,deleteCheckupRequestData,getAcceptedCheckupData,acceptCheckupData,CheckupCountData,createCheckupResultData} = require('../controllers/checkup.controller');

// Define your routes
router.route('/requests').get(getAllCheckupData);
router.route('/count').get(CheckupCountData);
router.route('/accepted').get(getAcceptedCheckupData);
router.route('/accept').post(acceptCheckupData);
router.route('/')
.post(createCheckupRequestData)
.patch(deleteCheckupRequestData);
router.route('/result')
.post(createCheckupResultData)
// Add more routes as needed

module.exports = router;
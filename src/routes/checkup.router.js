const express = require('express');
const router = express.Router();
const { getAllCheckupRequestData,createCheckupRequestData,deleteCheckupRequestData,getAcceptedCheckupRequestData,acceptCheckupRequestData,CheckupRequestCountData,createCheckupResultData,updateCheckupResultData,getAllCheckupResultData,getLatestAcceptedCheckupRequestData} = require('../controllers/checkup.controller');

// Define your routes
router.route('/requests').get(getAllCheckupRequestData);
router.route('/count').get(CheckupRequestCountData);
router.route('/accepted').get(getAcceptedCheckupRequestData);
router.route('/accept').post(acceptCheckupRequestData);
router.route('/')
.post(createCheckupRequestData)
.patch(deleteCheckupRequestData);
router.route('/result')
.get(getAllCheckupResultData)
.post(createCheckupResultData)
.put(updateCheckupResultData);
router.route('/accepted/date').get(getLatestAcceptedCheckupRequestData);
// Add more routes as needed

module.exports = router;
const express = require('express');
const router = express.Router();
const {getHealthcheckData,getHealthData} =require('../controllers/healthstatus.contoller')
router.route('/').get(getHealthData)


module.exports = router;
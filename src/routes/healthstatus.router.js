const express = require('express');
const router = express.Router();
const {getHealthcheckData,getHealthData} =require('../controllers/healthstatus.contoller')
router.route('/healthz').get(getHealthcheckData);
router.route('/').get(getHealthData)


module.exports = router;
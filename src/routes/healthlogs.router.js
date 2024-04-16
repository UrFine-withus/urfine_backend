const express = require('express');
const router = express.Router();
const{getAllHealthLogsData,createHealthLogData,updateHealthLogData,deleteHealthLogData,getUserHealthLogsData, getHealthLogdateData} = require('../controllers/healthlogs.controller');


router.route('/user').get(getUserHealthLogsData);
router.route('/dates').get(getHealthLogdateData);
router.route('/')
.get(getAllHealthLogsData)
.post(createHealthLogData)
.put(updateHealthLogData)
.delete(deleteHealthLogData)

module.exports = router;
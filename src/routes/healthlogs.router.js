const express = require('express');
const router = express.Router();
const{getAllHealthLogsData,createHealthLogData,updateHealthLogData,deleteHealthLogData,getUserHealthLogsData, getHealthLogdateData} = require('../controllers/healthlogs.controller');

router.get('/healthlog', getAllHealthLogsData);
router.get('/healthlog/user', getUserHealthLogsData);
router.get('/healthlog/git dates', getHealthLogdateData);
router.post('/healthlog', createHealthLogData);
router.put('/healthlog', updateHealthLogData);
router.delete('/healthlog', deleteHealthLogData);

module.exports = router;
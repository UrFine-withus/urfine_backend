const express = require('express');
const router = express.Router();
const{getAllHealthLogsData,createHealthLogData,updateHealthLogData,deleteHealthLogData} = require('../controllers/healthlogs.controller');

router.get('/healthlog', getAllHealthLogsData);
router.post('/healthlog', createHealthLogData);
router.put('/healthlog', updateHealthLogData);
router.delete('/healthlog', deleteHealthLogData);

const express = require('express');
const router = express.Router();
const{getAllHealthLogsData,createHealthLogData,updateHealthLogData,deleteHealthLogData} = require('../controllers/healthlogs.controller');

router.get('/', getAllHealthLogsData);
router.post('/', createHealthLogData);
router.put('/', updateHealthLogData);
router.delete('/', deleteHealthLogData);

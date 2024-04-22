const express = require('express');
const routes = express.Router();
const{getAllHealthLogsData,createHealthLogData,updateHealthLogData,deleteHealthLogData} = require('../controllers/healthlogs.controller');

routes.route('/')
.get(getAllHealthLogsData)
.post(createHealthLogData)
.put(updateHealthLogData)
.delete(deleteHealthLogData)

module.exports = routes;
const UserdataRouter = require('./userData.router');
const UserInfoRouter = require('./userInfo.router');
const UserFilesRouter = require('./userFiles.router');
const EmergencyInfoRouter = require('./emergencyInfo.router');
const HealthLogRouter=require('./healthlogs.router');
const CheckupRouter = require('./checkup.router');

const express = require('express');
const routes = express.Router();
    routes.use('/userdata', UserdataRouter);
    routes.use('/userinfo', UserInfoRouter);
    routes.use('/userfiles', UserFilesRouter);
    routes.use('/emergencyinfo', EmergencyInfoRouter);
    routes.use('/healthlogs', HealthLogRouter);
    routes.use('/checkups', CheckupRouter);

module.exports = routes;
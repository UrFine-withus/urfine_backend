const UserdataRouter = require('./userData.router');
const UserInfoRouter = require('./userInfo.router');
const UserFilesRouter = require('./userFiles.router');
const EmergencyInfoRouter = require('./emergencyInfo.router');
const HistoryLogRouter=require('./historylogs.router');
const CheckupRouter = require('./checkup.router');
const HealthLogRouter = require('./healthlogs.router');
const PrescriptionRouter = require('./prescriptions.router');
const HealthStatusRouter =require('./')
const express = require('express');
const routes = express.Router();
    routes.use('/',HealthStatusRouter)
    routes.use('/userdata', UserdataRouter);
    routes.use('/userinfo', UserInfoRouter);
    // routes.use('/userfiles', UserFilesRouter);
    routes.use('/emergencyinfo', EmergencyInfoRouter);
    routes.use('/historylogs', HistoryLogRouter);
    routes.use('/healthlogs', HealthLogRouter);
    routes.use('/checkups', CheckupRouter);
    routes.use('/prescriptions', PrescriptionRouter);

module.exports = routes;
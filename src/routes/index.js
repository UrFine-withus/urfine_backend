const UserdataRouter = require('./userData.router');
const UserInfoRouter = require('./userInfo.router');
const EmergencyInfoRouter = require('./emergencyInfo.router');
const HistoryLogRouter=require('./historylogs.router');
const CheckupRouter = require('./checkup.router');
const HealthLogRouter = require('./healthlogs.router');
const PrescriptionRouter = require('./prescriptions.router');
const HealthStatusRouter =require('./healthstatus.router')
const express = require('express');
const routes = express.Router();
    routes.use('/',HealthStatusRouter)
    routes.use('/userdata', UserdataRouter);
    routes.use('/userinfo', UserInfoRouter);
    routes.use('/emergencyinfo', EmergencyInfoRouter);
    routes.use('/historylogs', HistoryLogRouter);
    routes.use('/healthlogs', HealthLogRouter);
    routes.use('/checkups', CheckupRouter);
    routes.use('/prescriptions', PrescriptionRouter);

module.exports = routes;
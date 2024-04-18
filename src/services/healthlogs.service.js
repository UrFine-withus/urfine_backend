const {HealthLogModel} = require('../models');

const getAllHealthLogs = async (req, res) => {
    try {
        const healthlogs = await HealthLogModel.find();
        res.status(200).json(healthlogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createHealthLogs = async (req, res) => {
    try {
        const healthlog = req.body;
        const newHealthLog = await HealthLogModel.create(healthlog);
        res.status(201).json(newHealthLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getAllHealthLogs,
    createHealthLogs
}
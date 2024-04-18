const {HealthLogModel} = require('../models');

const getAllHealthLogsData = async (req, res) => {
    try {
        const healthlogs = await HealthLogModel.find();
        res.status(200).json(healthlogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllHealthLogsData
}
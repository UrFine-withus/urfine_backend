const {HealthLogModel} = require('../models');

const getAllHealthLogs = async () => {
    try {
        return await HealthLogModel.find();
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        throw new Error('Error fetching user');
    }
}
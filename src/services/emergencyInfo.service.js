const {EmergencyInfoModel} = require('../models');

const getEmergency = async () => {
    try {
        return await EmergencyInfoModel.find();
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user');
    }
}

module.exports = {
    getEmergency
}
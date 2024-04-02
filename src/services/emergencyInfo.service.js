const {EmergencyInfoModel} = require('../models');

const getEmergency = async () => {
    try {
        return await EmergencyInfoModel.find();
    } catch (error) {
        console.error('Error fetching emergency contacts:', error);
        throw new Error('Error fetching user');
    }
}

const createEmergency = async (req) =>  {
    try {
      const emergencyContact = new EmergencyInfoModel({ ...req});
      return await emergencyContact.save();
    } catch (error) {
      console.error('Error creating contact details:', error);
      throw error;
    }
  };

module.exports = {
    getEmergency,
    createEmergency
}
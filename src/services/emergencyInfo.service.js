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
         const isEmptyReq = Object.values(req).every(value => value === '');

        if (isEmptyReq) {
            return {
                message: ""
            };
        }
      const existingEmergency = await EmergencyInfoModel.findOne({...req});
      
      if (existingEmergency) {
          return {
            message:"Emergency contact already exists in the database"
          };
      } else {
          const newEmergency = new EmergencyInfoModel({...req});
          return await newEmergency.save();
      }
  } catch (error) {
      console.error('Error creating contact details:', error);
      throw error;
  }
};

 const updateEmergency = async (req) => {
    try {
        return await EmergencyInfoModel.findByIdAndUpdate(req, req, { upsert: true, new: true });
    } catch (error) {
      console.error('Error updating contact details:', error);
      throw error;
    }
  };

module.exports = {
    getEmergency,
    createEmergency,
    updateEmergency
}
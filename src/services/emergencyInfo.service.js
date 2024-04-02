const {EmergencyInfoModel} = require('../models');

const getAllEmergency = async () => {
    try {
        return await EmergencyInfoModel.find();
    } catch (error) {
        console.error('Error fetching emergency contacts:', error);
        throw new Error('Error fetching user');
    }
}
 const getEmergencyProfile = async (profile) => {
    try {
        return await EmergencyInfoModel.find({profile});
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
                message: "Emergency contact details cannot be empty"
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
        const data= await EmergencyInfoModel.findByIdAndUpdate(req, req, { upsert: true, new: true });
        if(data){
            return {
                message: "Emergency contact updated successfully"
            };
        }
    } catch (error) {
      console.error('Error updating contact details:', error);
      throw error;
    }
  };

const deleteEmergency = async (req) => {
    try {
         const data = await EmergencyInfoModel.findByIdAndDelete(req);
         if(data){
              return {
                  message: "Emergency contact deleted successfully"
              };
         }
    } catch (error) {
        console.error('Error deleting contact details:', error);
        throw error;
    }
}  


module.exports = {
    getAllEmergency,
    createEmergency,
    updateEmergency,
    deleteEmergency,
    getEmergencyProfile
}
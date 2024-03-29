// Import any required models here
const {UserInfoModel} = require('../models');

// Define your service methods
const addUserInfo = async (req) => {
  try {
    const userInfo = new  UserInfoModel({ ...req});
    return await userInfo.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
    addUserInfo,
  };
  
// Import any required models here
const {UserInfoModel} = require('../models');

// Define your service methods
const getUserInfo = async () => {
  try {
    console.log('Get user function is working')
    return await UserInfoModel.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

module.exports = {
    getUserInfo,
  };
  
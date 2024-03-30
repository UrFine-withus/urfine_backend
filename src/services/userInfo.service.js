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
const getUserInfo = async (_userID) => {
  try {
    console.log("service is working",_userID);
    return await UserInfoModel.find({_userID});
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

module.exports = {
    addUserInfo,
    getUserInfo
  };
  
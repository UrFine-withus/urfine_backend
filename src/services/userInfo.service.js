// Import any required models here
const {UserInfoModel} = require('../models');

// Define your service methods
const addUserInfo = async (req) => {
  try {
    const userInfo = new  UserInfoModel({ ...req});
    const create= await userInfo.save();
    if(create){
    return {
      message: "User created successfully"
    };}
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

const updateUserInfo = async (req) => {
  try {
    const data= await UserInfoModel.findByIdAndUpdate(req, req, { upsert: true, new: true });
    if(data){
        return {
            message: "User updated successfully"
          }}
        }
        catch (error) {
          console.error('Error fetching updating the user:', error);
          throw error;
        }
      }; 











module.exports = {
    addUserInfo,
    getUserInfo,
    updateUserInfo
  };
  